# Pendientes — Términos y Aviso de privacidad

Datos que faltan o hay que confirmar antes de publicar las páginas legales.
Cada texto existe en español e inglés: cámbialo en las dos versiones (`BodyEs` y `BodyEn`).

- Privacidad: `src/pages/Privacidad.jsx` → `/privacidad` y `/privacy`
- Términos: `src/pages/Terminos.jsx` → `/terminos` y `/terms`
- Fechas del encabezado: `src/i18n/common.js` (`effectiveDate`, `updated`)

## 1. Nombre legal del responsable

Hoy dice **aibm.dev**, que es un dominio y no un nombre legal. Reemplázalo por la razón social registrada
o, si eres persona natural, por tu nombre completo (idealmente con RUC o cédula).

Busca `aibm.dev` en `src/pages/`:
- Privacidad → "Quién es responsable de tus datos" y "Contacto"
- Términos → "Aceptación" y "Contacto"

## 2. Domicilio completo

Hoy dice **Quito, Ecuador**. Muchas leyes de protección de datos piden la dirección completa.

Busca `Quito, Ecuador` en `src/pages/`:
- Privacidad → "Quién es responsable de tus datos" y "Contacto"
- Términos → "Contacto"

## 3. Crear los correos en notaraapp.com

Las páginas ya muestran estas direcciones, pero todavía no existen:
- **privacidad@notaraapp.com**: solicitudes de privacidad (hay que responder en 15 días)
- **hola@notaraapp.com**: soporte

Opción sugerida, Cloudflare Email Routing (gratis, reenvía a Gmail):
1. Agregar `notaraapp.com` a Cloudflare.
2. Email → Email Routing → activar (crea los registros MX).
3. Crear las reglas `privacidad@` y `hola@` → tu Gmail.
4. Confirmar el correo de verificación en Gmail.

Resend sirve para enviar correos desde la app. Su recepción entrega los correos a un webhook y estaba en beta
privada, así que no conviene para estas bandejas.

## 4. Revisión legal (Ecuador)

Que un abogado revise ambos textos en los dos idiomas, en especial:
- **Plazo de respuesta: 15 días.** Sale de procedimientos publicados por instituciones ecuatorianas, no del artículo de la ley.
- **Edad mínima: 15 años**, y la regla de que menores de 18 necesitan permiso de su madre, padre o tutor.
- **Ley aplicable: Ecuador. Tribunales: Quito.**
- La traducción al inglés, que no ha revisado nadie más.

## 5. Datos ya escritos que hay que confirmar

- Proveedores: Supabase, Google (API de Gemini), RevenueCat, Apple y Google
- Precios: $7.99 USD/mes y $59.99 USD/año; 40% de descuento para estudiantes
  (también aparecen en la página de inicio: `src/i18n/home.jsx`)
- Prueba gratis de 3 días; cancelar al menos 24 horas antes de que termine
- Borrado de la cuenta en 30 días; copias de seguridad en 90 días
- Tope de responsabilidad: lo pagado en los últimos 12 meses
- Fechas: vigente desde el 12 de octubre de 2026; última actualización el 11 de octubre de 2026
