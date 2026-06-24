import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { InlineArticleCta } from "@/app/components/inline-article-cta";
import { LocationVideo } from "@/app/components/location-video";
import { media } from "@/app/lib/media";

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-neutral-200 px-5 py-4 text-sm font-medium leading-6 text-neutral-600 md:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticlePortraitImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-[4/5] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-neutral-200 px-5 py-4 text-sm font-medium leading-6 text-neutral-600 md:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

const legalDocuments = [
  {
    name: "Giấy phép xây dựng số 17/GPXD",
    href: "/assets/legal/gpxd-17-vlasta-premier.pdf",
  },
  {
    name: "Phê duyệt quy hoạch dự án New Tech Q7",
    href: "/assets/legal/quy-hoach-new-tech-q7.pdf",
  },
  {
    name: "Quyết định chủ trương đầu tư New Tech",
    href: "/assets/legal/chu-truong-dau-tu-new-tech.pdf",
  },
  {
    name: "Cam kết tên thương mại Vlasta Premier",
    href: "/assets/legal/cam-ket-ten-thuong-mai-vlasta-premier.pdf",
  },
  {
    name: "Quyết định hợp lệ Vlasta Premier",
    href: "/assets/legal/qd-hop-le-vlasta-premier.pdf",
  },
  {
    name: "VPBank cam kết phát hành bảo lãnh",
    href: "/assets/legal/vpbank-cam-ket-bao-lanh.pdf",
  },
  {
    name: "Đăng ký kinh doanh New Tech",
    href: "/assets/legal/dang-ky-kinh-doanh-new-tech.pdf",
  },
];

