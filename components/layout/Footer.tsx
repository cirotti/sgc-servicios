import { Globe, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080d]">
      <div className="container-custom py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_1fr_1fr_.8fr]">
          <div className="border-r border-white/10 pr-8 max-lg:border-r-0">
            <div className="flex items-center gap-3">
              <img
                src="/logo-sgc.png"
                alt="SGC Servicios"
                className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(249,115,22,0.45)]"
              />
              <div>
                <h3 className="text-4xl font-black leading-none">SGC</h3>
                <p className="text-orange-500 text-sm font-bold tracking-[0.28em]">
                  SERVICIOS
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Especialistas en ejecución de proyectos de alta complejidad en
              grandes alturas y accesos difíciles.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.22em]">
              Enlaces
            </h4>
            <ul className="space-y-1 text-sm text-white/60">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Servicios</li>
              <li>Proyectos</li>
              <li>Seguridad</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.22em]">
              Servicios
            </h4>
            <ul className="space-y-1 text-sm text-white/60">
              <li>Limpieza de fachadas</li>
              <li>Mantenimiento industrial</li>
              <li>Pintura y recubrimientos</li>
              <li>Inspección y diagnóstico</li>
              <li>Instalación de equipos</li>
              <li>Proyectos especiales</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.22em]">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-orange-500" />
                +56 9 1234 5678
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-orange-500" />
                contacto@sgcservicios.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={17} className="text-orange-500" />
                Valparaíso, Chile
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.22em]">
              Síguenos
            </h4>

            <div className="flex gap-3">
              {[Globe, Mail, Phone].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-600 text-orange-500"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/40">
          © 2026 SGC Servicios. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}