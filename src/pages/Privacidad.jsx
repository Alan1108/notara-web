import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const TITLE = { es: 'Aviso de privacidad', en: 'Privacy notice' };

const TOC = {
  es: [
    ['responsable', 'Quién es responsable de tus datos'],
    ['datos', 'Qué datos tratamos'],
    ['donde', 'Dónde se procesa cada cosa'],
    ['para-que', 'Para qué usamos tus datos'],
    ['compartir', 'Con quién compartimos datos'],
    ['transferencias', 'Transferencias internacionales'],
    ['conservacion', 'Cuánto tiempo guardamos tus datos'],
    ['derechos', 'Tus derechos y cómo ejercerlos'],
    ['menores', 'Menores de edad'],
    ['seguridad', 'Seguridad'],
    ['cambios', 'Cambios a este aviso'],
    ['contacto', 'Contacto'],
  ],
  en: [
    ['responsable', 'Who is responsible for your data'],
    ['datos', 'What data we process'],
    ['donde', 'Where each thing is processed'],
    ['para-que', 'What we use your data for'],
    ['compartir', 'Who we share data with'],
    ['transferencias', 'International transfers'],
    ['conservacion', 'How long we keep your data'],
    ['derechos', 'Your rights and how to exercise them'],
    ['menores', 'Minors'],
    ['seguridad', 'Security'],
    ['cambios', 'Changes to this notice'],
    ['contacto', 'Contact'],
  ],
};

