import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Perspectivas | D'ART Estudio — Arquitectura, Iluminación y Diseño en Bogotá",
  description:
    "Ideas sobre arquitectura, iluminación arquitectónica, smart spaces y diseño de interiores en Colombia. Artículos del estudio D'ART.",
  alternates: { canonical: "https://dartestudio.co/blog" },
  openGraph: {
    title: "Perspectivas | D'ART Estudio",
    description:
      "Ideas sobre arquitectura, iluminación y diseño de espacios en Bogotá.",
    url: "https://dartestudio.co/blog",
    siteName: "D'ART Estudio",
    locale: "es_CO",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#221c10", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <p
          className="font-sans text-[10px] tracking-[0.38em] uppercase mb-6"
          style={{ color: "#D4A853" }}
        >
          D&apos;ART · Estudio
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 1.0,
            color: "#f5e6c8",
            margin: 0,
          }}
        >
          Perspectivas
        </h1>
        <p
          className="font-sans font-light mt-6"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.35)",
          }}
        >
          Ideas sobre arquitectura, luz y espacio
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
