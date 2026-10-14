import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const TITLE = { es: 'Términos y condiciones', en: 'Terms and conditions' };

const TOC = {
  es: [
    ['aceptacion', 'Aceptación'],
    ['servicio', 'Qué es Notara'],
    ['cuenta', 'Tu cuenta'],
    ['planes', 'Planes, pagos y prueba gratis'],
    ['contenido', 'Tu contenido es tuyo'],
    ['grabar', 'Grabar a otras personas'],
    ['uso', 'Uso aceptable'],
    ['ia', 'Resultados de la inteligencia artificial'],
    ['propiedad', 'Propiedad intelectual de Notara'],
    ['disponibilidad', 'Disponibilidad y cambios'],
    ['responsabilidad', 'Limitación de responsabilidad'],
    ['terminacion', 'Cierre de cuenta'],
    ['ley', 'Ley aplicable'],
    ['cambios', 'Cambios a estos términos'],
    ['contacto', 'Contacto'],
  ],
  en: [
    ['aceptacion', 'Acceptance'],
    ['servicio', 'What Notara is'],
    ['cuenta', 'Your account'],
    ['planes', 'Plans, payments and free trial'],
    ['contenido', 'Your content is yours'],
    ['grabar', 'Recording other people'],
    ['uso', 'Acceptable use'],
    ['ia', 'Artificial intelligence results'],
    ['propiedad', 'Notara\'s intellectual property'],
    ['disponibilidad', 'Availability and changes'],
    ['responsabilidad', 'Limitation of liability'],
    ['terminacion', 'Closing your account'],
    ['ley', 'Governing law'],
    ['cambios', 'Changes to these terms'],
    ['contacto', 'Contact'],
  ],
};

