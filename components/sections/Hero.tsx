import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Medal,
  Mouse,
  PlayCircle,
  ShieldCheck,
  Target,
  Trophy,
  Wrench,
} from "lucide-react";

const rightFeatures = [
  {
    icon: Medal,
    title: "Accesos Difíciles",
    text: "Llegamos donde otros no pueden.",
  },
  {
    icon: Target,
    title: "Alta Especialización",
    text: "Equipos y técnicas avanzadas.",
  },
  {
    icon: CheckCircle2,
    title: "Cumplimiento Total",
    text: "Normativas locales e internacionales.",
  },
  {
    icon: Trophy,
    title: "Resultados que Duran",
    text: "Soluciones eficientes y sostenibles.",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Seguridad",
    text: "Garantizada",
  },
  {
    icon: Wrench,
    title: "Equipos",
    text: "Certificados",
  },
  {
    icon: BadgeCheck,
    title: "Calidad",
    text: "Asegurada",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070d]">
      <div
        className="absolute inset-0 hidden bg-no-repeat md:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,5,10,.98) 0%, rgba(2,5,10,.82) 30%, rgba(2,5,10,.28) 58%, rgba(2,5,10,.78) 100%), url('/hero-sgc.png')",
          backgroundSize: "cover",
          backgroundPosition: "58% center",
        }}
      />

      <div
        className="absolute inset-0 bg-no-repeat md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(2,5,10,.78) 0%, rgba(2,5,10,.88) 48%, rgba(2,5,10,.98) 100%), url('/hero-sgc.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center 90px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#05070d]" />

      <div className="relative z-10 min-h-screen pt-36 pb-10 flex items-center">
        <div className="w-full max-w-[1500px] mx-auto px-8 2xl:px-10">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center w-full">
            <div className="max-w-[760px]">
              <span className="text-orange-500 uppercase tracking-[0.38em] text-sm md:text-base font-black">
                Especialistas en
              </span>

              <h1 className="mt-5 text-[3rem] sm:text-[4rem] md:text-[5.25rem] xl:text-[5.8rem] font-black leading-[0.95] tracking-tight">
                EJECUCIÓN DE
                <br />
                PROYECTOS DE
                <br />
                <span className="text-orange-600">ALTA COMPLEJIDAD</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
                Desarrollamos soluciones específicas en grandes alturas y
                accesos difíciles, con los más altos estándares de seguridad,
                calidad y eficiencia.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 transition px-8 py-4 rounded-lg font-black uppercase"
                >
                  <ArrowRight size={20} />
                  Nuestros Servicios
                </a>

                <button className="inline-flex items-center justify-center gap-3 border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-lg font-black uppercase">
                  <PlayCircle size={24} />
                  Ver Video
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 border-r border-white/10 last:border-r-0 pr-4"
                    >
                      <Icon className="text-orange-500" size={36} />
                      <div>
                        <p className="text-sm font-black uppercase">
                          {item.title}
                        </p>
                        <p className="text-sm text-white/70 uppercase">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:flex justify-end pr-8 xl:pr-14">
              <div className="w-full max-w-[330px] rounded-2xl bg-black/55 backdrop-blur-xl border border-white/10 p-8">
                {rightFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative flex gap-5 pb-8 last:pb-0"
                    >
                      {index !== rightFeatures.length - 1 && (
                        <div className="absolute left-[21px] top-12 bottom-2 w-px bg-orange-600/70" />
                      )}

                      <div className="relative z-10 w-11 h-11 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 bg-black">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="font-black uppercase text-base">
                          {item.title}
                        </h3>
                        <p className="text-white/65 text-sm mt-1 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-9 h-14 rounded-full border border-white/40 items-center justify-center">
          <Mouse size={20} className="text-white/70" />
        </div>
      </div>
    </section>
  );
}