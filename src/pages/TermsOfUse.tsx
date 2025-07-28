export default function TermsOfUse() {
  return (
    <article className="prose prose-invert mx-auto max-w-4xl px-4 py-16 lg:prose-lg">
      <header className="not-prose mb-12 text-center">
        <h1 className="text-3xl font-bold text-white">Términos de uso</h1>
        <p className="mt-2 text-sm text-cyan-400">
          Vigentes desde el 28 de julio de 2025
        </p>
      </header>

      <section>
        <h2>1. Aceptación</h2>
        <p>
          Al acceder o utilizar nuestros servicios aceptas quedar vinculado a
          estos términos y a la legislación aplicable.
        </p>
      </section>

      <section>
        <h2>2. Uso permitido</h2>
        <ol>
          <li>No utilizar la plataforma para fines ilícitos.</li>
          <li>
            No vulnerar la seguridad ni intentar acceder a cuentas ajenas.
          </li>
          <li>No copiar ni redistribuir contenido sin permiso.</li>
        </ol>
      </section>

      <section>
        <h2>3. Limitación de responsabilidad</h2>
        <p>
          YovanEnovore no será responsable de daños indirectos derivados del uso
          o imposibilidad de uso del servicio.
        </p>
      </section>

      <section>
        <h2>4. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos; notificaremos
          los cambios con 15 días de antelación.
        </p>
      </section>

      <footer className="not-prose mt-16 text-center text-xs text-gray-500">
        Potenciado por YovanEnovore
      </footer>
    </article>
  );
}