function LegalDocumentTable() {
  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Hồ sơ pháp lý
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Bảng tài liệu khách hàng có thể mở xem trực tiếp
        </h3>
      </div>
      <div className="divide-y divide-neutral-200">
        {legalDocuments.map((document) => (
          <a
            key={document.href}
            href={document.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white px-5 py-4 text-base font-bold leading-7 text-neutral-900 transition hover:bg-neutral-50 hover:text-neutral-500 md:px-6"
          >
            {document.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function ArticleLocationVideo() {
  return (
    <figure className="my-10">
      <LocationVideo
        thumbnail={media.images.location}
        embedUrl={media.video.locationEmbed}
        youtubeUrl={media.video.locationYoutube}
      />
      <figcaption className="mt-4 px-1 text-sm font-medium leading-6 text-neutral-600">
        Video vị trí giúp khách mua hình dung kết nối từ Vlasta Premier về Phú Mỹ Hưng, Quận 1, Thủ Thiêm và các trục giao thông chính khu Nam.
      </figcaption>
    </figure>
  );
}

const comparisonProjects = [
  {
    name: "Mizuki Park",
    tone: "bg-[#edf5e9] border-[#9eb78f]/45",
    label: "Không gian sống",
    bestFor: "Gia đình thích quần thể xanh, yên tĩnh và cảnh quan đã hình thành.",
    strengths: ["Mảng xanh và cảnh quan đẹp", "Quần thể lớn, có cộng đồng cư dân", "Giá còn dễ tiếp cận hơn"],
    watch: "Cần kiểm tra kỹ tiến độ thanh toán vì có thể gấp hơn tùy giỏ hàng.",
  },
  {
    name: "The Peak Garden",
    tone: "bg-[#eef3f6] border-[#8da7b4]/45",
    label: "Vị trí thực dụng",
    bestFor: "Khách ưu tiên gần Phú Mỹ Hưng và kỳ vọng thêm vào hạ tầng tương lai.",
    strengths: ["Gần hệ tiện ích Phú Mỹ Hưng", "Có câu chuyện hạ tầng khu Nam", "Giá dễ tiếp cận hơn Vlasta Premier"],
    watch: "Nên kiểm tra kỹ layout, độ thoáng, chất lượng hoàn thiện và mật độ thực tế.",
  },
  {
    name: "Vlasta Premier",
    tone: "bg-neutral-50 border-neutral-200",
    label: "Cao cấp và dòng tiền",
    bestFor: "Khách muốn căn hộ thiết kế đẹp, bàn giao tốt và lịch thanh toán giãn.",
    strengths: ["Thiết kế facade và layout cao cấp", "Kính full-height ở phòng khách, phòng ngủ", "Thanh toán nhẹ hơn giai đoạn đầu"],
    watch: "Giá thường cao hơn khoảng 10%, phù hợp khách ưu tiên chất lượng hơn giá thấp nhất.",
  },
];

function ProjectComparisonCards() {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-3">
      {comparisonProjects.map((project) => (
        <div key={project.name} className={`rounded-[1.6rem] border p-5 shadow-sm ${project.tone}`}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
            {project.label}
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
            {project.name}
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#2f281f]">
            {project.bestFor}
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#4a4036]">
            {project.strengths.map((strength) => (
              <li key={strength} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-600" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm font-medium leading-6 text-neutral-600">
            <span className="font-bold text-neutral-900">Cần cân nhắc: </span>
            {project.watch}
          </p>
        </div>
      ))}
    </div>
  );
}

function UrbanMixComparisonTable() {
  const rows = [
    ["Tốc độ lấp đầy cư dân", "Thường chậm hơn vì tệp khách hẹp", "Nhanh hơn nhờ nhiều tầng nhu cầu ở"],
    ["Tiện ích thương mại", "Khó vận hành ổn định giai đoạn đầu", "Dễ có lưu lượng khách sớm hơn"],
    ["Sinh khí cộng đồng", "Có thể hình thành muộn", "Dễ có nhịp sống thật nếu quy hoạch tốt"],
    ["Phù hợp khách mua", "Lifestyle cao cấp, chờ giá trị dài hạn", "Ở thật, giữ tài sản, đầu tư trung hạn"],
    ["Rủi ro cần tránh", "Khu đẹp nhưng ít người ở", "Quy hoạch kém, quản lý yếu, NOXH bị cô lập"],
    ["Ví dụ tham khảo", "Nhiều phân khu mới chỉ cao cấp", "Mizuki Park — đa tệp, đã vận hành"],
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Bảng so sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Đô thị đơn tệp sản phẩm vs đô thị đa tệp sản phẩm
        </h3>
        <p className="mt-2 text-sm leading-6 text-neutral-300">
          Góc nhìn định tính khi đánh giá sức sống khu đô thị — không phải số liệu thống kê chính thức.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[680px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Tiêu chí", "Đơn tệp (chủ yếu cao cấp)", "Đa tệp (thương mại + vừa túi + NOXH)"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                {row.map((cell, index) => (
                  <td key={cell} className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TtGenesisThreeWayComparisonTable() {
  const columns = ["Hoàng Anh An Tiến", "HLP Silver Star", "TT Genesis"];
  const rows = [
    {
      label: "Giá/m² tham khảo",
      cells: ["~4x triệu (nhà cũ)", "~5x triệu (nhà cũ)", "~60–70 triệu (mua từ chủ đầu tư)"],
    },
    {
      label: "Trạng thái",
      cells: ["Đã bàn giao lâu năm", "Đã hình thành", "Đang triển khai"],
    },
    {
      label: "Vào ở",
      cells: ["Ngay", "Ngay", "Chờ bàn giao"],
    },
    {
      label: "Vốn ban đầu",
      cells: ["Thường cao (mua một lần)", "Thường cao", "Có thể thấp hơn theo tiến độ"],
    },
    {
      label: "Thế mạnh",
      cells: ["Tổng giá thấp, diện tích", "PMH, dự án đẹp hơn nhóm cũ", "Căn mới, tiện ích hiện đại, thanh toán giãn"],
    },
    {
      label: "Rủi ro chính",
      cells: ["Cũ, tăng giá chậm", "Dồn tiền mua nhà cũ", "Tiến độ, pháp lý, lãi sau ưu đãi"],
    },
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Bảng so sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          An Tiến, Silver Star và TT Genesis khác nhau ở đâu?
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              <th className="border-b border-neutral-200 px-5 py-4 font-bold">Tiêu chí</th>
              {columns.map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-neutral-50/70">
                <td className="border-b border-neutral-200 px-5 py-4 font-bold leading-6 text-neutral-900">
                  {row.label}
                </td>
                {row.cells.map((cell, index) => (
                  <td key={`${row.label}-${index}`} className="border-b border-neutral-200 px-5 py-4 leading-6">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TtGenesisPaymentScenarioTable() {
  const rows = [
    {
      label: "Cách mua",
      old: "Mua lại nhà cũ — thường trả gần một lần",
      genesis: "Mua trực tiếp từ chủ đầu tư — trả theo tiến độ",
    },
    {
      label: "Vốn ban đầu tham khảo",
      old: "Thường cần 3–4 tỷ tiền mặt (căn 4–5 tỷ)",
      genesis: "Tham khảo ~10% đợt đầu; nguồn dự kiến 20–30% đến bàn giao (đầu 2029)",
    },
    {
      label: "Áp lực vay sớm",
      old: "Cao — lãi + gốc ngay sau mua",
      genesis: "Thấp hơn giai đoạn đầu — vay tăng dần theo tiến độ",
    },
    {
      label: "Nhận nhà",
      old: "Vào ở ngay",
      genesis: "Chờ bàn giao",
    },
    {
      label: "Phù hợp ai",
      old: "Đã có cục tiền lớn, cần ở liền",
      genesis: "Thu nhập đều, muốn giữ dòng tiền",
    },
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          So sánh dòng tiền
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Nhà cũ vs TT Genesis — cùng band giá, khác áp lực tiền mặt
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Tiêu chí", "Mua nhà cũ (thứ cấp)", "TT Genesis (chủ đầu tư)"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-neutral-50/70">
                <td className="border-b border-neutral-200 px-5 py-4 font-bold leading-6 text-neutral-900">
                  {row.label}
                </td>
                <td className="border-b border-neutral-200 px-5 py-4 leading-6">{row.old}</td>
                <td className="border-b border-neutral-200 px-5 py-4 leading-6">{row.genesis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TtGenesisCashFlowTable() {
  const rows = [
    {
      project: "An Tiến (~4x triệu/m²)",
      reality: "Giá tổng thấp, ở ngay nhưng chung cư đã cũ.",
      fit: "Người thực tế, cần nhà ở gấp và chuộng diện tích rộng.",
    },
    {
      project: "Silver Star (~5x triệu/m²)",
      reality: "Vị trí đẹp gần Phú Mỹ Hưng, nhưng cần 3,5–4 tỷ tiền mặt để chốt nhanh.",
      fit: "Người có sẵn cục tiền lớn, thích nhà có sổ sẵn, dọn đồ vào ở luôn.",
    },
    {
      project: "TT Genesis (~6x–7x triệu/m²)",
      reality: "Dự án đang xây, nhà mới, quản lý chuẩn chỉnh, trả góp chia nhỏ.",
      fit: "Người trẻ có 1–1,5 tỷ, thu nhập đều mỗi tháng, chuộng sống gu và hiện đại.",
    },
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          So sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Chọn tiền mặt hay chọn tiến độ?
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Dự án & giá cả", "Thực tế cuộc chơi", "Ai nên xuống tiền?"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row.project} className="odd:bg-white even:bg-neutral-50/70">
                <td className="border-b border-neutral-200 px-5 py-4 font-bold leading-6 text-neutral-900">
                  {row.project}
                </td>
                <td className="border-b border-neutral-200 px-5 py-4 leading-6">{row.reality}</td>
                <td className="border-b border-neutral-200 px-5 py-4 leading-6">{row.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TtGenesisBuyerFitTable() {
  const rows = [
    {
      label: "Bỏ qua ngay nếu",
      detail:
        "Bạn đang cần nhà gấp trong vòng 6 tháng tới, không thích rủi ro nhà hình thành trong tương lai, hoặc trong tay đang có sẵn 4 tỷ tiền mặt — có ngần ấy tiền, cứ sang Sunrise hay South Residence thứ cấp mà săn hàng ngộp.",
    },
    {
      label: "Nên cân nhắc nếu",
      detail:
        "Bạn ngại mua nhà cũ phải sửa sang vá víu, thích ở khu chung cư mới có mảng xanh, hồ bơi tử tế. Quan trọng nhất: bạn muốn dùng đòn bẩy tài chính thông minh, chia nhỏ dòng tiền để giữ lại vốn làm ăn — thay vì đổ hết một cục tiền mặt vào thị trường thứ cấp đang khát tiền mặt.",
    },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="overflow-x-auto">
        <table className="min-w-[640px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Nhóm", "Khi nào áp dụng"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-neutral-50/70">
                <td className="border-b border-neutral-200 px-5 py-4 font-bold leading-6 text-neutral-900">
                  {row.label}
                </td>
                <td className="border-b border-neutral-200 px-5 py-4 leading-6">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectComparisonTable() {
  const rows = [
    ["Thế mạnh chính", "Không gian xanh, quần thể lớn", "Gần Phú Mỹ Hưng, hạ tầng tương lai", "Cao cấp, thiết kế đẹp, bàn giao tốt"],
    ["Phù hợp với ai", "Gia đình thích yên tĩnh và cảnh quan", "Khách ưu tiên vị trí và ngân sách", "Khách ưu tiên chất lượng sống và dòng tiền"],
    ["Giá bán", "Còn tốt trong nhóm so sánh", "Dễ tiếp cận hơn Vlasta Premier", "Cao hơn khoảng 10% tùy căn"],
    ["Thanh toán", "Cần kiểm tra vì có thể gấp", "Tùy chính sách từng thời điểm", "Giãn hơn, nhẹ hơn giai đoạn đầu"],
    ["Điểm cần xem kỹ", "Tiến độ đóng tiền", "Layout, độ thoáng, hoàn thiện", "Khoản chênh giá so với nhu cầu thật"],
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Bảng so sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Mizuki Park, The Peak Garden và Vlasta Premier khác nhau ở đâu?
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Tiêu chí", "Mizuki Park", "The Peak Garden", "Vlasta Premier"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                {row.map((cell, index) => (
                  <td key={cell} className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GenesisVlastaBudgetComparisonTable() {
  const rows = [
    ["Vị trí vs Phú Mỹ Hưng", "Nhà Bè, xa PMH hơn Vlasta", "Phú Thuận, gần PMH hơn Genesis"],
    ["Đơn giá tham khảo", "Thấp hơn Vlasta ~20%", "Cao hơn Genesis ~20%"],
    ["Giá 1PN & 1PN+ tham khảo", "Từ ~2,8 – 4 tỷ", "Từ ~4 – 5 tỷ"],
    ["Tổng vốn đến khi nhận nhà", "~600 – 800 triệu (mức 20% – 25%)", "~800 triệu – 1 tỷ (mức 20%)"],
    ["Ngân sách 600tr – 1 tỷ", "Khớp tốt từ mức 600 – 800 triệu", "Khớp nhất quanh mức ~1 tỷ"],
    ["Bàn giao dự kiến", "Đầu năm 2029", "Quý 4/2027"],
    ["Điểm mạnh", "Đơn giá thấp hơn ~20%, vốn vào gọn", "Gần PMH hơn, 20% đến nhận nhà, ven sông"],
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Bảng so sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          TT Genesis và Vlasta Premier — ngân sách 600 triệu – 1 tỷ
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Tiêu chí", "TT Genesis", "Vlasta Premier"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const sunshineComparisonProjects = [
  {
    name: "Sunshine Sky City",
    tone: "bg-[#eef3f6] border-[#8da7b4]/45",
    label: "Gần Phú Mỹ Hưng",
    bestFor: "Khách muốn ở gần hệ tiện ích Quận 7 và chấp nhận quy mô cư dân lớn hơn.",
    strengths: ["Liền kề khu Phú Mỹ Hưng", "Nhận diện dự án tốt", "Phù hợp nhóm ưu tiên tiện ích khu vực"],
    watch: "Cần cân nhắc mật độ, số lượng căn và cảm giác riêng tư khi vận hành.",
  },
  {
    name: "Sunshine Diamond River",
    tone: "bg-[#edf5e9] border-[#9eb78f]/45",
    label: "Cảnh quan ven sông",
    bestFor: "Khách thích không gian ven sông, khu phức hợp lớn và câu chuyện cảnh quan.",
    strengths: ["Lợi thế cảnh quan", "Quy mô khu phức hợp", "Phù hợp khách thích hệ sinh thái lớn"],
    watch: "Nên kiểm tra kỹ khoảng cách di chuyển hằng ngày, mật độ và khẩu vị sống mong muốn.",
  },
  {
    name: "The Peak Garden",
    tone: "bg-[#f4f0ea] border-[#c8b99f]/60",
    label: "Ngân sách và hạ tầng",
    bestFor: "Khách ưu tiên mức giá dễ tiếp cận hơn và kỳ vọng vào hạ tầng khu Nam.",
    strengths: ["Gần Phú Mỹ Hưng", "Có câu chuyện Metro/hạ tầng tương lai", "Dễ tiếp cận hơn nhóm cao cấp"],
    watch: "Nên xem kỹ layout, facade, độ thoáng và chất lượng hoàn thiện so với kỳ vọng.",
  },
  {
    name: "Vlasta Premier",
    tone: "bg-neutral-50 border-neutral-200",
    label: "Cao cấp chọn lọc",
    bestFor: "Khách muốn thiết kế đẹp, yếu tố Đào Trí ven sông, tiện ích khác biệt và lịch thanh toán nhẹ hơn.",
    strengths: ["Kính full-height, layout đẹp", "Đào Trí ven sông, golf 3D, hồ bơi muối", "Thanh toán 20% tới nhận nhà"],
    watch: "Cần so theo từng căn, view, tầng và chính sách vì mặt bằng giá mỗi dự án khác nhau.",
  },
];

function SunshineComparisonCards() {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-2">
      {sunshineComparisonProjects.map((project) => (
        <div key={project.name} className={`rounded-[1.6rem] border p-5 shadow-sm ${project.tone}`}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
            {project.label}
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
            {project.name}
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#2f281f]">
            {project.bestFor}
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#4a4036]">
            {project.strengths.map((strength) => (
              <li key={strength} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-600" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm font-medium leading-6 text-neutral-600">
            <span className="font-bold text-neutral-900">Cần cân nhắc: </span>
            {project.watch}
          </p>
        </div>
      ))}
    </div>
  );
}

function SunshineComparisonTable() {
  const rows = [
    ["Thế mạnh chính", "Gần Phú Mỹ Hưng", "Cảnh quan ven sông", "Metro/hạ tầng tương lai", "Thiết kế, tiện ích, thanh toán"],
    ["Phù hợp với ai", "Khách thích tiện ích khu vực", "Khách thích khu phức hợp lớn", "Khách ưu tiên ngân sách", "Khách ưu tiên căn hộ cao cấp"],
    ["Trải nghiệm sống", "Sôi động, quy mô lớn", "Cảnh quan và hệ sinh thái lớn", "Thực dụng, cần xem kỹ layout", "Riêng tư hơn, chất lượng hơn"],
    ["Điểm nổi bật", "Nhận diện tốt", "Cảnh quan ven sông, giá khoảng 110 triệu/m2", "Giá dễ tiếp cận hơn", "Đào Trí ven sông, golf 3D, hồ bơi muối"],
    ["Điểm cần cân nhắc", "Mật độ cư dân", "Giá cao, khoảng cách di chuyển", "Hoàn thiện và độ thoáng", "Cần so kỹ từng căn theo view và giá vào"],
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
      <div className="bg-neutral-900 px-5 py-5 text-white md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-300">
          Bảng so sánh nhanh
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
          Vlasta Premier khác gì Sunshine Sky City, Sunshine Diamond River và The Peak Garden?
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[920px] border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>
              {["Tiêu chí", "Sunshine Sky City", "Sunshine Diamond River", "The Peak Garden", "Vlasta Premier"].map((heading) => (
                <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#40382f]">
            {rows.map((row) => (
              <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const pairComparisonData = {
  mizuki: {
    competitor: "Mizuki Park",
    competitorLabel: "Không gian xanh",
    competitorTone: "bg-[#edf5e9] border-[#9eb78f]/45",
    competitorBestFor: "Gia đình thích quần thể lớn, cảnh quan đẹp, yên tĩnh và giá còn tốt.",
    competitorStrengths: ["Không gian xanh", "Quần thể lớn", "Cảnh quan đã hình thành"],
    competitorWatch: "Lịch thanh toán có thể gấp hơn, cần kiểm tra dòng tiền từng đợt.",
    rows: [
      ["Phù hợp với ai", "Gia đình thích xanh, yên tĩnh", "Khách ưu tiên căn hộ cao cấp và dòng tiền"],
      ["Điểm mạnh", "Quần thể lớn, cảnh quan đẹp", "Thiết kế đẹp, bàn giao tốt, tiện ích hiếm"],
      ["Thanh toán", "Cần kiểm tra kỹ từng giỏ hàng", "Giãn hơn, nhẹ hơn giai đoạn đầu"],
      ["Giá bán", "Dễ tiếp cận hơn", "Cao hơn khoảng 10% tùy căn"],
    ],
  },
  "the-peak-garden": {
    competitor: "The Peak Garden",
    competitorLabel: "Vị trí và ngân sách",
    competitorTone: "bg-[#f4f0ea] border-[#c8b99f]/60",
    competitorBestFor: "Khách muốn gần Phú Mỹ Hưng, quan tâm hạ tầng tương lai và giá dễ tiếp cận.",
    competitorStrengths: ["Gần Phú Mỹ Hưng", "Có câu chuyện hạ tầng", "Ngân sách dễ tiếp cận hơn"],
    competitorWatch: "Nên kiểm tra kỹ layout, độ thoáng, facade và chất lượng hoàn thiện.",
    rows: [
      ["Phù hợp với ai", "Khách ưu tiên vị trí và ngân sách", "Khách ưu tiên thiết kế và chất lượng sống"],
      ["Điểm mạnh", "Gần Phú Mỹ Hưng, hạ tầng tương lai", "Cao cấp hơn, tiện ích khác biệt"],
      ["Trải nghiệm căn hộ", "Cần xem kỹ layout thực tế", "Kính full-height, cảm giác sang hơn"],
      ["Thanh toán", "Tùy chính sách từng thời điểm", "Giãn hơn, hỗ trợ dòng tiền tốt hơn"],
    ],
  },
  "sunshine-sky-city": {
    competitor: "Sunshine Sky City",
    competitorLabel: "Gần Phú Mỹ Hưng",
    competitorTone: "bg-[#eef3f6] border-[#8da7b4]/45",
    competitorBestFor: "Khách muốn liền kề Phú Mỹ Hưng và dùng hệ tiện ích Quận 7 đã hình thành.",
    competitorStrengths: ["Liền kề Phú Mỹ Hưng", "Nhận diện tốt", "Tiện ích khu vực mạnh"],
    competitorWatch: "Cần cân nhắc mật độ cư dân và cảm giác riêng tư khi vận hành.",
    rows: [
      ["Phù hợp với ai", "Khách ưu tiên tiện ích Phú Mỹ Hưng", "Khách muốn dự án chọn lọc hơn"],
      ["Điểm mạnh", "Vị trí liền kề khu tiện ích", "Thiết kế, tiện ích và thanh toán"],
      ["Trải nghiệm sống", "Sôi động, quy mô lớn", "Riêng tư hơn, cảm giác cao cấp hơn"],
      ["Điểm cần cân nhắc", "Mật độ và số lượng căn", "Giá cao hơn nhóm dễ tiếp cận"],
    ],
  },
  "q7-riverside": {
    competitor: "Q7 Riverside",
    competitorLabel: "Đô thị đại chúng ven sông",
    competitorTone: "bg-[#eef3f6] border-[#8da7b4]/45",
    competitorBestFor: "Gia đình trẻ, mua ở thật, cho thuê ngay và ngân sách vừa phải trên trục Đào Trí.",
    competitorStrengths: ["Quy mô lớn, đông cư dân", "Tiện ích đủ dùng, giá dễ tiếp cận", "Cộng đồng đã hình thành, dễ cho thuê"],
    competitorWatch: "Cạnh tranh cho thuê cao, thiết kế và tiêu chuẩn bàn giao đã có tuổi so với dự án mới.",
    rows: [
      ["Phù hợp với ai", "Khách cần khu đông, mua an toàn, cho thuê ngay", "Khách muốn sản phẩm mới, sống sang hơn"],
      ["Điểm mạnh", "Cộng đồng cư dân, nhộn nhịp, giá vừa tầm", "Luxury Wellness ven sông, thiết kế hiện đại"],
      ["Trải nghiệm sống", "Đô thị đại chúng, thực dụng", "Ít căn hơn, tiện ích nghỉ dưỡng, cao cấp hơn"],
      ["Thanh toán", "Mua căn đã bàn giao, dòng tiền rõ hơn", "20% đến nhận nhà, lãi 0%, chiết khấu mạnh giai đoạn đầu"],
    ],
  },
  "sunshine-diamond-river": {
    competitor: "Sunshine Diamond River",
    competitorLabel: "Ven sông giá cao",
    competitorTone: "bg-[#edf5e9] border-[#9eb78f]/45",
    competitorBestFor: "Khách thích khu phức hợp lớn, cảnh quan ven sông và chấp nhận mặt bằng giá cao khoảng 110 triệu/m2.",
    competitorStrengths: ["Cảnh quan ven sông", "Quy mô khu phức hợp", "Mặt bằng giá cao, định vị rõ"],
    competitorWatch: "Nên kiểm tra khoảng cách di chuyển hằng ngày, mật độ và tổng ngân sách vì giá có thể cao hơn Vlasta Premier.",
    rows: [
      ["Phù hợp với ai", "Khách thích cảnh quan và quy mô lớn", "Khách thích dự án chọn lọc trên trục Đào Trí"],
      ["Điểm mạnh", "Ven sông, hệ sinh thái lớn, giá khoảng 110 triệu/m2", "Yếu tố ven sông Đào Trí, thiết kế căn hộ và tiện ích hiếm"],
      ["Trải nghiệm sống", "Khu phức hợp nhiều cư dân", "Chọn lọc, riêng tư hơn"],
      ["Giá và dòng tiền", "Giá cao, cần chuẩn bị ngân sách lớn", "Thanh toán giãn hơn, áp lực vốn đầu nhẹ hơn"],
    ],
  },
};

function PairComparison({ competitor }: { competitor: keyof typeof pairComparisonData }) {
  const data = pairComparisonData[competitor];

  if (!data) {
    return null;
  }

  const projects = [
    {
      name: data.competitor,
      label: data.competitorLabel,
      tone: data.competitorTone,
      bestFor: data.competitorBestFor,
      strengths: data.competitorStrengths,
      watch: data.competitorWatch,
    },
    {
      name: "Vlasta Premier",
      label: "Cao cấp và dòng tiền",
      tone: "bg-neutral-50 border-neutral-200",
      bestFor: "Khách ưu tiên thiết kế đẹp, bàn giao chất lượng, yếu tố ven sông Đào Trí và lịch thanh toán giãn.",
      strengths: ["Kính full-height, layout đẹp", "Trục Đào Trí ven sông, golf 3D, hồ bơi muối", "Thanh toán nhẹ hơn giai đoạn đầu"],
      watch: "Cần so kỹ giá từng căn theo tầng, view và chính sách tại thời điểm mua.",
    },
  ];

  return (
    <div className="my-10 space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className={`rounded-[1.6rem] border p-5 shadow-sm ${project.tone}`}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
              {project.label}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
              {project.name}
            </h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#2f281f]">
              {project.bestFor}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#4a4036]">
              {project.strengths.map((strength) => (
                <li key={strength} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-600" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm font-medium leading-6 text-neutral-600">
              <span className="font-bold text-neutral-900">Cần cân nhắc: </span>
              {project.watch}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(21,17,12,0.08)]">
        <div className="bg-neutral-900 px-5 py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-300">
            So sánh nhanh
          </p>
          <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
            {data.competitor} và Vlasta Premier khác nhau ở đâu?
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-900">
              <tr>
                {["Tiêu chí", data.competitor, "Vlasta Premier"].map((heading) => (
                  <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#40382f]">
              {data.rows.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const internalLinkSets = {
  ttGenesis: [
    {
      href: "/blog/thanh-toan-tt-genesis",
      title: "Tiến độ thanh toán TT Genesis",
      text: "Trả ~10% đợt đầu, giãn theo tiến độ xây dựng và bài toán dòng tiền so với mua nhà cũ.",
    },
    {
      href: "/blog/gia-can-1pn-tt-genesis-2026",
      title: "Giá căn 1PN TT Genesis 2026",
      text: "Tổng giá 2,9–3,5 tỷ, phù hợp ai và cách chọn căn trong ngân sách gọn.",
    },
    { href: "/blog/gia-tt-genesis-2026", title: "Giá TT Genesis 2026", text: "Bảng giá 1PN, 1PN+, 2PN, 3PN và cách so với Quận 7." },
    {
      href: "/blog/tt-genesis-ban-giao-khi-nao",
      title: "TT Genesis bàn giao khi nào?",
      text: "Dự kiến 2028–2029, tiến độ thi công và có nên mua dự án đang xây tại Nhà Bè.",
    },
    {
      href: "/blog/tt-genesis-co-nen-mua-khong",
      title: "TT Genesis có nên mua không?",
      text: "Ai phù hợp căn mới Nhà Bè, khi nào nên chọn An Tiến hoặc Silver Star thay vì primary.",
    },
    {
      href: "/blog/tt-genesis-hay-hoang-anh-an-tien-silver-star",
      title: "TT Genesis vs An Tiến & Silver Star",
      text: "So căn 4x–5x tr/m² thứ cấp với căn mới 6x–7x và bài toán dòng tiền.",
    },
    { href: "/tt-genesis", title: "TT Genesis — giá từ 2,8 tỷ, thanh toán theo tiến độ", text: "Bảng giá, tiện ích, tiến độ và form nhận giỏ hàng 5 căn." },
  ],
  comparisonHub: [
    { href: "/blog/so-sanh-vlasta-premier-q7-riverside", title: "Vlasta Premier vs Q7 Riverside", text: "So riêng hai thế hệ trên trục Đào Trí ven sông." },
    { href: "/blog/so-sanh-vlasta-premier-mizuki-park", title: "Vlasta Premier vs Mizuki Park", text: "So riêng về không gian xanh, giá và lịch thanh toán." },
    { href: "/blog/so-sanh-vlasta-premier-the-peak-garden", title: "Vlasta Premier vs The Peak Garden", text: "So riêng về vị trí Phú Mỹ Hưng, hạ tầng và chất lượng căn hộ." },
    { href: "/vlasta-premier", title: "Thông tin dự án Vlasta Premier", text: "Xem bảng giá, mặt bằng, pháp lý và tiến độ cập nhật." },
  ],
  mizukiHub: [
    { href: "/mizuki-park", title: "Trang tổng quan Mizuki Park", text: "Giá, phân khu Trellia Cove, tiện ích và form tư vấn." },
    { href: "/blog/bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc", title: "Bãi rác Đa Phước và khu Nam", text: "Tin Bộ TN&MT, lộ trình rác điện và cách đọc kỳ vọng môi trường khi chọn Mizuki." },
    { href: "/blog/mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh", title: "Mizuki hưởng lợi từ Hưng Long?", text: "Đọc Mizuki theo quy hoạch Vinhomes Bình Chánh 1.512 ha." },
    { href: "/blog/co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier", title: "2 tỷ: Mizuki 72m² hay Vlasta?", text: "So ngân sách gọn giữa đô thị đã vận hành và căn hộ mới." },
    { href: "/blog/so-sanh-vlasta-premier-mizuki-park", title: "Vlasta Premier vs Mizuki Park", text: "So riêng về không gian xanh, giá và lịch thanh toán." },
    { href: "/blog/so-sanh-mizuki-vlasta-premier-the-peak-garden", title: "So sánh tổng quan khu Nam", text: "Đặt Mizuki cạnh Vlasta Premier và The Peak Garden." },
    { href: "/blog/he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026", title: "Chống ngập khu Nam 2026", text: "Lớp hạ tầng khác đáng đọc cùng cầu Bình Tiên." },
  ],
  sunshineHub: [
    { href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city", title: "Vlasta Premier vs Sunshine Sky City", text: "So riêng về Phú Mỹ Hưng, mật độ và trải nghiệm sống." },
    { href: "/blog/so-sanh-vlasta-premier-sunshine-diamond-river", title: "Vlasta Premier vs Sunshine Diamond River", text: "So riêng về cảnh quan ven sông và căn hộ cao cấp." },
    { href: "/blog/so-sanh-vlasta-premier-the-peak-garden", title: "Vlasta Premier vs The Peak Garden", text: "So riêng về ngân sách, vị trí và lịch thanh toán." },
  ],
  pair: [
    { href: "/blog/so-sanh-mizuki-vlasta-premier-the-peak-garden", title: "Bài so sánh tổng quan khu Nam", text: "Đặt Vlasta Premier cạnh Mizuki Park và The Peak Garden." },
    { href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden", title: "So sánh với nhóm Sunshine", text: "Xem thêm Sunshine Sky City, Sunshine Diamond River và The Peak Garden." },
    { href: "/vlasta-premier", title: "Nhận bảng giá Vlasta Premier", text: "Xem mặt bằng, tiện ích, pháp lý và form tư vấn." },
  ],
  project: [
    { href: "/blog/thanh-toan-vlasta-premier-20-den-khi-nhan-nha", title: "Thanh toán 20% đến khi nhận nhà", text: "Lịch đóng, hỗ trợ ngân hàng và bài toán dòng tiền tới Q4/2027." },
    { href: "/blog/vlasta-premier-o-dau", title: "Vlasta Premier ở đâu?", text: "Địa chỉ Đào Trí Phú Thuận và kết nối khu Nam." },
    { href: "/blog/vlasta-premier-ban-giao-khi-nao", title: "Bàn giao khi nào?", text: "Tiến độ Q4/2027 và mốc cần theo dõi." },
    { href: "/blog/phi-quan-ly-vlasta-premier", title: "Phí quản lý Vlasta Premier", text: "16.500 đồng/m2/tháng và phí bảo trì 2%." },
    { href: "/blog/gia-vlasta-premier-2026", title: "Giá Vlasta Premier 2026", text: "Bảng giá theo 1PN, 2PN, 3PN và lưu ý khi so giỏ hàng." },
    { href: "/blog/phap-ly-vlasta-premier-van-phu", title: "Pháp lý Vlasta Premier by Văn Phú", text: "Tên pháp lý New Tech, giấy phép xây dựng, quy hoạch 1/500 và sổ hồng." },
    { href: "/vlasta-premier", title: "Vlasta Premier — trả 20% đến nhận nhà", text: "Giá từ 4,35 tỷ, bảng giá, form tư vấn và giỏ hàng." },
  ],
  buyNamSouth: [
    {
      href: "/tt-genesis",
      title: "TT Genesis Nhà Bè",
      text: "Giá dự kiến từ 2,8 tỷ, căn 1PN–3PN Đào Sư Tích — xem bảng giá và giữ chỗ.",
    },
    {
      href: "/vlasta-premier",
      title: "Vlasta Premier Phú Thuận",
      text: "Giá từ 4,35 tỷ, trả 20% đến nhận nhà, full nội thất CBRE.",
    },
    {
      href: "/gio-hang",
      title: "Giỏ hàng đang mở",
      text: "Căn Mizuki, Vlasta, TT Genesis, The Peak Garden — liên hệ xác nhận giá.",
    },
  ],
  vinhomesTin: [
    {
      href: "/vinhomes-binh-chanh",
      title: "Vinhomes Bình Chánh",
      text: "Cập nhật quy hoạch Hưng Long 1.512 ha, bãi rác và cụm tin khu Nam.",
    },
    {
      href: "/mizuki-park",
      title: "Mizuki Park Bình Chánh",
      text: "Đô thị đã có cư dân — có thể đến xem ngay trong lúc chờ Hưng Long.",
    },
    {
      href: "/blog/mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh",
      title: "Mizuki hưởng lợi từ Bình Chánh?",
      text: "Đọc Mizuki theo bối cảnh Vinhomes Hưng Long và hạ tầng khu Nam.",
    },
  ],
};

const internalLinkHeadings: Partial<Record<keyof typeof internalLinkSets, { eyebrow: string; title: string }>> = {
  buyNamSouth: {
    eyebrow: "Đang tìm căn khu Nam?",
    title: "Xem dự án và giỏ hàng đang mở bán",
  },
  vinhomesTin: {
    eyebrow: "Theo dõi tin Bình Chánh?",
    title: "Mizuki Park và cụm cập nhật Vinhomes",
  },
  mizukiHub: {
    eyebrow: "Đang cân nhắc Mizuki Park?",
    title: "Xem trang dự án, giá Trellia Cove và bài liên quan",
  },
};

function ArticleInternalLinks({
  variant = "project",
}: {
  variant?: keyof typeof internalLinkSets;
}) {
  const links = internalLinkSets[variant] || internalLinkSets.project;
  const heading = internalLinkHeadings[variant] || {
    eyebrow: "Đọc tiếp theo",
    title: "Các bài liên quan giúp so sánh nhanh hơn",
  };

  return (
    <aside className="my-10 rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-5 shadow-sm md:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-neutral-500">
        {heading.eyebrow}
      </p>
      <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em] text-neutral-900">
        {heading.title}
      </h3>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-lg hover:shadow-neutral-900/5"
          >
            <span className="block text-sm font-bold leading-6 text-neutral-900">{link.title}</span>
            <span className="mt-2 block text-sm leading-6 text-neutral-600">{link.text}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function CapitalChoiceComparison() {
  const cards = [
    {
      label: "Phương án 1",
      title: "Căn hộ đã hình thành 72m2",
      tone: "bg-[#eef3f6] border-[#8da7b4]/45",
      price: "Khoảng 4 tỷ",
      upfront: "Có 2 tỷ, vay thêm khoảng 2 tỷ",
      interest: "Lãi suất vay có thể 11-14%/năm",
      bestFor: "Phù hợp khách cần diện tích rộng, muốn ở ngay và ưu tiên công năng gia đình.",
      watch: "Áp lực trả lãi/gốc hàng tháng có thể lớn nếu thu nhập chưa đủ mạnh.",
    },
    {
      label: "Phương án 2",
      title: "Căn hộ cao cấp mới 1PN - 1PN+",
      tone: "bg-neutral-50 border-neutral-200",
      price: "Khoảng 4.5-5 tỷ",
      upfront: "Thanh toán ban đầu khoảng 1 tỷ",
      interest: "Phần còn lại ân hạn gốc và lãi khoảng 2 năm",
      bestFor: "Phù hợp khách muốn giữ dòng tiền, mua sản phẩm mới và có thể cho thuê sau bàn giao.",
      watch: "Diện tích nhỏ hơn, cần phù hợp với nhu cầu ở thật hoặc chiến lược đầu tư.",
    },
  ];

  const rows = [
    ["Tổng giá", "Khoảng 4 tỷ", "Khoảng 4.5-5 tỷ"],
    ["Diện tích", "Khoảng 72m2", "Khoảng 50-58m2"],
    ["Vốn ban đầu", "Dùng khoảng 2 tỷ vốn tự có", "Thanh toán khoảng 1 tỷ"],
    ["Khoản vay / phần còn lại", "Vay khoảng 2 tỷ", "Phần còn lại được giãn theo chính sách"],
    ["Lãi suất", "Có thể chịu lãi 11-14%/năm", "Ân hạn gốc và lãi khoảng 2 năm"],
    ["Điểm mạnh", "Rộng hơn, ở ngay tốt hơn", "Giữ lại tiền mặt tốt hơn, dòng tiền nhẹ hơn"],
    ["Phù hợp", "Gia đình cần diện tích", "Khách ưu tiên dòng tiền hoặc đầu tư cho thuê"],
  ];

  return (
    <div className="my-10 space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className={`rounded-[1.6rem] border p-5 shadow-sm ${card.tone}`}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
              {card.label}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
              {card.title}
            </h3>
            <dl className="mt-5 space-y-3 text-sm leading-6 text-[#40382f]">
              {[
                ["Tổng giá", card.price],
                ["Dòng tiền ban đầu", card.upfront],
                ["Lãi vay", card.interest],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/70 p-4">
                  <dt className="font-bold text-neutral-900">{label}</dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm font-semibold leading-6 text-[#2f281f]">{card.bestFor}</p>
            <p className="mt-4 rounded-2xl bg-white/70 p-4 text-sm font-medium leading-6 text-neutral-600">
              <span className="font-bold text-neutral-900">Cần cân nhắc: </span>
              {card.watch}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(21,17,12,0.08)]">
        <div className="bg-neutral-900 px-5 py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Bảng so sánh nhanh
          </p>
          <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
            Có 2 tỷ nên ưu tiên diện tích hay dòng tiền?
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-900">
              <tr>
                {["Tiêu chí", "Căn 72m2 đã hình thành", "Căn hộ cao cấp mới 1PN - 1PN+"].map((heading) => (
                  <th key={heading} className="border-b border-neutral-200 px-5 py-4 font-bold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#40382f]">
              {rows.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-neutral-50/70">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`border-b border-neutral-200 px-5 py-4 leading-6 ${index === 0 ? "font-bold text-neutral-900" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const components: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className="mt-20 border-l-4 border-neutral-300 pl-5 scroll-mt-36 font-sans text-[2.25rem] font-bold leading-[1.08] tracking-[-0.04em] text-neutral-900 first:mt-0 md:text-[2.9rem]"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="font-display mt-9 text-2xl font-medium tracking-[-0.03em] text-neutral-900"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-5 text-[16px] leading-8 text-neutral-800 md:text-[17px] md:leading-8"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-6 list-disc space-y-3 pl-6 text-[17px] leading-8 text-neutral-800 md:text-lg md:leading-9"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-6 list-decimal space-y-3 pl-6 text-[17px] leading-8 text-neutral-800 md:text-lg md:leading-9"
    />
  ),
  a: ({ href = "", children }) => (
    <Link href={href} className="font-semibold text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900">
      {children}
    </Link>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 rounded-[1.5rem] border-l-4 border-neutral-300 bg-neutral-50 p-6 text-neutral-800"
    />
  ),
  InlineArticleCta,
  ArticleImage,
  ArticlePortraitImage,
  LegalDocumentTable,
  ArticleLocationVideo,
  PairComparison,
  ArticleInternalLinks,
  CapitalChoiceComparison,
  GenesisVlastaBudgetComparisonTable,
  ProjectComparisonCards,
  ProjectComparisonTable,
  TtGenesisBuyerFitTable,
  TtGenesisCashFlowTable,
  TtGenesisPaymentScenarioTable,
  TtGenesisThreeWayComparisonTable,
  UrbanMixComparisonTable,
  SunshineComparisonCards,
  SunshineComparisonTable,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
