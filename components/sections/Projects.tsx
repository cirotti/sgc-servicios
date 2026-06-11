import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  HardHat,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  { icon: HardHat, value: "+120", label: "Proyectos ejecutados" },
  { icon: Building2, value: "+8", label: "Años de experiencia" },
  { icon: Users, value: "+25", label: "Profesionales especializados" },
  { icon: ShieldCheck, value: "100%", label: "Compromiso con la seguridad" },
];

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop",
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#06101a] pt-0 pb-14 md:pb-16"
    >
      <div className="absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full bg-orange-600/10 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[620px] w-[620px] rounded-full bg-white/5 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6">
        <div className="rounded-[28px] border border-white/10 bg-[#050b12]/80 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
          <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 xl:p-12">
            <div className="flex flex-col justify-between">
              <div>
                <span className="section-subtitle">Proyectos que</span>

                <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl xl:text-[3.8rem]">
                  Superan
                  <br />
                  Expectativas
                </h2>

                <p className="mt-6 max-w-md text-base leading-relaxed text-white/68">
                  Cada proyecto es un desafío que enfrentamos con planificación,
                  experiencia y compromiso. Resultados que generan confianza
                  desde el primer día.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {["Planificación", "Seguridad", "Ejecución"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-black uppercase text-white/70"
                    >
                      <CheckCircle2 size={14} className="text-orange-500" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="group rounded-xl border border-white/10 bg-white/[0.035] p-3 text-center transition hover:-translate-y-1 hover:border-orange-500/45 hover:bg-orange-500/[0.04]"
                      >
                        <Icon
                          className="mx-auto text-orange-500 transition group-hover:scale-110"
                          size={26}
                        />

                        <p className="mt-3 text-2xl font-black leading-none text-orange-500">
                          {item.value}
                        </p>

                        <p className="mx-auto mt-2 max-w-[105px] text-[9px] font-black uppercase leading-tight text-white/70">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <a
                href="#contacto"
                className="orange-btn mt-8 inline-flex w-fit items-center gap-4 rounded-lg px-8 py-4 text-sm font-black uppercase transition hover:scale-[1.02]"
              >
                Conoce nuestros proyectos
                <ArrowRight size={22} />
              </a>
            </div>

            <div className="grid h-[500px] grid-cols-4 grid-rows-2 gap-3 md:h-[560px]">
              <article className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
                <img
                  src={images[0]}
                  alt="Proyecto principal en fachada"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                    Proyecto destacado
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight">
                    Fachadas de alta exigencia
                  </h3>
                </div>
              </article>

              {images.slice(1).map((image, index) => (
                <article
                  key={image}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`Proyecto ${index + 2}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />

                  {index === 3 && (
                    <button className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl transition hover:scale-110">
                      <ChevronRight size={24} />
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}