function BodyEs() {
  return (
    <>
      <p>Estos términos regulan el uso de Notara. Los escribimos en lenguaje claro; léelos con calma, porque al usar la app aceptas cumplirlos.</p>

      <section id="aceptacion"><h2>Aceptación</h2><p>Notara es un servicio de aibm.dev ("Notara", "nosotros"). Al descargar o usar la app aceptas estos términos y nuestro <Link to="/privacidad">aviso de privacidad</Link>. Si no estás de acuerdo, no uses Notara.</p></section>

      <section id="servicio"><h2>Qué es Notara</h2><p>Notara graba audio, lo transcribe en tu teléfono y, si lo pides, usa inteligencia artificial en la nube para crear resúmenes, preguntas, flashcards, quizzes y respuestas a partir de tus notas. Tiene tres modos: Clase, Reunión y Personal.</p></section>

      <section id="cuenta"><h2>Tu cuenta</h2><p>Puedes grabar y transcribir sin cuenta. Para usar la IA en la nube o sincronizar necesitas una, creada con Apple, Google o tu correo. Eres responsable de lo que pase en tu cuenta; avísanos en <a href="mailto:hola@notaraapp.com">hola@notaraapp.com</a> si crees que alguien más la usa. Debes tener al menos 15 años, y si eres menor de 18, contar con el permiso de tu madre, padre o tutor.</p></section>

      <section id="planes"><h2>Planes, pagos y prueba gratis</h2>
        <h3>Plan gratis</h3><p>Grabar y transcribir en tu teléfono no tiene límite. La IA en la nube incluye 3 resúmenes o quizzes y 5 preguntas al chat por semana; los límites se reinician cada semana y los que no uses no se acumulan.</p>
        <h3>Notara Pro</h3><p>Pro quita los límites de la IA e incluye modo privado y sincronización. Cuesta $7.99 USD al mes o $59.99 USD al año, o su equivalente en precios locales que verás en la tienda antes de pagar. Los estudiantes verificados tienen 40% de descuento.</p>
        <h3>Prueba gratis</h3><p>El plan anual incluye 3 días gratis. Si no cancelas al menos 24 horas antes de que termine la prueba, se cobra el primer año.</p>
        <h3>Renovación y cancelación</h3><p>Las suscripciones se renuevan solas al final de cada periodo, salvo que las canceles al menos 24 horas antes. El cobro, la cancelación y los reembolsos los gestionan Apple (App Store) o Google (Google Play) con sus propias reglas, desde los ajustes de tu cuenta en la tienda. Cancelar no borra tus notas; sigues con el plan gratis.</p>
        <h3>Cambios de precio</h3><p>Si cambiamos el precio, te avisaremos antes de tu siguiente renovación y podrás cancelar.</p>
      </section>

      <section id="contenido"><h2>Tu contenido es tuyo</h2><p>Las grabaciones, transcripciones y notas son tuyas. Nos das solo el permiso necesario para procesarlas, guardarlas y mostrártelas mientras usas Notara. Ese permiso termina cuando borras el contenido o tu cuenta, con los plazos que explica el aviso de privacidad. No usamos tu contenido para entrenar modelos de IA.</p></section>

      <section id="grabar"><h2>Grabar a otras personas</h2><p>Antes de grabar una clase, reunión o conversación, <strong>es tu responsabilidad obtener el permiso</strong> de quien habla cuando la ley, tu escuela o tu trabajo lo exijan. Respeta las reglas de tu institución sobre grabar clases y no grabes conversaciones privadas sin consentimiento.</p></section>

      <section id="uso"><h2>Uso aceptable</h2><p>No puedes usar Notara para:</p><ul><li>Grabar o difundir contenido de forma ilegal o sin los permisos necesarios.</li><li>Violar derechos de autor, por ejemplo redistribuyendo clases o materiales que no son tuyos.</li><li>Acosar, discriminar o dañar a otras personas.</li><li>Intentar acceder a sistemas o cuentas ajenas, saltarte los límites del plan o copiar la app.</li></ul><p>Si incumples estas reglas, podemos suspender o cerrar tu cuenta.</p></section>

      <section id="ia"><h2>Resultados de la inteligencia artificial</h2><p>Los resúmenes, preguntas, respuestas y transcripciones se generan de forma automática y pueden tener errores u omisiones. Revísalos antes de usarlos para estudiar, tomar decisiones o compartirlos. Notara es una herramienta de apoyo y no sustituye a tus apuntes, a tus profesores ni a asesoría profesional.</p></section>

      <section id="propiedad"><h2>Propiedad intelectual de Notara</h2><p>La app, el nombre Notara, el logo, el diseño y el software son nuestros o de nuestros licenciantes. Te damos una licencia personal, no exclusiva e intransferible para usar la app en tus dispositivos de acuerdo con estos términos.</p></section>

      <section id="disponibilidad"><h2>Disponibilidad y cambios</h2><p>Trabajamos para que Notara funcione siempre, pero puede haber interrupciones por mantenimiento o fallas. Podemos agregar, cambiar o retirar funciones; si un cambio afecta lo que pagaste, te avisaremos con anticipación. Las funciones marcadas como "pronto" no están incluidas hasta que se lancen.</p></section>

      <section id="responsabilidad"><h2>Limitación de responsabilidad</h2><p>En la medida en que la ley lo permita, Notara se ofrece "tal cual" y no respondemos por pérdidas indirectas, por datos que solo existían en un dispositivo perdido o dañado, ni por decisiones tomadas con base en resultados de la IA. Nuestra responsabilidad total no superará lo que hayas pagado por Notara en los 12 meses anteriores. Nada de esto limita los derechos que te da la ley de protección al consumidor de tu país.</p></section>

      <section id="terminacion"><h2>Cierre de cuenta</h2><p>Puedes dejar de usar Notara y borrar tu cuenta cuando quieras desde la app. Recuerda cancelar también tu suscripción en la tienda. Podemos cerrar tu cuenta si incumples estos términos; si lo hacemos sin una causa grave, te avisaremos antes y podrás pedirnos una copia de tus datos.</p></section>

      <section id="ley"><h2>Ley aplicable</h2><p>Estos términos se rigen por las leyes de Ecuador. Cualquier disputa se resolverá ante los tribunales de Quito, sin perjuicio de los derechos que tengas como consumidor en tu país.</p></section>

      <section id="cambios"><h2>Cambios a estos términos</h2><p>Si cambiamos estos términos de forma importante, te avisaremos en la app con anticipación. Si sigues usando Notara después de la fecha de entrada en vigor, aceptas la nueva versión.</p></section>

      <section id="contacto"><h2>Contacto</h2><p>aibm.dev<br />Quito, Ecuador<br /><a href="mailto:hola@notaraapp.com">hola@notaraapp.com</a></p></section>
    </>
  );
}

