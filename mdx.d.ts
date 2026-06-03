declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { BlogPostMeta } from "@/app/lib/posts";

  export const post: BlogPostMeta;

  const MDXContent: ComponentType;
  export default MDXContent;
}
