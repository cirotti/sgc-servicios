import {
  ArrowRight,
  Building2,
  Paintbrush,
  RadioTower,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Limpieza de Fachadas",
    text: "Limpieza profesional de vidrios, muros cortina y fachadas en altura.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Mantenimiento Industrial",
    text: "Mantenimiento preventivo y correctivo en estructuras de difícil acceso.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    number: "03",
    title: "Pintura y Recubrimientos",
    text: "Aplicación técnica de pinturas, sellos y recubrimientos especiales.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Inspección y Diagnóstico",
    text: "Evaluaciones visuales y técnicas con registro fotográfico detallado.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Instalación de Equipos",
    text: "Montaje de equipos, sistemas y componentes en torres o estructuras.",
    icon: RadioTower,
    image:
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Proyectos Especiales",
    text: "Soluciones personalizadas para proyectos críticos y de alta complejidad.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#06101a] pt-16 pb-10 md:pt-20 md:pb-12"
    >
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_45%)]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-subtitle">Nuestros Servicios</span>

          <h2 className="section-title mt-3">
            SOLUCIONES EN ALTURA
            <br />
            <span className="orange-text">PARA CADA NECESIDAD</span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-orange-600/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-orange-500" />
            <span className="h-px w-20 bg-orange-600/70" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border bg-[#07111b] transition-all duration-500 hover:-translate-y-2 ${service.featured
                    ? "border-orange-500/30 shadow-[0_0_25px_rgba(255,95,0,.08)]"
                    : "border-white/8 hover:border-orange-500/50"
                  }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111b] via-[#07111b]/35 to-transparent" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

                  <span className="absolute right-4 top-4 text-4xl font-black text-white/10">
                    {service.number}
                  </span>
                </div>

                <div className="relative flex min-h-[230px] flex-col p-5 pt-0">
                  <div className="-mt-7 mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-[0_14px_35px_rgba(255,95,0,.35)] ring-4 ring-[#07111b]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-[15px] font-black uppercase leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {service.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-orange-500">
                    <ArrowRight
                      size={20}
                      className="transition group-hover:translate-x-1"
                    />
                    <span className="text-xs font-black uppercase opacity-0 transition group-hover:opacity-100">
                      Ver más
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex justify-center">
          <a
            href="/servicios"
            className="group inline-flex items-center gap-3 rounded-md border border-orange-600 px-10 py-3.5 text-sm font-black uppercase text-orange-500 transition hover:bg-orange-600 hover:text-white sm:px-14"
          >
            Ver todos los servicios
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}