function BodyEn() {
  return (
    <>
      <p>These terms govern your use of Notara. We wrote them in plain language; read them carefully, because by using the app you agree to follow them.</p>

      <section id="aceptacion"><h2>Acceptance</h2><p>Notara is a service of aibm.dev ("Notara", "we"). By downloading or using the app you accept these terms and our <Link to="/privacy">privacy notice</Link>. If you don't agree, don't use Notara.</p></section>

      <section id="servicio"><h2>What Notara is</h2><p>Notara records audio, transcribes it on your phone and, if you ask, uses cloud artificial intelligence to create summaries, questions, flashcards, quizzes and answers from your notes. It has three modes: Class, Meeting and Personal.</p></section>

      <section id="cuenta"><h2>Your account</h2><p>You can record and transcribe without an account. To use cloud AI or sync, you need one, created with Apple, Google or your email. You are responsible for what happens in your account; let us know at <a href="mailto:hola@notaraapp.com">hola@notaraapp.com</a> if you think someone else is using it. You must be at least 15, and if you are under 18, have permission from your parent or guardian.</p></section>

      <section id="planes"><h2>Plans, payments and free trial</h2>
        <h3>Free plan</h3><p>Recording and transcribing on your phone has no limit. Cloud AI includes 3 summaries or quizzes and 5 chat questions per week; the limits reset every week and unused ones don't carry over.</p>
        <h3>Notara Pro</h3><p>Pro removes the AI limits and includes private mode and sync. It costs $7.99 USD per month or $59.99 USD per year, or the equivalent in local prices that you'll see in the store before paying. Verified students get 40% off.</p>
        <h3>Free trial</h3><p>The yearly plan includes 3 free days. If you don't cancel at least 24 hours before the trial ends, the first year is charged.</p>
        <h3>Renewal and cancellation</h3><p>Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before. Billing, cancellation and refunds are handled by Apple (App Store) or Google (Google Play) under their own rules, from your account settings in the store. Cancelling doesn't delete your notes; you stay on the free plan.</p>
        <h3>Price changes</h3><p>If we change the price, we will let you know before your next renewal and you can cancel.</p>
      </section>

      <section id="contenido"><h2>Your content is yours</h2><p>Your recordings, transcripts and notes are yours. You give us only the permission needed to process, store and show them to you while you use Notara. That permission ends when you delete the content or your account, within the periods explained in the privacy notice. We don't use your content to train AI models.</p></section>

      <section id="grabar"><h2>Recording other people</h2><p>Before recording a class, meeting or conversation, <strong>it is your responsibility to get permission</strong> from the people speaking whenever the law, your school or your workplace requires it. Respect your institution's rules about recording classes and don't record private conversations without consent.</p></section>

      <section id="uso"><h2>Acceptable use</h2><p>You may not use Notara to:</p><ul><li>Record or share content illegally or without the necessary permissions.</li><li>Infringe copyright, for example by redistributing classes or materials that aren't yours.</li><li>Harass, discriminate against or harm other people.</li><li>Try to access other people's systems or accounts, get around the plan limits or copy the app.</li></ul><p>If you break these rules, we may suspend or close your account.</p></section>

      <section id="ia"><h2>Artificial intelligence results</h2><p>Summaries, questions, answers and transcripts are generated automatically and may contain errors or omissions. Review them before using them to study, make decisions or share them. Notara is a support tool and doesn't replace your own notes, your teachers or professional advice.</p></section>

      <section id="propiedad"><h2>Notara's intellectual property</h2><p>The app, the Notara name, the logo, the design and the software belong to us or our licensors. We give you a personal, non-exclusive, non-transferable license to use the app on your devices in accordance with these terms.</p></section>

      <section id="disponibilidad"><h2>Availability and changes</h2><p>We work to keep Notara running at all times, but there may be interruptions for maintenance or failures. We may add, change or remove features; if a change affects what you paid for, we will let you know in advance. Features marked "coming soon" are not included until they launch.</p></section>

      <section id="responsabilidad"><h2>Limitation of liability</h2><p>To the extent the law allows, Notara is provided "as is" and we are not liable for indirect losses, for data that existed only on a lost or damaged device, or for decisions made based on AI results. Our total liability will not exceed what you paid for Notara in the previous 12 months. Nothing here limits the rights that your country's consumer protection law gives you.</p></section>

      <section id="terminacion"><h2>Closing your account</h2><p>You can stop using Notara and delete your account whenever you want from the app. Remember to also cancel your subscription in the store. We may close your account if you break these terms; if we do so without a serious cause, we will notify you first and you will be able to ask us for a copy of your data.</p></section>

      <section id="ley"><h2>Governing law</h2><p>These terms are governed by the laws of Ecuador. Any dispute will be resolved before the courts of Quito, without prejudice to the rights you have as a consumer in your country.</p></section>

      <section id="cambios"><h2>Changes to these terms</h2><p>If we change these terms in an important way, we will notify you in the app in advance. If you keep using Notara after the effective date, you accept the new version.</p></section>

      <section id="contacto"><h2>Contact</h2><p>aibm.dev<br />Quito, Ecuador<br /><a href="mailto:hola@notaraapp.com">hola@notaraapp.com</a></p></section>
    </>
  );
}

export default function Terminos({ lang }) {
  const Body = lang === 'en' ? BodyEn : BodyEs;
  return (
    <LegalLayout lang={lang} title={TITLE[lang]} toc={TOC[lang]} current="terms">
      <Body />
    </LegalLayout>
  );
}
