import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const ffmpegPath = require("ffmpeg-static");

const root = process.cwd();
const outputDir = path.join(root, "public", "generated", "youtube-can-ho-sai-gon");
mkdirSync(outputDir, { recursive: true });

const scenes = [
  {
    image: "public/assets/optimized/overview-dao-tri.jpg",
    subtitle: "Có 1-2 tỷ chưa chắc đã dễ mua nhà ở Sài Gòn.",
    narration:
      "Nếu bạn đang có một đến hai tỷ tiền mặt và nghĩ rằng mình đã gần mua được căn hộ ở Sài Gòn, thì video này có thể hơi khó nghe. Vì hiện nay, vấn đề không còn là bạn có đủ tiền trả trước hay không, mà là bạn có chịu nổi dòng tiền trong hai đến ba năm tới hay không.",
  },
  {
    image: "public/assets/optimized/location.jpg",
    subtitle: "Căn 50-70m2 hiện dễ rơi vào vùng 4-6 tỷ.",
    narration:
      "Vài năm trước, có một đến hai tỷ tiền mặt là một lợi thế khá lớn. Bạn có thể vay thêm ngân hàng, chọn một căn hai phòng ngủ khu ven, hoặc mua căn nhỏ để giữ tài sản. Nhưng đến giai đoạn hai nghìn không trăm hai mươi sáu, mặt bằng giá đã thay đổi rất nhiều. Ở nhiều dự án tại Thành phố Hồ Chí Minh, đặc biệt khu Nam, giá căn hộ thường đã ở vùng bảy mươi lăm đến chín mươi triệu một mét vuông.",
  },
  {
    image: "public/assets/optimized/overview-balcony.jpg",
    subtitle: "Khó nhất không phải trả trước, mà là giữ được dòng tiền.",
    narration:
      "Điểm khó là người mua không chỉ cần đủ tiền trả trước. Bạn còn cần đủ sức trả nợ, đủ tiền làm nội thất, đủ quỹ dự phòng, và đủ ổn định thu nhập trong vài năm đầu. Ví dụ bạn có hai tỷ, mua căn bốn phẩy năm tỷ, phần còn lại vẫn phải xử lý bằng vay ngân hàng hoặc tiến độ thanh toán. Nếu tính sai dòng tiền, căn hộ đáng lẽ là tài sản lại biến thành áp lực mỗi tháng.",
  },
  {
    image: "public/assets/optimized/plan-b-1br.jpg",
    subtitle: "Không có lựa chọn hoàn hảo, chỉ có lựa chọn phù hợp dòng tiền.",
    narration:
      "Với một đến hai tỷ tiền mặt, người mua thường có ba lựa chọn. Một là đi xa hơn để tổng giá thấp hơn, nhưng đổi lại là thời gian di chuyển và khả năng cho thuê có thể kém hơn. Hai là chọn căn nhỏ hơn, nhưng vị trí, pháp lý và chất lượng sản phẩm tốt hơn. Ba là dùng vay ngân hàng, nhưng phải tính rất kỹ thu nhập ròng, lãi suất và quỹ dự phòng nếu thu nhập giảm trong sáu tháng.",
  },
  {
    image: "public/assets/optimized/amenity-coworking.jpg",
    subtitle: "Dự án bán được là dự án giải quyết đúng nỗi lo của người mua.",
    narration:
      "Điều thú vị là dù giá cao, thị trường không hề đứng yên. Một số dự án vẫn có thanh khoản vì chúng giải quyết đúng nhu cầu thật. Mizuki Park mạnh ở cộng đồng cư dân và không gian xanh. The Peak Garden có lợi thế gần Phú Mỹ Hưng và tổng giá dễ tiếp cận hơn. Còn những dự án mới như Vlasta Premier đi theo hướng sản phẩm mới, thiết kế cao cấp, tiện ích khác biệt và chính sách thanh toán nhẹ hơn.",
  },
  {
    image: "public/assets/optimized/amenity-business-lounge.jpg",
    subtitle: "Căn hộ tốt là căn bạn giữ được lâu dài.",
    narration:
      "Nếu bạn đang có một đến hai tỷ tiền mặt, đừng chỉ hỏi căn nào rẻ nhất. Câu hỏi đúng hơn là căn nào phù hợp với thu nhập, khả năng vay, nhu cầu ở thật và kế hoạch tài chính trong hai đến ba năm tới. Một căn hộ tốt không nhất thiết là căn giá thấp nhất. Một căn hộ tốt là căn bạn có thể giữ được lâu dài, không bị áp lực bán sớm khi lãi suất thay đổi.",
  },
  {
    image: "public/assets/optimized/hero.jpg",
    subtitle: "Muốn tính dòng tiền mua căn hộ? Nhắn mình.",
    narration:
      "Nếu bạn đang có khoảng một đến hai tỷ tiền mặt và chưa biết nên chọn căn đã bàn giao, căn nhỏ hơn, hay dự án mới có thanh toán nhẹ, hãy nhắn cho mình. Mình sẽ giúp bạn tính thử ba phương án: cần bao nhiêu vốn ban đầu, vay bao nhiêu là an toàn, và nên chọn loại căn nào để không bị áp lực dòng tiền. Đừng mua nhà chỉ vì thấy còn đủ tiền trả trước. Hãy mua khi bạn hiểu rõ dòng tiền sau khi ký hợp đồng.",
  },
];

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" });
}

