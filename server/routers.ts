import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import * as db from "./db";
import { notifyOwner } from "./_core/notification";
import { hasSmtpConfig, sendInquiryNotificationEmail } from "./_core/email";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    createInquiry: publicProcedure
      .input(
        z.object({
          parentName: z.string().min(2),
          parentEmail: z.string().email(),
          studentName: z.string().optional(),
          studentAge: z.number().min(6).max(18),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const emailConfigured = hasSmtpConfig();
          let savedToDatabase = false;

          try {
            await db.createStudent({
              parentName: input.parentName,
              parentEmail: input.parentEmail,
              studentName: input.studentName,
              studentAge: input.studentAge,
              message: input.message,
              status: 'pending',
            });
            savedToDatabase = true;
          } catch (databaseError) {
            console.error('Error saving inquiry to database:', databaseError);
          }

          const [ownerNotificationSent, emailNotificationSent] = await Promise.all([
            notifyOwner({
              title: 'Nueva Inscripcion en ChessK Academy',
              content: `Nuevo interesado:\n\nPadre/Tutor: ${input.parentName}\nEmail: ${input.parentEmail}\nEstudiante: ${input.studentName || 'No especificado'}\nEdad: ${input.studentAge}\nMensaje: ${input.message || 'Sin mensaje'}`,
            }).catch(error => {
              console.warn('Owner notification unavailable:', error);
              return false;
            }),
            sendInquiryNotificationEmail({
              parentName: input.parentName,
              parentEmail: input.parentEmail,
              studentName: input.studentName,
              studentAge: input.studentAge,
              message: input.message,
            }),
          ]);

          if (!savedToDatabase && !ownerNotificationSent && !emailNotificationSent) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: 'Error al procesar la inscripcion',
            });
          }

          return {
            success: true,
            message: 'Inscripcion recibida',
            notificationDelivered: ownerNotificationSent || emailNotificationSent,
            emailConfigured,
            savedToDatabase,
          };
        } catch (error) {
          console.error('Error creating inquiry:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error al procesar la inscripcion',
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
