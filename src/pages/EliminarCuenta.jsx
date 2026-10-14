import LegalLayout from '../components/LegalLayout';

const TITLE = { es: 'Elimina tu cuenta de Notara', en: 'Delete your Notara account' };

const TOC = {
  es: [
    ['en-la-app', 'En la app'],
    ['sin-la-app', 'Sin la app'],
    ['que-se-borra', 'Qué se borra'],
    ['que-se-conserva', 'Qué no se borra o se conserva'],
    ['desarrollador', 'Desarrollador'],
  ],
  en: [
    ['en-la-app', 'In the app'],
    ['sin-la-app', 'Without the app'],
    ['que-se-borra', "What's deleted"],
    ['que-se-conserva', "What's not deleted, or is kept"],
    ['desarrollador', 'Developer'],
  ],
};

function BodyEs() {
  return (
    <>
      <p>Puedes pedir que eliminemos tu cuenta de Notara y sus datos aunque ya no tengas la app instalada.</p>

      <section id="en-la-app"><h2>1. En la app (lo más rápido)</h2><p>Abre Notara → <strong>Cuenta</strong> (arriba a la derecha) → <strong>Eliminar cuenta</strong> → <strong>Eliminar</strong>. Se aplica de inmediato.</p></section>

      <section id="sin-la-app"><h2>2. Sin la app</h2><p>Escribe a <a href="mailto:privacidad@notaraapp.com?subject=Delete%20my%20account">privacidad@notaraapp.com</a> desde el correo con el que inicias sesión, con el asunto "Delete my account". Eliminamos la cuenta en un plazo de <strong>30 días</strong> y te confirmamos por correo.</p></section>

      <section id="que-se-borra"><h2>Qué se borra</h2><ul>
        <li>La cuenta: correo, nombre e identificador de usuario.</li>
        <li>Tus respuestas de "Sobre ti" y las preferencias de la app guardadas en la cuenta.</li>
        <li>Notas, transcripciones, resúmenes, preguntas, flashcards y progreso de estudio sincronizados en la nube (Pro).</li>
        <li>Grabaciones respaldadas en la nube (Pro).</li>
        <li>Los contadores de uso del plan gratis.</li>
        <li>El historial de compras que guarda nuestro proveedor de suscripciones (RevenueCat).</li>
      </ul></section>

      <section id="que-se-conserva"><h2>Qué no se borra o se conserva</h2><ul>
        <li><strong>Notas en tu teléfono.</strong> Notara las guarda en el dispositivo. Desaparecen cuando borras las notas o desinstalas la app.</li>
        <li><strong>Suscripciones.</strong> Eliminar la cuenta no cancela tu suscripción. Cancélala antes en el App Store o en Google Play.</li>
        <li><strong>Registros de las tiendas.</strong> Apple y Google guardan sus propios registros de compra según sus políticas.</li>
        <li><strong>Registros de seguridad del servidor.</strong> Los registros de nuestro proveedor de backend, que pueden incluir direcciones IP, se borran según el calendario de ese proveedor, en un plazo de <strong>90 días</strong>.</li>
      </ul></section>

      <section id="desarrollador"><h2>Desarrollador</h2><p>Notara, de <strong>aibm.dev</strong>.</p></section>
    </>
  );
}

function BodyEn() {
  return (
    <>
      <p>You can ask us to delete your Notara account and its data, even if the app is no longer installed.</p>

      <section id="en-la-app"><h2>1. In the app (fastest)</h2><p>Open Notara → <strong>Account</strong> (top right) → <strong>Delete account</strong> → <strong>Delete</strong>. It takes effect at once.</p></section>

      <section id="sin-la-app"><h2>2. Without the app</h2><p>Email <a href="mailto:privacidad@notaraapp.com?subject=Delete%20my%20account">privacidad@notaraapp.com</a> from the address you sign in with, with the subject "Delete my account". The account is deleted within <strong>30 days</strong>, and you get a confirmation by email.</p></section>

      <section id="que-se-borra"><h2>What's deleted</h2><ul>
        <li>The account: email, name and user id.</li>
        <li>Your "About you" answers and app preferences copied to the account.</li>
        <li>Notes, transcripts, summaries, questions and flashcards, and study progress synced to the cloud (Pro).</li>
        <li>Recordings backed up to the cloud (Pro).</li>
        <li>The free-plan usage counters.</li>
        <li>The purchase history kept by our subscription provider (RevenueCat).</li>
      </ul></section>

      <section id="que-se-conserva"><h2>What's not deleted, or is kept</h2><ul>
        <li><strong>Notes on your phone.</strong> Notara keeps them on the device. They go away when you delete the notes or uninstall the app.</li>
        <li><strong>Subscriptions.</strong> Deleting the account doesn't cancel a subscription. Cancel it in the App Store or Google Play first.</li>
        <li><strong>Store records.</strong> Apple and Google keep their own purchase records under their own policies.</li>
        <li><strong>Server security logs.</strong> Our backend provider's logs, which may include IP addresses, are removed on that provider's schedule, within <strong>90 days</strong>.</li>
      </ul></section>

      <section id="desarrollador"><h2>Developer</h2><p>Notara, by <strong>aibm.dev</strong>.</p></section>
    </>
  );
}

export default function EliminarCuenta({ lang }) {
  const Body = lang === 'en' ? BodyEn : BodyEs;
  return (
    <LegalLayout lang={lang} title={TITLE[lang]} toc={TOC[lang]} current="deletion">
      <Body />
    </LegalLayout>
  );
}