function BodyEs() {
  return (
    <>
      <div className="summary">
        <div><b>📱 Tu voz se queda en tu teléfono</b><span>El audio se graba y se transcribe en tu dispositivo. No lo subimos para transcribirlo.</span></div>
        <div><b>☁️ La nube solo cuando tú la usas</b><span>Si pides un resumen, un quiz o usas el chat, enviamos el texto necesario para generarlo.</span></div>
        <div><b>🚫 No vendemos tus datos</b><span>No hay publicidad en Notara y no compartimos tus notas con anunciantes.</span></div>
        <div><b>🗑️ Tú decides cuándo borrar</b><span>Puedes eliminar tus notas y tu cuenta desde la app, y pedirnos una copia de tus datos.</span></div>
      </div>
      <p>Este aviso explica qué datos trata Notara, para qué, dónde se procesan y qué puedes hacer con ellos. Aplica a la app Notara para iPhone y Android y a este sitio web.</p>

      <section id="responsable"><h2>Quién es responsable de tus datos</h2><p>El responsable del tratamiento es aibm.dev, con domicilio en Quito, Ecuador ("Notara", "nosotros"). Para cualquier tema de privacidad puedes escribirnos a <a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a>.</p></section>

      <section id="datos"><h2>Qué datos tratamos</h2>
        <h3>Grabaciones y transcripciones</h3><p>El audio que grabas y su transcripción se guardan en tu teléfono. La transcripción la hace un modelo de voz que corre en tu dispositivo, incluso sin internet.</p>
        <h3>Notas y contenido generado</h3><p>Títulos, resúmenes, preguntas, flashcards, marcas ⭐, carpetas y etiquetas que tú creas o que Notara genera para ti.</p>
        <h3>Cuenta (opcional)</h3><p>Solo si creas una cuenta: tu correo electrónico o el identificador que te da Apple o Google al iniciar sesión, y tu nombre si decides compartirlo.</p>
        <h3>"Sobre ti" (opcional)</h3><p>Ocupación, nivel de estudios, rango de edad y país, si eliges responder. Puedes saltarte esta pantalla y cambiar o borrar tus respuestas en Cuenta.</p>
        <h3>Suscripción</h3><p>Tu plan, fechas de renovación y el estado de tu compra. El pago lo procesan Apple o Google; nunca vemos los datos de tu tarjeta.</p>
        <h3>Datos técnicos y de uso</h3><p>Modelo de dispositivo, versión del sistema y de la app, errores y eventos de uso anónimos (por ejemplo, "se creó un resumen"), sin el contenido de tus notas.</p>
        <h3>Soporte</h3><p>Lo que nos escribas cuando pides ayuda.</p>
      </section>

      <section id="donde"><h2>Dónde se procesa cada cosa</h2><p>La app siempre te muestra si algo ocurre en tu teléfono (📱) o en la nube (☁️).</p>
        <div className="table-wrap"><table><thead><tr><th>Qué</th><th>Dónde</th><th>Qué sale de tu teléfono</th></tr></thead><tbody>
          <tr><td>Grabar y transcribir</td><td>📱 Tu teléfono</td><td>Nada</td></tr>
          <tr><td>Resúmenes, preguntas, flashcards y quizzes</td><td>☁️ Nube</td><td>El texto de la transcripción de esa nota y tus marcas ⭐</td></tr>
          <tr><td>Chat con tus notas y búsqueda por significado</td><td>☁️ Nube</td><td>Tu pregunta y fragmentos de texto de tus notas</td></tr>
          <tr><td>Sincronización (Pro)</td><td>☁️ Nube</td><td>Tus notas; el audio original solo si activas su copia de seguridad</td></tr>
          <tr><td>Modo privado (Pro)</td><td>📱 Tu teléfono</td><td>Nada</td></tr>
        </tbody></table></div>
        <p>Para usar la IA en la nube necesitas una cuenta. Si no creas una, todo se queda en tu teléfono.</p>
      </section>

      <section id="para-que"><h2>Para qué usamos tus datos</h2><ul>
        <li><strong>Darte el servicio:</strong> transcribir, generar resúmenes y material de estudio, responder en el chat, organizar y sincronizar tus notas.</li>
        <li><strong>Gestionar tu cuenta y tu suscripción,</strong> incluidos los límites semanales del plan gratis y la verificación del descuento de estudiante.</li>
        <li><strong>Personalizar la app</strong> con tus respuestas de "Sobre ti", por ejemplo el modo sugerido y "Para hoy".</li>
        <li><strong>Mejorar Notara y mantenerla segura</strong> con estadísticas anónimas y reportes de errores.</li>
        <li><strong>Atenderte</strong> cuando nos escribes y avisarte de cambios importantes.</li>
      </ul>
        <p>No usamos el contenido de tus notas para publicidad ni para crear perfiles comerciales, y no lo usamos para entrenar modelos de IA.</p>
      </section>

      <section id="compartir"><h2>Con quién compartimos datos</h2><p>No vendemos ni rentamos tus datos. Solo los compartimos con proveedores que nos ayudan a operar Notara, bajo contrato y únicamente para ese fin:</p>
        <ul>
          <li><strong>Supabase:</strong> cuentas, base de datos y almacenamiento de notas sincronizadas.</li>
          <li><strong>Google (API de Gemini):</strong> genera resúmenes, preguntas, respuestas del chat y búsqueda por significado a partir del texto que enviamos. Contratamos este servicio en condiciones que no permiten usar tu contenido para entrenar sus modelos.</li>
          <li><strong>RevenueCat, Apple y Google:</strong> compras y estado de tu suscripción.</li>
          <li><strong>Autoridades,</strong> solo cuando la ley nos obligue.</li>
        </ul>
        <p>El proveedor de IA puede cambiar con el tiempo. Si lo hacemos, actualizaremos esta lista y mantendremos las mismas garantías.</p>
      </section>

      <section id="transferencias"><h2>Transferencias internacionales</h2><p>Algunos de nuestros proveedores guardan o procesan datos fuera de tu país, por ejemplo en Estados Unidos. Cuando eso ocurre, exigimos por contrato un nivel de protección equivalente al de este aviso.</p></section>

      <section id="conservacion"><h2>Cuánto tiempo guardamos tus datos</h2><ul>
        <li><strong>En tu teléfono:</strong> hasta que borres la nota o desinstales la app.</li>
        <li><strong>En la nube:</strong> mientras tengas cuenta. Si borras una nota, se elimina de la nube; si borras tu cuenta, eliminamos tus datos en un plazo de 30 días, salvo copias de seguridad, que se borran en 90 días.</li>
        <li><strong>Texto enviado a la IA:</strong> solo se usa para generar tu respuesta y no lo guardamos aparte de tu nota.</li>
        <li><strong>Datos de compra:</strong> el tiempo que exijan las leyes fiscales.</li>
      </ul></section>

      <section id="derechos"><h2>Tus derechos y cómo ejercerlos</h2><p>Puedes acceder a tus datos, corregirlos, eliminarlos, oponerte a ciertos usos y pedir una copia en un formato que puedas llevarte. Muchas de estas acciones las haces tú mismo en la app:</p>
        <ul>
          <li><strong>Borrar tus notas.</strong></li>
          <li><strong>Borrar tu cuenta:</strong> Cuenta (arriba a la derecha) → Eliminar cuenta. Si ya no tienes la app, sigue los pasos de <Link to="/eliminar-cuenta">Elimina tu cuenta de Notara</Link>.</li>
          <li><strong>Cambiar o borrar tus respuestas de "Sobre ti"</strong> en Cuenta.</li>
        </ul>
        <p>Para pedir una copia de tus datos o hacer cualquier otra solicitud, escríbenos a <a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a>. Te responderemos en un plazo máximo de 15 días. Si no estás conforme con nuestra respuesta, puedes acudir a la autoridad de protección de datos de tu país.</p>
      </section>

      <section id="menores"><h2>Menores de edad</h2><p>Notara no está dirigida a menores de 15 años. Si eres menor de 18, necesitas el permiso de tu madre, padre o tutor para crear una cuenta. Si crees que un menor nos dio datos sin ese permiso, escríbenos y los borraremos.</p></section>

      <section id="seguridad"><h2>Seguridad</h2><p>Ciframos tus datos en tránsito y en reposo, limitamos el acceso de nuestro equipo a lo indispensable y guardamos las llaves de los servicios de IA solo en nuestros servidores, nunca en la app. Ningún sistema es infalible; si ocurre un incidente que te afecte, te avisaremos.</p></section>

      <section id="cambios"><h2>Cambios a este aviso</h2><p>Si hacemos cambios importantes, te avisaremos en la app antes de que entren en vigor. La fecha de arriba indica la última actualización.</p></section>

      <section id="contacto"><h2>Contacto</h2><p>aibm.dev<br />Quito, Ecuador<br /><a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a></p></section>
    </>
  );
}

