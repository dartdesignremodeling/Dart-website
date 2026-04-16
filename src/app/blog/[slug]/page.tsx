import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { BackLink } from "@/components/blog/BackLink";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | D'ART Estudio`,
    description: post.excerpt,
    alternates: { canonical: `https://dartestudio.co/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dartestudio.co/blog/${slug}`,
      siteName: "D'ART Estudio",
      locale: "es_CO",
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        fontStyle: "italic",
        fontSize: "clamp(1.5rem, 3vw, 2rem)",
        color: "#C9A96E",
        lineHeight: 1.2,
        marginTop: "2.5rem",
        marginBottom: "1rem",
      }}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
        color: "#C9A96E",
        lineHeight: 1.3,
        marginTop: "2rem",
        marginBottom: "0.75rem",
      }}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      style={{
        fontSize: "1.125rem",
        lineHeight: 1.8,
        color: "rgba(245,240,232,0.85)",
        marginBottom: "1.5rem",
      }}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      {...props}
      style={{ color: "rgba(245,240,232,0.95)", fontWeight: 600 }}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      style={{
        paddingLeft: "1.5rem",
        marginBottom: "1.5rem",
        listStyleType: "disc",
      }}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      style={{
        fontSize: "1.125rem",
        lineHeight: 1.8,
        color: "rgba(245,240,232,0.85)",
        marginBottom: "0.5rem",
      }}
    />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em
      {...props}
      style={{ color: "rgba(245,240,232,0.55)", fontStyle: "italic" }}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      style={{
        color: "#C9A96E",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
    />
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(201,168,76,0.25)",
        margin: "2.5rem 0",
      }}
    />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <main style={{ background: "#221c10", minHeight: "100vh" }}>
      <article className="max-w-[720px] mx-auto px-6 pt-36 pb-28">
        <BackLink />

        {/* Category + meta */}
        <div className="flex items-center gap-5 mb-8">
          <span
            className="font-sans text-[9px] tracking-[0.35em] uppercase"
            style={{ color: "#D4A853" }}
          >
            {post.category}
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.1em]"
            style={{ color: "rgba(245,240,232,0.25)" }}
          >
            {formatDate(post.date)}
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.1em]"
            style={{ color: "rgba(201,168,76,0.4)" }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            color: "#f5e6c8",
            marginBottom: "2rem",
          }}
        >
          {post.title}
        </h1>

        {/* Gold divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.3)",
            marginBottom: "2.5rem",
          }}
        />

        {/* MDX body */}
        <div>{content}</div>
      </article>
    </main>
  );
}
