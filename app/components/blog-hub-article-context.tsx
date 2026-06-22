"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { BlogHubSection } from "@/app/lib/site";

type BlogHubArticleContextValue = {
  hub: BlogHubSection | null;
  projectName: string;
};

const BlogHubArticleContext = createContext<BlogHubArticleContextValue>({
  hub: null,
  projectName: "Nam Sài Gòn",
});

export function BlogHubArticleProvider({
  hub,
  projectName,
  children,
}: {
  hub: BlogHubSection | null;
  projectName: string;
  children: ReactNode;
}) {
  return (
    <BlogHubArticleContext.Provider value={{ hub, projectName }}>
      {children}
    </BlogHubArticleContext.Provider>
  );
}

export function useBlogHubArticle() {
  return useContext(BlogHubArticleContext);
}
