import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mx-2 md:ml-16 mt-10 bg-gradient-to-r from-black via-[#001a1a] to-[#002b2b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <p className="flex items-center gap-2 text-center text-sm tracking-wide text-gray-400">
          <span>
            © {new Date().getFullYear()} ·{" "}
            <span className="font-semibold text-white">YovanEnovore</span> ·{" "}
            <span className="text-gray-300">LLC</span>
          </span>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs">
          <FooterLink to="/privacy">
            Política&nbsp;de&nbsp;privacidad
          </FooterLink>
          <FooterLink to="/terms">Términos&nbsp;de&nbsp;uso</FooterLink>
          <FooterLink to="/legal">Aviso&nbsp;legal</FooterLink>
        </nav>

        <div className="flex gap-5">
          <SocialButton
            label="LinkedIn"
            href="https://linkedin.com/in/yovanenovore"
          >
            <LinkedInIcon />
          </SocialButton>
          <SocialButton label="X (Twitter)" href="https://x.com/ramonenovore">
            <XIcon />
          </SocialButton>
          <SocialButton
            label="GitHub"
            href="https://github.com/ynvYauneEnovore"
          >
            <GitHubIcon />
          </SocialButton>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-gray-400 transition-colors hover:text-cyan-400"
    >
      {children}
    </Link>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group rounded p-1 transition-colors hover:bg-[#013232]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="block h-5 w-5 fill-gray-400 transition-colors group-hover:fill-cyan-400">
        {children}
      </span>
    </a>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M11 21 18 9h-5l2-6-8 12h5l-1 6z" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4.98 3.5C4.98 5 3.99 6 2.66 6S0.36 5 0.36 3.5 1.36 1 2.66 1s2.32 1 2.32 2.5zM.49 8.09h4.35V24H.49zM8.08 8.09h4.18v2.17h.06c.58-1.1 2-2.26 4.11-2.26 4.4 0 5.21 2.9 5.21 6.67V24h-4.34v-7.71c0-1.83-.03-4.19-2.56-4.19-2.56 0-2.95 2-2.95 4.05V24H8.08z" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M23 0h-5.6L7.2 23.2h5.6L23 0zm-5.6 0h-5.6L0 23.2h5.6L17.4 0z" />
    </svg>
  );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 .1.1-.9.5-1.5.9-1.8-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.2-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.2 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.5.4.9 1.1.9 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .3z" />
    </svg>
  );
}
