"use client";

import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#05080d]/90 backdrop-blur-xl">
      <div className="container-custom flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-sgc.png"
            alt="SGC Servicios"
            className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(255,106,0,.35)]"
          />
          <div>
            <h1 className="text-4xl font-black leading-none">SGC</h1>
            <p className="text-sm font-bold tracking-[0.28em] text-orange-500">
              SERVICIOS
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold uppercase transition hover:text-orange-500 ${
                  isActive
                    ? "border-b-2 border-orange-500 pb-2 text-white"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/56912345678"
          target="_blank"
          className="hidden items-center gap-3 rounded-lg bg-orange-600 px-7 py-4 text-sm font-black uppercase transition hover:bg-orange-500 lg:flex"
        >
          <MessageCircle size={20} />
          Solicitar Cotización
        </a>

        <button
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          />

          <aside className="absolute right-0 top-0 h-screen w-[86%] max-w-[390px] border-l border-white/10 bg-[#05080d] shadow-[-30px_0_80px_rgba(0,0,0,.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,95,0,.18),transparent_38%)]" />

            <div className="relative z-10 flex h-full flex-col p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <Link href="/" className="flex items-center gap-3">
                  <img
                    src="/logo-sgc.png"
                    alt="SGC Servicios"
                    className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(255,106,0,.35)]"
                  />
                  <div>
                    <h2 className="text-3xl font-black leading-none">SGC</h2>
                    <p className="text-xs font-bold tracking-[0.28em] text-orange-500">
                      SERVICIOS
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-lg font-black uppercase tracking-tight transition hover:border-orange-500/60 hover:bg-orange-500/10"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={22}
                      className="text-orange-500 transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-6">
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-orange-600 px-6 py-5 text-sm font-black uppercase shadow-[0_20px_45px_rgba(255,95,0,.28)] transition hover:bg-orange-500"
                >
                  <MessageCircle size={22} />
                  Solicitar Cotización
                </a>

                <p className="mt-4 text-center text-xs text-white/45">
                  Respuesta rápida · Asesoría profesional
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}