function BodyEn() {
  return (
    <>
      <div className="summary">
        <div><b>📱 Your voice stays on your phone</b><span>Audio is recorded and transcribed on your device. We don't upload it to transcribe it.</span></div>
        <div><b>☁️ The cloud only when you use it</b><span>If you ask for a summary or a quiz, or use the chat, we send the text needed to generate it.</span></div>
        <div><b>🚫 We don't sell your data</b><span>There are no ads in Notara and we don't share your notes with advertisers.</span></div>
        <div><b>🗑️ You decide when to delete</b><span>You can delete your notes and your account from the app, and ask us for a copy of your data.</span></div>
      </div>
      <p>This notice explains what data Notara processes, why, where it is processed and what you can do about it. It applies to the Notara app for iPhone and Android and to this website.</p>

      <section id="responsable"><h2>Who is responsible for your data</h2><p>The data controller is aibm.dev, located at Quito, Ecuador ("Notara", "we"). For any privacy matter you can write to us at <a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a>.</p></section>

      <section id="datos"><h2>What data we process</h2>
        <h3>Recordings and transcripts</h3><p>The audio you record and its transcript are stored on your phone. Transcription is done by a speech model that runs on your device, even offline.</p>
        <h3>Notes and generated content</h3><p>Titles, summaries, questions, flashcards, ⭐ marks, folders and tags that you create or that Notara generates for you.</p>
        <h3>Account (optional)</h3><p>Only if you create an account: your email address or the identifier Apple or Google gives you when you sign in, and your name if you choose to share it.</p>
        <h3>"About you" (optional)</h3><p>Occupation, education level, age range and country, if you choose to answer. You can skip this screen and change or delete your answers in Account.</p>
        <h3>Subscription</h3><p>Your plan, renewal dates and the status of your purchase. Payment is processed by Apple or Google; we never see your card details.</p>
        <h3>Technical and usage data</h3><p>Device model, system and app version, errors and anonymous usage events (for example, "a summary was created"), without the content of your notes.</p>
        <h3>Support</h3><p>Whatever you write to us when you ask for help.</p>
      </section>

      <section id="donde"><h2>Where each thing is processed</h2><p>The app always shows you whether something happens on your phone (📱) or in the cloud (☁️).</p>
        <div className="table-wrap"><table><thead><tr><th>What</th><th>Where</th><th>What leaves your phone</th></tr></thead><tbody>
          <tr><td>Recording and transcribing</td><td>📱 Your phone</td><td>Nothing</td></tr>
          <tr><td>Summaries, questions, flashcards and quizzes</td><td>☁️ Cloud</td><td>The transcript text of that note and your ⭐ marks</td></tr>
          <tr><td>Chat with your notes and search by meaning</td><td>☁️ Cloud</td><td>Your question and text snippets from your notes</td></tr>
          <tr><td>Sync (Pro)</td><td>☁️ Cloud</td><td>Your notes; the original audio only if you turn on its backup</td></tr>
          <tr><td>Private mode (Pro)</td><td>📱 Your phone</td><td>Nothing</td></tr>
        </tbody></table></div>
        <p>You need an account to use cloud AI. If you don't create one, everything stays on your phone.</p>
      </section>

      <section id="para-que"><h2>What we use your data for</h2><ul>
        <li><strong>To provide the service:</strong> transcribing, generating summaries and study material, answering in the chat, organizing and syncing your notes.</li>
        <li><strong>To manage your account and subscription,</strong> including the free plan's weekly limits and student discount verification.</li>
        <li><strong>To personalize the app</strong> with your "About you" answers, for example the suggested mode and "For today".</li>
        <li><strong>To improve Notara and keep it secure</strong> with anonymous statistics and error reports.</li>
        <li><strong>To help you</strong> when you write to us and to let you know about important changes.</li>
      </ul>
        <p>We don't use the content of your notes for advertising or to build commercial profiles, and we don't use it to train AI models.</p>
      </section>

      <section id="compartir"><h2>Who we share data with</h2><p>We don't sell or rent your data. We only share it with providers that help us run Notara, under contract and solely for that purpose:</p>
        <ul>
          <li><strong>Supabase:</strong> accounts, database and storage for synced notes.</li>
          <li><strong>Google (Gemini API):</strong> generates summaries, questions, chat answers and search by meaning from the text we send. We use this service under terms that do not allow your content to be used to train their models.</li>
          <li><strong>RevenueCat, Apple and Google:</strong> purchases and your subscription status.</li>
          <li><strong>Authorities,</strong> only when the law requires it.</li>
        </ul>
        <p>The AI provider may change over time. If it does, we will update this list and keep the same safeguards.</p>
      </section>

      <section id="transferencias"><h2>International transfers</h2><p>Some of our providers store or process data outside your country, for example in the United States. When that happens, we require by contract a level of protection equivalent to this notice.</p></section>

      <section id="conservacion"><h2>How long we keep your data</h2><ul>
        <li><strong>On your phone:</strong> until you delete the note or uninstall the app.</li>
        <li><strong>In the cloud:</strong> for as long as you have an account. If you delete a note, it is removed from the cloud; if you delete your account, we delete your data within 30 days, except backups, which are deleted within 90 days.</li>
        <li><strong>Text sent to the AI:</strong> used only to generate your response and not stored apart from your note.</li>
        <li><strong>Purchase data:</strong> for as long as tax laws require.</li>
      </ul></section>

      <section id="derechos"><h2>Your rights and how to exercise them</h2><p>You can access, correct and delete your data, object to certain uses and request a copy in a format you can take with you. You can do many of these things yourself in the app:</p>
        <ul>
          <li><strong>Delete your notes.</strong></li>
          <li><strong>Delete your account:</strong> Account (top right) → Delete account. If you no longer have the app, follow the steps in <Link to="/delete-account">Delete your Notara account</Link>.</li>
          <li><strong>Change or delete your "About you" answers</strong> in Account.</li>
        </ul>
        <p>To ask for a copy of your data or make any other request, write to us at <a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a>. We will respond within 15 days. If you are not satisfied with our response, you can contact the data protection authority in your country.</p>
      </section>

      <section id="menores"><h2>Minors</h2><p>Notara is not directed at children under 15. If you are under 18, you need permission from your parent or guardian to create an account. If you believe a minor gave us data without that permission, write to us and we will delete it.</p></section>

      <section id="seguridad"><h2>Security</h2><p>We encrypt your data in transit and at rest, limit our team's access to what is strictly necessary and keep the keys for AI services only on our servers, never in the app. No system is infallible; if an incident affects you, we will let you know.</p></section>

      <section id="cambios"><h2>Changes to this notice</h2><p>If we make important changes, we will notify you in the app before they take effect. The date above shows the last update.</p></section>

      <section id="contacto"><h2>Contact</h2><p>aibm.dev<br />Quito, Ecuador<br /><a href="mailto:privacidad@notaraapp.com">privacidad@notaraapp.com</a></p></section>
    </>
  );
}

export default function Privacidad({ lang }) {
  const Body = lang === 'en' ? BodyEn : BodyEs;
  return (
    <LegalLayout lang={lang} title={TITLE[lang]} toc={TOC[lang]} current="privacy">
      <Body />
    </LegalLayout>
  );
}