function getAudioDuration(filePath) {
  try {
    const output = execFileSync("afinfo", [filePath], { encoding: "utf8" });
    const match = output.match(/estimated duration:\s+([\d.]+)/i);
    if (match) return Number(match[1]);
  } catch {}

  return 12;
}

function srtTime(seconds) {
  const millis = Math.round(seconds * 1000);
  const h = Math.floor(millis / 3600000);
  const m = Math.floor((millis % 3600000) / 60000);
  const s = Math.floor((millis % 60000) / 1000);
  const ms = millis % 1000;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

const segmentPaths = [];
const subtitleEntries = [];
let cursor = 0;

for (const [index, scene] of scenes.entries()) {
  const sceneNumber = String(index + 1).padStart(2, "0");
  const narrationPath = path.join(outputDir, `scene-${sceneNumber}.txt`);
  const audioPath = path.join(outputDir, `scene-${sceneNumber}.aiff`);
  const segmentPath = path.join(outputDir, `scene-${sceneNumber}.mp4`);
  const imagePath = path.join(root, scene.image);

  if (!existsSync(imagePath)) {
    throw new Error(`Missing image: ${imagePath}`);
  }

  writeFileSync(narrationPath, scene.narration, "utf8");
  run("say", ["-v", "Linh", "-r", "172", "-o", audioPath, "-f", narrationPath]);

  const duration = Math.max(getAudioDuration(audioPath) + 0.5, 8);
  const zoompan =
    "scale=2200:-2,zoompan=z='min(zoom+0.0008,1.08)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=30,format=yuv420p";

  run(ffmpegPath, [
    "-y",
    "-loop",
    "1",
    "-i",
    imagePath,
    "-i",
    audioPath,
    "-t",
    String(duration),
    "-vf",
    zoompan,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-c:a",
    "aac",
    "-b:a",
    "160k",
    "-shortest",
    segmentPath,
  ]);

  subtitleEntries.push(`${index + 1}\n${srtTime(cursor)} --> ${srtTime(cursor + duration)}\n${scene.subtitle}\n`);
  cursor += duration;
  segmentPaths.push(segmentPath);
}

const concatPath = path.join(outputDir, "concat.txt");
writeFileSync(concatPath, segmentPaths.map((file) => `file '${file.replaceAll("'", "'\\''")}'`).join("\n"), "utf8");

const rawVideoPath = path.join(outputDir, "can-ho-sai-gon-1-2-ty-raw.mp4");
run(ffmpegPath, ["-y", "-f", "concat", "-safe", "0", "-i", concatPath, "-c", "copy", rawVideoPath]);

const srtPath = path.join(outputDir, "can-ho-sai-gon-1-2-ty.srt");
writeFileSync(srtPath, subtitleEntries.join("\n"), "utf8");

const finalVideoPath = path.join(outputDir, "can-ho-sai-gon-1-2-ty-youtube.mp4");
const subtitleFilter = `subtitles=${srtPath}:force_style='FontName=Arial,FontSize=18,PrimaryColour=&H00FFFFFF,OutlineColour=&H9A000000,BorderStyle=3,Outline=1,Shadow=0,Alignment=2,MarginV=72'`;

try {
  run(ffmpegPath, [
    "-y",
    "-i",
    rawVideoPath,
    "-vf",
    subtitleFilter,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-c:a",
    "copy",
    finalVideoPath,
  ]);
} catch {
  console.warn("Could not burn subtitles into the video. Keeping raw MP4 and SRT sidecar.");
}

console.log(`\nVideo draft: ${existsSync(finalVideoPath) ? finalVideoPath : rawVideoPath}`);
console.log(`Subtitle file: ${srtPath}`);
