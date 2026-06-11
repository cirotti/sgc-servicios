import Navbar from "../../components/layout/Navbar";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  HardHat,
  Lightbulb,
  Megaphone,
  Medal,
  Mountain,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const stats = [
  {
    value: "+120",
    label: "Proyectos\nejecutados",
    icon: Building2,
  },
  {
    value: "+8",
    label: "Años de\nexperiencia",
    icon: Users,
  },
  {
    value: "175",
    label: "Seguidores en\nInstagram",
    icon: Users,
  },
  {
    value: "100%",
    label: "Compromiso con\nla seguridad",
    icon: CheckCircle2,
  },
];

const values = [
  {
    title: "Seguridad",
    text: "La seguridad es nuestra prioridad en cada proyecto.",
    icon: ShieldCheck,
  },
  {
    title: "Calidad",
    text: "Comprometidos con entregar trabajos de la más alta calidad.",
    icon: Medal,
  },
  {
    title: "Responsabilidad",
    text: "Cumplimos con nuestros compromisos, tiempos y procesos.",
    icon: Users,
  },
  {
    title: "Innovación",
    text: "Soluciones innovadoras y técnicas avanzadas para cada desafío.",
    icon: Lightbulb,
  },
];

const whatWeDo = [
  {
    title: "Trabajos de altura",
    text: "Accesos seguros en edificios y estructuras de difícil acceso.",
    icon: Mountain,
  },
  {
    title: "Fabricación de molduras en fibra",
    text: "Molduras livianas, duraderas y de alta calidad.",
    icon: Factory,
  },
  {
    title: "Restauración de edificios",
    text: "Recuperamos y conservamos estructuras patrimoniales y modernas.",
    icon: Wrench,
  },
  {
    title: "Acceso por cuerdas",
    text: "Técnicas certificadas internacionalmente para máxima seguridad.",
    icon: HardHat,
  },
  {
    title: "Montaje industrial",
    text: "Soluciones seguras y eficientes para la industria.",
    icon: Building2,
  },
  {
    title: "Publicidad",
    text: "Instalación y mantención de publicidad en altura con técnica especializada.",
    icon: Megaphone,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#05080d] pt-24 text-white">
        <section className="relative min-h-[690px] border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#05080d_0%,rgba(5,8,13,.96)_30%,rgba(5,8,13,.62)_58%,rgba(5,8,13,.38)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,85,0,.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(30,80,130,.22),transparent_36%)]" />

          <div className="absolute right-0 top-0 hidden h-full w-[58%] overflow-hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop"
              alt="SGC Servicios trabajos en altura"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#05080d_0%,rgba(5,8,13,.48)_38%,rgba(5,8,13,.20)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,13,.05),#05080d_98%)]" />
            <div className="absolute -left-14 top-0 h-full w-px rotate-[16deg] bg-orange-500/70" />
            <div className="absolute right-16 top-0 h-full w-px rotate-[16deg] bg-orange-500/35" />
          </div>

          <div className="container-custom relative z-10 flex min-h-[690px] items-center py-16">
            <div className="max-w-[760px]">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-orange-500" />
                <p className="text-xs font-black uppercase tracking-[0.45em] text-orange-500">
                  Conócenos
                </p>
                <span className="h-px w-12 bg-orange-500" />
              </div>

              <h1 className="text-[3.1rem] font-black uppercase leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                Somos líderes en trabajos de{" "}
                <span className="text-orange-500">altura y acceso</span> por
                cuerdas.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                En SGC Servicios nos dedicamos a la fabricación y restauración
                de molduras en fibra, además de trabajos en altura en edificios
                patrimoniales y modernos, ofreciendo soluciones seguras e
                innovadoras con técnicas certificadas internacionalmente.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div className="flex items-center gap-3 border-r border-white/10 pr-5">
                  <ShieldCheck className="text-orange-500" size={34} />
                  <div>
                    <p className="text-sm font-black uppercase">Seguridad</p>
                    <p className="text-xs text-slate-400">Garantizada</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-r border-white/10 pr-5">
                  <Medal className="text-orange-500" size={34} />
                  <div>
                    <p className="text-sm font-black uppercase">Experiencia</p>
                    <p className="text-xs text-slate-400">Comprobada</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500" size={34} />
                  <div>
                    <p className="text-sm font-black uppercase">Calidad</p>
                    <p className="text-xs text-slate-400">Asegurada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-[18%] hidden rounded-3xl border border-white/10 bg-[#08111a]/90 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-xl lg:block">
              <p className="text-6xl font-black text-orange-500">SGC</p>
              <p className="text-2xl font-black uppercase tracking-wide">Servicios</p>
              <p className="mt-5 max-w-[260px] text-sm font-black leading-6">
                Tu seguridad y construcción en las mejores manos
              </p>
            </div>
          </div>
        </section>

        <section className="relative -mt-12 px-6 md:px-10 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-white/10 bg-[#080d14]/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.025] p-5 lg:border-0 lg:bg-transparent"
                >
                  <Icon className="shrink-0 text-orange-500" size={48} />
                  <div>
                    <p className="text-4xl font-black text-white md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-5 text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="nosotros" className="px-6 py-20 md:px-10 lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500">
                Nuestra historia
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-5xl">
                Comprometidos con la{" "}
                <span className="text-orange-500">excelencia</span> y la{" "}
                <span className="text-orange-500">seguridad</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Somos una empresa líder en trabajos de altura y acceso por
                  cuerdas, ofreciendo soluciones innovadoras y personalizadas
                  para diversos sectores como la construcción, publicidad,
                  montaje industrial y restauración de edificios.
                </p>
                <p>
                  En cada proyecto, nuestro compromiso es entregar resultados de
                  alta calidad, cumpliendo con las más altas normas de seguridad
                  y satisfacción del cliente.
                </p>
              </div>

              <a
                href="https://wa.me/56912345678"
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 rounded-xl border border-orange-500 px-6 py-4 text-sm font-black uppercase text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                Solicitar cotización
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="group relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#08111a] shadow-[0_30px_80px_rgba(0,0,0,.35)] md:min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop"
                alt="Trabajos de restauración SGC Servicios"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-black/45 backdrop-blur-xl transition group-hover:scale-110">
                  <div className="ml-1 h-0 w-0 border-y-[15px] border-l-[24px] border-y-transparent border-l-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="hidden h-px w-20 bg-orange-500/70 sm:block" />
              <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-orange-500">
                Nuestros valores
              </p>
              <span className="hidden h-px w-20 bg-orange-500/70 sm:block" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(255,85,0,.14)]"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-orange-500 transition group-hover:scale-110">
                      <Icon size={54} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 text-lg font-black uppercase">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {value.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500">
              ¿Qué hacemos?
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-5xl">
              Soluciones <span className="text-orange-500">especializadas</span>
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {whatWeDo.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.055]"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500 transition group-hover:shadow-[0_0_35px_rgba(255,85,0,.25)]">
                      <Icon size={34} />
                    </div>
                    <h3 className="mt-5 min-h-[48px] text-base font-black leading-6">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
