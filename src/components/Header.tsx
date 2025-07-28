import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky top-4 z-50
          mx-2 md:ml-18         
          rounded-2xl
          border border-white/15
          bg-gradient-to-br from-[#001416]/80 via-[#000c0d]/70 to-black/80
          backdrop-blur-xl
          shadow-xl shadow-black/60
          px-6 py-4
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            <span className="uppercase tracking-wider">ynv</span>
            <span className="font-light">dev</span>
          </Link>

          <button
            className="block md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div
              className={`h-0.5 w-6 bg-white transition-all ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <div
              className={`my-1 h-0.5 w-6 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-6 bg-white transition-all ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <nav className="hidden gap-8 md:flex">
            {["Inicio", "Servicios", "Clientes", "Contacto"].map((item) => (
              <Link
                key={item}
                to="/"
                className="
                  text-sm text-gray-200 transition
                  hover:text-cyan-400
                "
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="mt-6 flex flex-col gap-4 md:hidden">
            {["Inicio", "Servicios", "Clientes", "Contacto"].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-sm text-gray-200 transition hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
