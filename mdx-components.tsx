import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function InlineArticleCta() {
  return (
    <div className="my-10 rounded-[1.5rem] border border-[#c9a45d]/30 bg-[#15110c] p-6 text-white md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f3d69b]">
        Gợi ý tư vấn
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
        Cần kiểm tra bảng giá, pháp lý hoặc căn phù hợp?
      </h3>
      <p className="mt-3 leading-7 text-white/68">
        Bạn có thể gửi nhu cầu để nhận phân tích ngắn theo ngân sách, loại căn, tầng, view và mục tiêu mua ở hoặc đầu tư.
      </p>
      <Link
        href="#contact"
        className="mt-5 inline-flex rounded-full bg-[#f3d69b] px-6 py-3 text-sm font-semibold text-black"
      >
        Nhận tư vấn riêng
      </Link>
    </div>
  );
}

const components: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className="mt-12 scroll-mt-36 text-3xl font-semibold tracking-[-0.035em] text-[#15110c] first:mt-0 md:text-4xl"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-9 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-6 text-[17px] leading-8 text-[#40382f] md:text-lg md:leading-9"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-6 list-disc space-y-3 pl-6 text-[17px] leading-8 text-[#40382f] md:text-lg md:leading-9"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-6 list-decimal space-y-3 pl-6 text-[17px] leading-8 text-[#40382f] md:text-lg md:leading-9"
    />
  ),
  a: ({ href = "", children }) => (
    <Link href={href} className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline">
      {children}
    </Link>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 rounded-[1.5rem] border-l-4 border-[#c9a45d] bg-[#fbf8f2] p-6 text-[#2f281f]"
    />
  ),
  InlineArticleCta,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
