export default function LegalNotice() {
  return (
    <article className="prose prose-invert mx-auto max-w-4xl px-4 py-16 lg:prose-lg">
      <header className="not-prose mb-12 text-center">
        <h1 className="text-3xl font-bold text-white">Aviso legal</h1>
        <p className="mt-2 text-sm text-cyan-400">
          Documento emitido el 28 de julio de 2025
        </p>
      </header>

      <section>
        <h2>1. Titular de la web</h2>
        <p>Yovan Enovore LLC — Sucre (Bolivia)</p>
      </section>

      <section>
        <h2>2. Propiedad intelectual</h2>
        <p>
          Todos los contenidos, logotipos y diseños son propiedad exclusiva de
          YovanEnovore, protegidos por la normativa boliviana e internacional.
        </p>
      </section>

      <section>
        <h2>3. Responsabilidad sobre enlaces</h2>
        <p>
          No nos hacemos responsables del contenido de sitios externos enlazados
          desde nuestra plataforma.
        </p>
      </section>

      <section>
        <h2>4. Legislación aplicable</h2>
        <p>
          Este aviso se rige por la ley Boliviana. Cualquier disputa se someterá
          a los tribunales de Sucre, salvo disposición legal imperativa en
          contrario.
        </p>
      </section>

      <footer className="not-prose mt-16 text-center text-xs text-gray-500">
        Potenciado por YovanEnovore
      </footer>
    </article>
  );
}
