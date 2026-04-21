import nodemailer from "nodemailer";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@shared/const";
import { ENV } from "./env";

export type InquiryEmailPayload = {
  parentName: string;
  parentEmail: string;
  studentName?: string;
  studentAge: number;
  message?: string;
};

let transporterPromise: Promise<nodemailer.Transporter | null> | null = null;

export function hasSmtpConfig() {
  return Boolean(
    ENV.smtpHost &&
      ENV.smtpPort &&
      ENV.smtpUser &&
      ENV.smtpPass &&
      ENV.contactNotificationToEmail
  );
}

async function getTransporter() {
  if (!hasSmtpConfig()) {
    return null;
  }

  if (!transporterPromise) {
    transporterPromise = Promise.resolve(
      nodemailer.createTransport({
        host: ENV.smtpHost,
        port: ENV.smtpPort,
        secure: ENV.smtpPort === 465,
        auth: {
          user: ENV.smtpUser,
          pass: ENV.smtpPass,
        },
      })
    );
  }

  return transporterPromise;
}

function buildTextContent(payload: InquiryEmailPayload) {
  return [
    "Nueva solicitud desde el formulario web de ChessK Academy.",
    "",
    `Padre o tutor: ${payload.parentName}`,
    `Correo de contacto: ${payload.parentEmail}`,
    `Nombre del estudiante: ${payload.studentName?.trim() || "No especificado"}`,
    `Edad del estudiante: ${payload.studentAge}`,
    `WhatsApp de la academia: ${CONTACT_PHONE_DISPLAY}`,
    "",
    "Mensaje:",
    payload.message?.trim() || "Sin mensaje adicional.",
  ].join("\n");
}

function buildHtmlContent(payload: InquiryEmailPayload) {
  return `
    <div style="font-family: Arial, sans-serif; color: #2d1b4d; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Nueva solicitud desde el formulario web</h2>
      <p><strong>Padre o tutor:</strong> ${payload.parentName}</p>
      <p><strong>Correo de contacto:</strong> ${payload.parentEmail}</p>
      <p><strong>Nombre del estudiante:</strong> ${payload.studentName?.trim() || "No especificado"}</p>
      <p><strong>Edad del estudiante:</strong> ${payload.studentAge}</p>
      <p><strong>Mensaje:</strong><br/>${(payload.message?.trim() || "Sin mensaje adicional.").replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

export async function sendInquiryNotificationEmail(
  payload: InquiryEmailPayload
): Promise<boolean> {
  const transporter = await getTransporter();

  if (!transporter) {
    console.warn("[Email] SMTP config not found. Skipping inquiry email delivery.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: ENV.contactNotificationFromEmail || ENV.smtpUser,
      to: ENV.contactNotificationToEmail || CONTACT_EMAIL,
      replyTo: payload.parentEmail,
      subject: `Nueva inscripción: ${payload.parentName}`,
      text: buildTextContent(payload),
      html: buildHtmlContent(payload),
    });

    return true;
  } catch (error) {
    console.warn("[Email] Failed to send inquiry notification email:", error);
    return false;
  }
}