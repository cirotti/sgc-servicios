import Navbar from "../../components/layout/Navbar";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  GraduationCap,
  HardHat,
  Mountain,
  Paintbrush,
  ShieldCheck,
  Shield,
  Wrench,
  Wind,
  Zap,
  Users,
  Timer,
  Award,
} from "lucide-react";

const specialties = [
  {
    number: "01",
    title: "Trabajos Verticales",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Accesos difíciles y trabajos en altura",
      "Limpieza de fachadas y vidrios",
      "Instalaciones y mantenciones",
      "Poda y jardinería vertical",
    ],
  },
  {
    number: "02",
    title: "Mantenimiento Industrial",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Reparación de techumbres",
      "Impermeabilizaciones",
      "Canaletas y aguas lluvias",
      "Reparaciones estructurales",
      "Instalación de estructuras",
    ],
  },
  {
    number: "03",
    title: "Pintura y Recubrimientos",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Pintura de edificios y galpones",
      "Sellos de ventanas y juntas",
      "Tratamientos anticorrosivos",
      "Hidrolavado de fachadas",
      "Estructuras metálicas",
    ],
  },
  {
    number: "04",
    title: "Seguridad y Anclajes",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Líneas de vida y anclajes",
      "Protección anticaídas",
      "Espacios confinados",
      "Posicionamiento en postes",
      "Manejo de cargas",
    ],
  },
  {
    number: "05",
    title: "Capacitaciones",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Trabajo en alturas",
      "Rescate técnico",
      "Espacios confinados",
      "Primeros auxilios y LOTO",
      "Uso de extintores y EPIs",
    ],
  },
  {
    number: "06",
    title: "Proyectos Especiales",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Trabajos eólicos",
      "Estructuras metálicas",
      "Instalaciones publicitarias",
      "Soluciones a medida",
      "Proyectos de alta exigencia",
    ],
  },
];

const equipment = [
  "Arneses 5 argollas",
  "Anticaídas ASAP",
  "Absorbedores de energía",
  "Descensores Rig",
  "Cascos certificados",
  "Puños Jumar",
  "Mosquetones de acero y aluminio",
  "Poleas y bloqueadores",
  "Cuerdas estáticas",
  "Cintas de anclaje",
  "Protectores de cuerda",
  "Ganchos GMO",
];

