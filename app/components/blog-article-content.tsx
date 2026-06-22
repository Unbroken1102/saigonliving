"use client";

import { BlogHubArticleProvider } from "@/app/components/blog-hub-article-context";
import type { BlogHubSection } from "@/app/lib/site";
import type { ReactNode } from "react";

export function BlogArticleContent({
  hub,
  projectName,
  children,
}: {
  hub: BlogHubSection | null;
  projectName: string;
  children: ReactNode;
}) {
  return (
    <BlogHubArticleProvider hub={hub} projectName={projectName}>
      {children}
    </BlogHubArticleProvider>
  );
}
