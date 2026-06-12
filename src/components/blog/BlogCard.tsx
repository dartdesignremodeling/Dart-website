"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: "rgba(201,168,76,0.12)",
        background: "rgba(255,255,255,0.015)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "rgba(236,164,19,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "rgba(201,168,76,0.12)";
      }}
    >
      {/* Cover image */}
      {post.image && (
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.6s ease",
            }}
            className="group-hover:scale-105"
          />
          {/* Dark overlay on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(30,21,8,0.45)" }}
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col gap-5 p-8 flex-1">
      {/* Category */}
      <span
        className="font-sans text-[9px] tracking-[0.32em] uppercase self-start"
        style={{ color: "#c9a84c" }}
      >
        {post.category}
      </span>

      {/* Title */}
      <h2
        className="italic font-semibold text-[#f5e6c8] leading-[1.2] m-0 grow text-[clamp(1.35rem,2.2vw,1.65rem)]"
      >
        {post.title}
      </h2>

      {/* Excerpt */}
      <p
        className="font-sans font-light"
        style={{
          fontSize: "0.8rem",
          color: "rgba(245,240,232,0.45)",
          lineHeight: 1.7,
        }}
      >
        {post.excerpt}
      </p>

      {/* Footer row */}
      <div
        className="flex items-center justify-between mt-auto pt-4"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-sans text-[10px] tracking-[0.12em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            {formatDate(post.date)}
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.12em]"
            style={{ color: "rgba(201,168,76,0.4)" }}
          >
            {post.readTime}
          </span>
        </div>
        <span
          className="font-sans text-sm transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: "#c9a84c" }}
        >
          →
        </span>
      </div>
      </div>
    </Link>
  );
}