const trustItems = [
  { title: "Seguridad", text: "Garantizada", icon: Shield },
  { title: "Equipos", text: "Certificados", icon: Wrench },
  { title: "Calidad", text: "Asegurada", icon: Award },
  { title: "Respuesta", text: "Rápida", icon: Timer },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#05080d] pt-24 text-white">
        <section className="relative min-h-[650px] border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(15,65,110,0.26),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(255,85,0,0.17),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#05080d_0%,rgba(5,8,13,.96)_32%,rgba(5,8,13,.55)_58%,rgba(5,8,13,.78)_100%)]" />

          <div className="absolute right-0 top-0 hidden h-full w-[57%] overflow-hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1800&auto=format&fit=crop"
              alt="Trabajador especializado en altura"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05080d] via-[#05080d]/30 to-[#05080d]/20" />
            <div className="absolute inset-y-0 left-10 w-px rotate-[24deg] bg-orange-500/70 shadow-[0_0_28px_rgba(255,85,0,.7)]" />
            <div className="absolute inset-y-0 right-24 w-px rotate-[24deg] bg-orange-500/55 shadow-[0_0_25px_rgba(255,85,0,.55)]" />
          </div>

          <div className="container-custom relative z-10 flex min-h-[650px] items-center py-16">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.42em] text-orange-500">
                <span className="h-px w-10 bg-orange-500" />
                Servicios especializados
                <span className="h-px w-10 bg-orange-500" />
              </div>

              <h1 className="text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-[5.8rem]">
                Soluciones para trabajos de {" "}
                <span className="text-orange-500">alta complejidad.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Ejecutamos servicios industriales, trabajos verticales,
                mantenimiento, seguridad y capacitación para empresas que
                necesitan operar en altura, espacios confinados y zonas de
                difícil acceso.
              </p>

              <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 border-white/10 sm:border-r sm:last:border-r-0"
                    >
                      <Icon className="shrink-0 text-orange-500" size={30} />
                      <div>
                        <p className="text-xs font-black uppercase">
                          {item.title}
                        </p>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#especialidades"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-8 py-4 text-sm font-black uppercase text-white shadow-[0_22px_55px_rgba(255,85,0,.32)] transition hover:-translate-y-0.5 hover:bg-orange-500"
                >
                  Ver especialidades
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-black/20 px-8 py-4 text-sm font-black uppercase text-white transition hover:border-orange-500/70 hover:bg-orange-500/10"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="especialidades" className="relative px-6 py-16 md:px-10 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,80,130,.16),transparent_38%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-500">
                  Nuestras especialidades
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  Servicios que marcan la diferencia
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Contamos con un equipo técnico altamente capacitado y equipos
                certificados para entregar soluciones eficientes, seguras y de
                máxima calidad.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {specialties.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-white/15 bg-[#07101a] shadow-[0_24px_70px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_28px_80px_rgba(255,85,0,.14)]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-58 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/78 to-[#05080d]/18" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/75 via-transparent to-transparent" />

                    <span className="absolute right-5 top-4 text-6xl font-black leading-none text-white/15 [-webkit-text-stroke:1px_rgba(255,255,255,.35)]">
                      {service.number}
                    </span>

                    <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-between p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600 text-white shadow-[0_0_35px_rgba(255,85,0,.35)]">
                        <Icon size={29} />
                      </div>

                      <div>
                        <h3 className="text-xl font-black uppercase leading-tight md:text-2xl">
                          {service.title}
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-5 text-slate-200"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <ArrowRight
                        size={26}
                        className="absolute bottom-6 right-6 text-orange-500 transition group-hover:translate-x-1"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 pt-4 md:px-10 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.35fr_.75fr]">
            <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#07101a] p-6 md:p-8">
              <div className="absolute right-0 top-0 h-full w-[55%] opacity-75">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1400&auto=format&fit=crop"
                  alt="Equipamiento certificado"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07101a] via-[#07101a]/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101a] via-transparent to-[#07101a]/20" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-orange-500">
                  Equipamiento certificado
                </p>
                <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight md:text-5xl">
                  Tecnología y seguridad en cada trabajo
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {equipment.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                    >
                      <CheckCircle2 size={17} className="shrink-0 text-orange-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#07101a] p-6 md:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

              <p className="text-xs font-black uppercase tracking-[0.32em] text-orange-500">
                Certificaciones y estándares
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Cumplimos con las más altas normativas
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {["ISO 9001", "ISO 45001", "IRATA", "ANETVA"].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-center text-lg font-black text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  "Personal certificado",
                  "Inspecciones periódicas",
                  "Procedimientos seguros",
                  "Planes de rescate",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contacto" className="px-6 pb-20 pt-6 md:px-10 lg:px-20">
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-[#080d14] lg:grid-cols-[.9fr_1.35fr_.75fr]">
            <div className="relative min-h-[230px]">
              <img
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1400&auto=format&fit=crop"
                alt="Cotización de servicios en altura"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080d14] lg:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-orange-500">
                ¿Tienes un proyecto?
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight md:text-5xl">
                Estamos listos para llevarlo a lo más alto.
              </h2>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row">
                <div className="flex items-center gap-3">
                  <Zap className="text-orange-500" size={24} />
                  <span className="text-sm font-bold">Respuesta rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-orange-500" size={24} />
                  <span className="text-sm font-bold">Asesoría profesional</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-8 md:p-10">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-600 px-8 py-5 text-sm font-black uppercase text-white shadow-[0_22px_55px_rgba(255,85,0,.25)] transition hover:-translate-y-0.5 hover:bg-orange-500 lg:w-auto"
              >
                Solicitar cotización
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
