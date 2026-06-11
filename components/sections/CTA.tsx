import { MessageCircle, Play, ShieldCheck, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-y border-white/10 bg-[#05080d]"
    >
      <div className="grid min-h-[180px] lg:grid-cols-[0.32fr_0.43fr_0.25fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
            alt="Proyecto industrial"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/45 to-[#05080d]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md">
              <Play className="ml-1 text-white" size={36} />
            </div>
          </div>
        </div>

        <div className="flex items-center px-6 py-10 md:px-12 lg:px-10">
          <div>
            <span className="section-subtitle">¿Tienes un proyecto?</span>

            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-[0.08em] md:text-4xl xl:text-5xl">
              Estamos listos para
              <br />
              llevarlo a lo más alto.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
              Contáctanos y recibe asesoría personalizada sin compromiso.
              Juntos encontraremos la mejor solución para tu proyecto.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 px-6 pb-10 md:px-12 lg:px-10 lg:py-10">
          <a
            href="https://wa.me/56966549984"
            target="_blank"
            className="flex items-center justify-center gap-4 rounded-md border border-orange-600 px-8 py-5 text-sm font-black uppercase text-orange-500 transition hover:bg-orange-600 hover:text-white"
          >
            <MessageCircle size={28} />
            Solicitar cotización
          </a>

          <div className="flex flex-wrap gap-5 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Zap size={18} className="text-orange-500" />
              Respuesta rápida
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-orange-500" />
              Asesoría profesional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}