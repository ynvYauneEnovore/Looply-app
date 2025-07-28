export default function PrivacyPolicy() {
  return (
    <article className="prose prose-invert mx-auto max-w-4xl px-4 py-16 lg:prose-lg">
      <header className="not-prose mb-12 text-center">
        <h1 className="text-3xl font-bold text-white">
          Política de privacidad
        </h1>
        <p className="mt-2 text-sm text-cyan-400">
          Última actualización: 28 de julio de 2025
        </p>
      </header>

      <section>
        <h2>1. Introducción</h2>
        <p>
          En YovanEnovore nos tomamos muy en serio la privacidad de nuestros
          usuarios. Este documento describe de forma transparente qué datos
          recopilamos y cómo los usamos.
        </p>
      </section>

      <section>
        <h2>2. Datos que recopilamos</h2>
        <ul>
          <li>Información de contacto (nombre y correo electrónico)</li>
          <li>Datos de uso y métricas anónimas de producto</li>
          <li>Cookies esenciales y de análisis</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Utilizamos los datos para mejorar nuestros servicios, ofrecer soporte
          y personalizar la experiencia de usuario.
        </p>
      </section>

      <section>
        <h2>4. Derechos del usuario</h2>
        <p>
          Puedes acceder, rectificar o eliminar tus datos enviando un correo a
          &nbsp;
          <a href="mailto:privacy@yovanenovore.ia" className="text-cyan-400">
            privacy@yovanenovore.ia
          </a>
          .
        </p>
      </section>

      <footer className="not-prose mt-16 text-center text-xs text-gray-500">
        Potenciado por YovanEnovore.
      </footer>
    </article>
  );
}
