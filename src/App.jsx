import { motion } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Trees,
  SunMedium,
  Building2,
  Phone,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Ambientes amplos e integrados",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/living-01.jpg?raw=true",
  },
  {
    title: "Ventilação cruzada e iluminação natural em todos os cômodos",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/living-02.jpg?raw=true",
  },
  {
    title: "Varanda gourmet pensada para momentos reais",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/living-03.jpg?raw=true",
  },
  {
    title: "Rooftop com vista, lazer e respiro",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/living-04.jpg?raw=true",
  },
  {
    title: "Espaços que funcionam na prática, não só na estética",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/living-05.jpg?raw=true",
  },
];

const savings = [
  "Portaria remota com redução de condomínio",
  "Infraestrutura para energia solar nas áreas comuns",
  "Elevador com alta eficiência energética",
  "Consumo inteligente em toda operação do condomínio",
];

const techGallery = [
  {
    title: "Portaria remota com redução de condomínio",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/tec-01.jpg?raw=true",
  },
  {
    title: "Infraestrutura para energia solar nas áreas comuns",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/tec-02.jpg?raw=true",
  },
  {
    title: "Elevador com alta eficiência energética",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/tec-03.jpg?raw=true",
  },
  {
    title: "Consumo inteligente em toda operação do condomínio",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/tec-04.jpg?raw=true",
  },
];

