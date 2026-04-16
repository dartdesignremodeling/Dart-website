"use client";

import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.22em] uppercase transition-colors duration-300 mb-14"
      style={{ color: "rgba(201,168,76,0.55)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color =
          "rgba(201,168,76,0.55)")
      }
    >
      ← Perspectivas
    </Link>
  );
}
