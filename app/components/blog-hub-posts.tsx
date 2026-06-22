"use client";

import { useState } from "react";
import { BlogCard } from "@/app/components/site-sections";
import type { BlogPostMeta } from "@/app/lib/posts";

const PREVIEW_LIMIT = 4;

type BlogHubPostsProps = {
  posts: BlogPostMeta[];
  hubTitle: string;
};

export function BlogHubPosts({ posts, hubTitle }: BlogHubPostsProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = posts.length > PREVIEW_LIMIT;
  const visiblePosts = expanded ? posts : posts.slice(0, PREVIEW_LIMIT);

  return (
    <>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} variant="readable" />
        ))}
      </div>
      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-500 hover:shadow-md"
          >
            {expanded
              ? `Thu gọn bài viết ${hubTitle}`
              : `Xem tất cả ${posts.length} bài viết về ${hubTitle} →`}
          </button>
        </div>
      ) : null}
    </>
  );
}
