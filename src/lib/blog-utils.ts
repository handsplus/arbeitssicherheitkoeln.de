import type { BlogPost } from "@/data/blog";

/** Grobe Wortzahl für Schema.org (Article.wordCount) – Zählung über Fließtext. */
export function countWordsInPost(post: BlogPost): number {
  const text = post.sections
    .flatMap((s) => (s.heading ? [s.heading, ...s.paragraphs] : s.paragraphs))
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
