"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/gran-escala/bbq_gran_escala.jpg", alt: "Área BBQ gran escala" },
  { src: "/images/gran-escala/campestre_gran_escala.jpg", alt: "Proyecto campestre gran escala" },
  { src: "/images/gran-escala/cocina_interior.jpg", alt: "Cocina interior" },
  { src: "/images/gran-escala/eexterior_gran_scala.jpg", alt: "Exterior gran escala" },
  { src: "/images/gran-escala/fachada_centro_comercial.jpg", alt: "Fachada centro comercial" },
  { src: "/images/gran-escala/iluminacion_gran_escala.jpg", alt: "Iluminación gran escala" },
  { src: "/images/gran-escala/interior_campestre.jpg", alt: "Interior campestre" },
  { src: "/images/gran-escala/interior_madera.jpg", alt: "Interior en madera" },
  { src: "/images/gran-escala/nichos_de_luz.jpg", alt: "Nichos de luz" },
  { src: "/images/gran-escala/porteria_interior.jpg", alt: "Portería interior" },
  { src: "/images/bano_gran_escala.jpg", alt: "Baño gran escala" },
  { src: "/images/bano_interior.jpg", alt: "Baño interior" },
  { src: "/images/interior_gran_escala.jpg", alt: "Interior gran escala" },
  { src: "/images/jacuzzi_interior.jpg", alt: "Jacuzzi interior" },
  { src: "/images/gran-escala/exterior_campestre2.jpg", alt: "Exterior campestre" },
];

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Proyectos Realizados" },
  { value: "8", label: "Ciudades en Colombia" },
  { value: "100%", label: "Compromiso Total" },
];

const projectTypes = [
  {
    tag: "Corporativo",
    title: "Torres de Oficinas & Sedes Empresariales",
    desc: "Diseño de espacios de trabajo que proyectan la identidad corporativa y potencian la productividad a través de ambientes de excelencia.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    tag: "Hotelería",
    title: "Hoteles Boutique & Resorts",
    desc: "Arquitectura de hospitalidad que traduce la identidad de la marca en experiencias sensoriales memorables para cada huésped.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    tag: "Comercial",
    title: "Retail & Centros Comerciales",
    desc: "Espacios comerciales estratégicamente diseñados para maximizar la experiencia de compra y la percepción de marca.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
  },
  {
    tag: "Residencial",
    title: "Condominios & Urbanizaciones",
    desc: "Desarrollos residenciales de gran escala donde cada unidad mantiene los más altos estándares de diseño y calidad de vida.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  },
];

export function GrandScaleSection() {
  return (
    <section id="grand-scale" className="relative py-36 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#251a08]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 40% at 50% 100%, rgba(201, 168, 76, 0.04) 0%, transparent 100%),
            radial-gradient(ellipse 60% 50% at 10% 30%, rgba(140, 80, 10, 0.07) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-8 h-px bg-[#c9a84c]/40" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
              04 — Gran Escala
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="font-serif italic font-light text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8]">
              Proyectos de
              <br />
              <span className="text-[#c9a84c]">gran envergadura</span>
            </h2>
            <p className="font-sans font-light text-base leading-8 text-[#f5e6c8]/50 max-w-md lg:max-w-none">
              La magnitud no compromete el detalle. En D&apos;art, los proyectos
              corporativos y de gran escala reciben la misma atención meticulosa
              que caracteriza cada uno de nuestros trabajos.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-24 border border-[#c9a84c]/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 px-8 text-center ${
                i < 3 ? "border-r border-[#c9a84c]/10" : ""
              } group hover:bg-[#c9a84c]/[0.03] transition-colors duration-500`}
            >
              <div className="font-serif italic text-[clamp(2.5rem,4vw,3.5rem)] text-[#c9a84c] leading-none mb-3">
                {stat.value}
              </div>
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#f5e6c8]/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project types — photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projectTypes.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden"
              style={{ minHeight: "50vh" }}
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.tag}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark overlay — lightens on hover */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

              {/* Bottom-left text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#c9a84c] mb-4 block">
                  {project.tag}
                </span>
                <div className="w-6 h-px bg-[#c9a84c]/50 mb-5 group-hover:w-12 transition-all duration-500" />
                <h3 className="font-serif italic font-light text-xl md:text-2xl text-[#f5e6c8] mb-3 leading-snug group-hover:text-[#e8c87a] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-sans font-light text-sm leading-7 text-white/60 max-w-sm">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
            <p className="font-serif italic text-xl md:text-2xl text-[#f5e6c8]/60 max-w-lg text-center leading-relaxed">
              &ldquo;Construimos no solo estructuras,
              <br />
              sino legados de excelencia.&rdquo;
            </p>
            <div className="w-px h-12 bg-gradient-to-t from-[#c9a84c]/40 to-transparent" />
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-32">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-8 h-px bg-[#c9a84c]/40" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
              Nuestra obra
            </span>
          </div>

          <h2 className="font-serif italic font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.0] text-[#f5e6c8] mb-14">
            Galería de <span className="text-[#c9a84c]">proyectos</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="overflow-hidden"
                style={{ aspectRatio: "4/3", position: "relative" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