const people = [
  {
    name: "Cid Rodrigues",
    role: "Incorporadora",
    bio: "Engenheiro com mais de 35 anos de experiência em grandes projetos, liderando equipes multidisciplinares na indústria siderúrgica. Atuou na USIMINAS com foco em inovação, automação e eficiência. Hoje leva essa visão estratégica ao desenvolvimento de empreendimentos com alto padrão técnico e planejamento inteligente.",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/social-01.png?raw=true",
  },
  {
    name: "Leonardo Honório Filho",
    role: "Engenharia",
    bio: "Engenheiro civil com 40 anos de experiência, liderando construtoras renomadas e gerenciando centenas de obras, com mais de 1 milhão de m² construídos. Atua com forte foco em planejamento, gestão e qualidade construtiva, conduzindo empreendimentos de grande porte com rigor técnico e consistência.",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/social-03.png?raw=true",
  },
  {
    name: "Fernandes Neto",
    role: "Arquitetura",
    bio: "Arquiteto com 30 anos de experiência no desenvolvimento e coordenação de projetos de diferentes escalas. Especialista em BIM, compatibilização interdisciplinar e acessibilidade, atua com foco em eficiência, conformidade técnica e desenho universal.",
    image:
      "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/social-02.png?raw=true",
  },
];

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Acessei o site do Craibeira Terrazzo e tenho interesse no empreendimento. Gostaria de receber mais informações.",
  );
  const whatsappLink = `https://wa.me/558381759338?text=${whatsappMessage}`;
  const featuresCarouselRef = useRef(null);
  const rooftopCarouselRef = useRef(null);
  const techCarouselRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeRooftop, setActiveRooftop] = useState(0);
  const [activeTech, setActiveTech] = useState(0);

  const scrollCarousel = (ref, direction) => {
    const el = ref.current;
    if (!el) return;
    const slideWidth = el.clientWidth;
    el.scrollBy({ left: direction * slideWidth, behavior: "smooth" });
  };

  const updateActiveSlide = (ref, setter) => {
    const el = ref.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setter(index);
  };

  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.setAttribute("type", "image/svg+xml");
    link.setAttribute(
      "href",
      "https://raw.githubusercontent.com/diegorcosta/craibeira/refs/heads/main/src/assets/img/favicon.svg",
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#eef1e8] text-[#1f281b] antialiased selection:bg-[#2a3b23] selection:text-white">
      <section className="relative min-h-screen overflow-hidden bg-[#141b11] text-white">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 will-change-transform pointer-events-none"
          initial={{ y: -30, scale: 1.04 }}
          whileInView={{ y: 30, scale: 1.08 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img
            src="https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/hero-bg.jpg?raw=true"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover scale-[1.02] brightness-[0.92] contrast-[1.05]"
          />

          {/* Apple-like subtle top gradient */}
          <div className="absolute inset-x-0 top-0 h-[38%] bg-[linear-gradient(180deg,rgba(20,27,17,0.65)_0%,rgba(20,27,17,0.35)_45%,transparent_100%)]" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-8 md:px-10 lg:px-16">
          <div className="mb-auto flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/diegorcosta/craibeira/refs/heads/main/src/assets/img/logo-craibeira-w.svg"
                alt="Craibeira Terrazzo"
                className="h-10 w-auto md:h-12 lg:h-14"
              />
            </div>
            <div className="rounded-full border border-[#dbe3cf]/25 bg-[#dbe3cf]/10 px-4 py-2 text-xs text-[#f7faf4]/95 backdrop-blur-md">
              Lançamento exclusivo
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center text-center"
          >
            <div className="mb-6 rounded-full border border-[#dbe3cf]/25 bg-[#dbe3cf]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#f7faf4]/95 backdrop-blur-md">
              Natureza, conforto e inteligência
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-[92px] lg:leading-[0.98]">
              Viva no seu tempo.
            </h1>
            <div className="mt-6 w-full max-w-2xl rounded-[28px] border border-white/15 bg-[rgba(20,27,17,0.22)] p-5 md:p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-md md:p-8">
              <p className="text-base leading-7 text-[#eef4e8]/92 md:text-xl md:leading-8">
                Um refúgio urbano onde natureza, conforto e inteligência
                convivem em equilíbrio.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-12 cursor-pointer rounded-full bg-[#dbe3cf] px-7 text-sm font-medium text-[#1d2818] transition-all duration-200 hover:bg-[#eef4e8] active:scale-[0.99]">
                    Quero acesso antecipado
                  </button>
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#dbe3cf]/88">
                Acesso exclusivo às condições especiais de lançamento e
                prioridade na escolha de unidades.
              </p>
            </div>
          </motion.div>

          <div className="mx-auto mt-8 flex items-center gap-2 text-sm text-[#dbe3cf]/72">
            <ChevronDown className="h-4 w-4" />
            Role para descobrir
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#626d46]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[36px] shadow-[0_20px_80px_rgba(42,59,35,0.08)]"
            >
              <img
                src="https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/craibeira-terrazo.png?raw=true"
                alt="Craibeira Terrazzo e sua área verde histórica"
                className="block w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141b11]/18 to-transparent" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-center lg:pl-4 lg:text-left"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef1e8] shadow-[0_8px_30px_rgba(42,59,35,0.08)]">
                <Trees className="h-7 w-7 text-[#626d46]" />
              </div>
              <p className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.05]">
                Mais de 40 anos de natureza fazem parte do seu novo endereço.
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#3d4a31]/90">
                Craibeira Terrazzo, um empreendimento que já nasce com uma
                grande história.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#4f5b3b]/80">
                Porque viver bem também é respeitar o que permanece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f3f6ee_0%,#dfe7d4_100%)]">
        {/* subtle grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>')]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#626d46]/75">
              Experiência de morar
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#1f281b] md:text-6xl md:leading-[1.02]">
              Mais do que morar. É viver melhor todos os dias.
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative rounded-[36px] border border-white/15 bg-white/10 backdrop-blur-xl p-3 md:p-5 shadow-[0_25px_100px_rgba(0,0,0,0.18)] ring-1 ring-white/10 overflow-hidden"
            >
              <div className="relative">
                {activeFeature > 0 && (
                  <button
                    onClick={() => scrollCarousel(featuresCarouselRef, -1)}
                    className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                    aria-label="Anterior"
                    type="button"
                  >
                    ‹
                  </button>
                )}
                {activeFeature < features.length - 1 && (
                  <button
                    onClick={() => scrollCarousel(featuresCarouselRef, 1)}
                    className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                    aria-label="Próximo"
                    type="button"
                  >
                    ›
                  </button>
                )}

                <div
                  ref={featuresCarouselRef}
                  onScroll={() =>
                    updateActiveSlide(featuresCarouselRef, setActiveFeature)
                  }
                  className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
                >
                  {features.map((item, i) => (
                    <div key={i} className="basis-full shrink-0 snap-start">
                      <div className="relative overflow-hidden rounded-[28px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="block h-64 w-full object-cover md:h-80 lg:h-[26rem]"
                        />
                      </div>
                      <p className="mt-4 max-w-xl text-base leading-7 text-[#1f281b] md:text-lg md:leading-8">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-center gap-1.5">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir para foto ${i + 1}`}
                      onClick={() => {
                        const el = featuresCarouselRef.current;
                        if (!el) return;
                        el.scrollTo({
                          left: el.clientWidth * i,
                          behavior: "smooth",
                        });
                      }}
                      className={`h-1.5 rounded-full transition-all ${activeFeature === i ? "w-5 bg-[#2a3b23]" : "w-1.5 bg-[#2a3b23]/30"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col justify-between rounded-[36px] bg-[linear-gradient(180deg,#2a3b23,#1d2818)] p-6 text-white shadow-[0_20px_80px_rgba(29,40,24,0.24)] md:p-10">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#dbe3cf]/10 backdrop-blur-md">
                  <Building2 className="h-6 w-6" />
                </div>
                <p className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  Espaços que acolhem a rotina com leveza, funcionalidade e
                  respiro.
                </p>
                <p className="mt-5 text-base leading-7 text-[#e6eddc]/82">
                  Cada ambiente foi pensado para funcionar com fluidez no dia a
                  dia — sem excessos, sem desperdícios, sem ruído visual.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-12 cursor-pointer rounded-full bg-[#dbe3cf] px-7 text-sm font-medium text-[#1d2818] transition-all duration-200 hover:bg-[#eef4e8] active:scale-[0.99]">
                    Quero conhecer as condições exclusivas
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-32">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="flex h-full flex-col"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#626d46]/75">
                  Inteligência que reduz custo
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
                  Inteligência não é só tecnologia.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#4f5b3b]/85">
                  É viver melhor pagando menos todos os meses.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="relative mt-10 rounded-[36px] border border-[#626d46]/10 bg-white/60 p-3 shadow-[0_20px_80px_rgba(42,59,35,0.08)] backdrop-blur-xl md:p-5 lg:mt-auto"
              >
                <div className="relative">
                  {activeTech > 0 && (
                    <button
                      onClick={() => scrollCarousel(techCarouselRef, -1)}
                      className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                      aria-label="Anterior"
                      type="button"
                    >
                      ‹
                    </button>
                  )}
                  {activeTech < techGallery.length - 1 && (
                    <button
                      onClick={() => scrollCarousel(techCarouselRef, 1)}
                      className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                      aria-label="Próximo"
                      type="button"
                    >
                      ›
                    </button>
                  )}

                  <div
                    ref={techCarouselRef}
                    onScroll={() =>
                      updateActiveSlide(techCarouselRef, setActiveTech)
                    }
                    className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
                  >
                    {techGallery.map((item, i) => (
                      <div key={i} className="basis-full shrink-0 snap-start">
                        <div className="relative overflow-hidden rounded-[28px]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="block h-64 w-full object-cover md:h-80 lg:h-[24rem]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-center gap-1.5">
                    {techGallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Ir para item ${i + 1}`}
                        onClick={() => {
                          const el = techCarouselRef.current;
                          if (!el) return;
                          el.scrollTo({
                            left: el.clientWidth * i,
                            behavior: "smooth",
                          });
                        }}
                        className={`h-1.5 rounded-full transition-all ${activeTech === i ? "w-5 bg-[#2a3b23]" : "w-1.5 bg-[#2a3b23]/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="rounded-[40px] border border-[#626d46]/12 bg-[#eef1e8] p-6 shadow-[0_16px_60px_rgba(42,59,35,0.08)] md:p-10"
            >
              <div className="mb-10 rounded-[32px] bg-[linear-gradient(180deg,#ffffff,#f3f6ee)] p-6 shadow-inner md:p-8">
                <div className="text-sm uppercase tracking-[0.22em] text-[#626d46]/75">
                  Eficiência real
                </div>
                <div className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-[#2a3b23] md:text-7xl">
                  30%
                </div>
                <p className="mt-2 text-lg text-[#4f5b3b]/85">
                  de economia de condomínio com soluções mais inteligentes.
                </p>
              </div>
              <div className="grid gap-4">
                {savings.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-4 rounded-[24px] bg-white p-4 text-center shadow-sm md:justify-start md:p-5 md:text-left"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef1e8] ring-1 ring-[#dbe3cf]">
                      <ShieldCheck className="h-4 w-4 text-[#4f5b3b]/85" />
                    </div>
                    <p className="text-base leading-7 text-[#31402a]/90">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#141b11] text-white">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 will-change-transform pointer-events-none"
          initial={{ y: -20, scale: 1.04 }}
          whileInView={{ y: 20, scale: 1.08 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img
            src="https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/experience.jpg?raw=true"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 h-[36%] bg-[linear-gradient(180deg,rgba(20,27,17,0.55)_0%,rgba(20,27,17,0.25)_50%,transparent_100%)]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#dbe3cf]/70">
              Rooftop
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
              A cidade continua lá fora. Aqui em cima, o tempo desacelera.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#e6eddc]/82">
              Piscina, academia, espaço gourmet e áreas pensadas para viver —
              todos os dias.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-10 h-12 cursor-pointer rounded-full bg-[#dbe3cf] px-7 text-sm font-medium text-[#1d2818] transition-all duration-200 hover:bg-[#eef4e8] active:scale-[0.99]">
                Falar com um especialista
              </button>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-[36px] border border-white/15 bg-white/10 backdrop-blur-xl p-3 md:p-5 shadow-[0_25px_100px_rgba(0,0,0,0.18)] ring-1 ring-white/10 overflow-hidden"
          >
            <div className="relative">
              {activeRooftop > 0 && (
                <button
                  onClick={() => scrollCarousel(rooftopCarouselRef, -1)}
                  className="absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                  aria-label="Anterior"
                  type="button"
                >
                  ‹
                </button>
              )}
              {activeRooftop < 5 && (
                <button
                  onClick={() => scrollCarousel(rooftopCarouselRef, 1)}
                  className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[#1d2818]/70 shadow-sm backdrop-blur-md transition hover:bg-white/60 md:flex"
                  aria-label="Próximo"
                  type="button"
                >
                  ›
                </button>
              )}

              <div
                ref={rooftopCarouselRef}
                onScroll={() =>
                  updateActiveSlide(rooftopCarouselRef, setActiveRooftop)
                }
                className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
              >
                {[
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-01.png?raw=true",
                    alt: "Rooftop Craibeira Terrazzo",
                  },
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-02.png?raw=true",
                    alt: "Ambiente rooftop Craibeira Terrazzo",
                  },
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-03.png?raw=true",
                    alt: "Área de lazer Craibeira Terrazzo",
                  },
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-04.png?raw=true",
                    alt: "Piscina Craibeira Terrazzo",
                  },
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-05.png?raw=true",
                    alt: "Espaço gourmet Craibeira Terrazzo",
                  },
                  {
                    src: "https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/gallery-06.png?raw=true",
                    alt: "Vista rooftop Craibeira Terrazzo",
                  },
                ].map((image) => (
                  <div
                    key={image.src}
                    className="basis-full shrink-0 snap-start"
                  >
                    <div className="relative overflow-hidden rounded-[28px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="block h-64 w-full object-cover md:h-80 lg:h-[26rem]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-center gap-1.5">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para foto ${i + 1}`}
                    onClick={() => {
                      const el = rooftopCarouselRef.current;
                      if (!el) return;
                      el.scrollTo({
                        left: el.clientWidth * i,
                        behavior: "smooth",
                      });
                    }}
                    className={`h-1.5 rounded-full transition-all ${activeRooftop === i ? "w-5 bg-white/90" : "w-1.5 bg-white/35"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 lg:px-16 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#626d46]/75">
              Posicionamento
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.06]">
              O Craibeira Terrazzo não é para quem busca o mais barato.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#4f5b3b]/85 md:text-2xl">
              É para quem entende que viver bem é uma escolha.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef1e8]">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 will-change-transform"
          initial={{ y: -20, scale: 1.04 }}
          whileInView={{ y: 20, scale: 1.08 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img
            src="https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/oportunity.jpg?raw=true"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] border border-white/15 bg-[rgba(20,27,17,0.24)] backdrop-blur-md p-6 text-center shadow-[0_25px_100px_rgba(0,0,0,0.14)] md:p-16 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.25),transparent_40%)] opacity-40" />
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">
              Oportunidade limitada
            </p>
            <div className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              56 unidades
            </div>
            <p className="mt-2 text-2xl font-medium tracking-[-0.03em] text-white/90 md:text-3xl">
              2 e 3 quartos
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 tracking-[-0.01em] text-white/80 md:text-xl md:leading-8">
              Um projeto único. Uma oportunidade que não se repete.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-10 h-12 cursor-pointer rounded-full bg-[#dbe3cf] px-7 text-sm font-medium text-[#1d2818] transition-all duration-200 hover:bg-[#eef4e8] active:scale-[0.99]">
                Garantir minha prioridade
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#626d46]/75">
              Quem faz o Craibeira Terrazzo
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.04]">
              Um projeto pensado por quem entende que morar bem vai além do
              óbvio.
            </h2>
          </motion.div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            {people.map((person, i) => (
              <motion.div
                key={person.name}
                className="h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[#626d46]/12 bg-[#f7f9f2] shadow-[0_16px_50px_rgba(42,59,35,0.08)]">
                  <div className="flex h-full flex-col p-0">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="block h-[340px] w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-[340px] bg-[linear-gradient(180deg,#c7d0bc,#8b9770)]" />
                    )}
                    <div className="flex flex-1 flex-col p-6 pt-6 md:p-8 md:pt-7">
                      <motion.p
                        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45, delay: 0.04 + i * 0.06 }}
                        className="text-[22px] font-semibold tracking-[-0.02em] text-[#1f281b] leading-[1.2]"
                      >
                        {person.name}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                        className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#626d46]/70"
                      >
                        {person.role}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.16 + i * 0.06 }}
                        className="mt-4 flex-1 text-[15px] leading-[1.75] tracking-[-0.01em] text-[#4f5b3b]/85"
                      >
                        {person.bio}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1e8]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-16 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] bg-white p-8 text-center shadow-[0_16px_60px_rgba(42,59,35,0.08)] md:p-12"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef1e8] ring-1 ring-[#dbe3cf]">
              <ShieldCheck className="h-7 w-7 text-[#3d4a31]/90" />
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Segurança e confiança em cada detalhe.
            </h3>
            <div className="mt-10 flex items-center justify-center">
              <img
                src="https://github.com/diegorcosta/craibeira/blob/main/src/assets/img/logo-arboreto.png?raw=true"
                alt="Arboreto"
                className="h-14 w-auto opacity-90 md:h-16"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center whitespace-nowrap h-14 cursor-pointer rounded-full bg-[#2a3b23] px-6 text-sm font-medium text-white shadow-[0_18px_40px_rgba(29,40,24,0.28)] transition-all duration-200 hover:bg-[#22301d] active:scale-[0.99]">
              <Phone className="mr-2 h-4 w-4" />
              Falar com especialista
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
