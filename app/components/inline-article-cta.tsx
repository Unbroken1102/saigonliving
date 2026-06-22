"use client";

import { ArticleInventoryLeadForm } from "@/app/components/article-inventory-lead-form";
import { useBlogHubArticle } from "@/app/components/blog-hub-article-context";

type InlineArticleCtaProps = {
  source?: string;
  projectName?: string;
  /** @deprecated Dùng projectName theo hub thay cho title tùy chỉnh */
  title?: string;
  /** @deprecated */
  description?: string;
  /** @deprecated */
  buttonLabel?: string;
};

export function InlineArticleCta({
  source = "Blog article inventory CTA",
  projectName: projectNameProp,
}: InlineArticleCtaProps) {
  const { projectName: hubProjectName } = useBlogHubArticle();
  const projectName = projectNameProp || hubProjectName;

  return (
    <ArticleInventoryLeadForm
      projectName={projectName}
      source={source}
      className="my-10"
    />
  );
}
