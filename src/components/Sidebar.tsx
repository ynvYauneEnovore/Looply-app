export default function Sidebar() {
  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center
        border-r border-white/10
        bg-gradient-to-b from-[#001416]/80 via-[#000c0d]/70 to-black/80
        backdrop-blur-xl shadow-lg shadow-black/50
        md:flex
      "
    >
      <nav className="mt-6 flex flex-1 flex-col items-center gap-6">
        <NavButton label="Dashboard">
          <HomeIcon />
        </NavButton>
        <NavButton label="Reportes">
          <ChartIcon />
        </NavButton>

        {/* Separador */}
        <hr className="my-2 w-8 border-t border-white/10" />

        <NavButton label="Usuarios">
          <UserIcon />
        </NavButton>
        <NavButton label="Roles">
          <ShieldIcon />
        </NavButton>
        <NavButton label="Permisos">
          <KeyIcon />
        </NavButton>
      </nav>
    </aside>
  );
}

function NavButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      className="
        group relative grid h-10 w-10 place-items-center
        rounded-lg
        text-gray-300 transition
        hover:bg-[#013232] hover:text-cyan-400
      "
    >
      <span className="h-5 w-5 fill-current">{children}</span>

      <span
        className="
          pointer-events-none absolute left-14 top-1/2 -translate-y-1/2
          whitespace-nowrap rounded-md bg-black/80 px-2 py-1
          text-xs text-gray-100 opacity-0 shadow-lg ring-1 ring-white/10
          transition-opacity group-hover:opacity-100
        "
      >
        {label}
      </span>
    </a>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3L12 3Z" />
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4 21h16v-2H4v2Zm2-4h3V10H6v7Zm5 0h3V3h-3v14Zm5 0h3v-8h-3v8Z" />
    </svg>
  );
}
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.3 0-9 1.7-9 5v3h18v-3c0-3.3-5.7-5-9-5Z" />
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2 4 5v6c0 5.5 3.8 10.7 8 11 4.2-.3 8-5.5 8-11V5l-8-3Z" />
    </svg>
  );
}
function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.3 0-7 1.7-7 5v1h14v-1c0-3.3-3.7-5-7-5Z" />
    </svg>
  );
}
