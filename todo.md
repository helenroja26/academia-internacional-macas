# ChessK Academy - TODO

## Arquitectura y Base de Datos
- [x] Diseñar esquema de base de datos (usuarios, inscripciones, pagos, planes)
- [x] Crear tablas en Drizzle: students, enrollments, payments, plans
- [x] Implementar helpers de base de datos en server/db.ts

## Configuración de Stripe
- [x] Agregar dependencias de Stripe (stripe npm package)
- [x] Configurar claves API de Stripe (test mode)
- [ ] Crear procedimiento tRPC para crear sesiones de pago
- [ ] Implementar webhook de Stripe para confirmar pagos

## Estructura Base
- [x] Diseñar y desarrollar Navbar sticky con logo, navegación y CTA
- [x] Crear Hero section con logo, eslogan y botón de inscripción
- [x] Implementar Footer con redes sociales, contacto y derechos
- [x] Establecer layout general con espaciado y estructura

## Secciones de Contenido
- [x] Sección "Sobre Nosotros" con historia y metodología
- [x] Sección "Clases y Planes" con niveles (principiante, intermedio, avanzado)
- [x] Sección "Beneficios" con iconografía (desarrollo cognitivo, concentración, lógica, disciplina)
- [x] Sección "Testimonios" con comentarios de padres
- [x] Sección "Preguntas Frecuentes" (FAQ) con acordeón

## Formulario e Inscripción
- [x] Crear formulario de inscripción con campos: nombre, correo, edad, mensaje
- [x] Implementar validación de formulario con Zod
- [x] Crear procedimiento tRPC para guardar inscripciones
- [x] Implementar notificaciones automáticas al propietario

## Sistema de Pagos
- [ ] Crear página de checkout con resumen de plan
- [ ] Integrar botón de pago con Stripe
- [ ] Implementar confirmación de pago y redirección
- [ ] Guardar registros de pago en base de datos

## Diseño Visual
- [ ] Aplicar gradientes pastel (lavanda, rosa blush, menta pálida)
- [ ] Configurar tipografía serif elegante (slate-purple)
- [ ] Agregar tipografía sans-serif minimalista para textos secundarios
- [ ] Implementar acentos geométricos delicados (corchetes, líneas)
- [ ] Optimizar espaciado y espacio negativo

## Responsividad y Pruebas
- [ ] Optimizar para móviles (320px+)
- [ ] Optimizar para tabletas (768px+)
- [ ] Optimizar para escritorio (1024px+)
- [ ] Pruebas de formulario y validación
- [ ] Pruebas de flujo de pago con Stripe
- [ ] Pruebas de notificaciones al propietario

## Entrega
- [ ] Crear checkpoint final
- [ ] Verificar todas las funcionalidades
- [ ] Documentar instrucciones de uso
