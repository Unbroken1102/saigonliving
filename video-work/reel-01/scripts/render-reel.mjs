import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const ffmpegPath = require("ffmpeg-static");

const root = path.resolve(import.meta.dirname, "..");
const repoRoot = path.resolve(root, "../..");
const outputDir = path.join(root, "output");
const scenesPath = path.join(root, "scenes.json");
const voicePath = path.join(outputDir, "voice.mp3");
const finalPath = path.join(outputDir, "reel-01-draft.mp4");
const srtPath = path.join(outputDir, "reel-01-subtitles.srt");

mkdirSync(outputDir, { recursive: true });

if (!existsSync(voicePath)) {
  throw new Error(`Missing voiceover: ${voicePath}. Run elevenlabs-voiceover.mjs first.`);
}

const data = JSON.parse(readFileSync(scenesPath, "utf8"));
const scenes = data.scenes;

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" });
}

function getMediaDuration(filePath) {
  try {
    const output = execFileSync(ffmpegPath, ["-hide_banner", "-i", filePath], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return parseDuration(output);
  } catch (error) {
    return parseDuration(`${error.stdout || ""}\n${error.stderr || ""}`);
  }
}

function parseDuration(text) {
  const match = text.match(/Duration:\s*(\d+):(\d+):([\d.]+)/);
  if (!match) throw new Error("Could not parse media duration.");
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

function srtTime(seconds) {
  const millis = Math.max(0, Math.round(seconds * 1000));
  const h = Math.floor(millis / 3600000);
  const m = Math.floor((millis % 3600000) / 60000);
  const s = Math.floor((millis % 60000) / 1000);
  const ms = millis % 1000;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

const totalDuration = getMediaDuration(voicePath);
const weights = scenes.map((scene) => Math.max(1, scene.narration.length));
const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);
const durations = weights.map((weight) => (totalDuration * weight) / weightTotal);

const segmentPaths = [];
const subtitleBlocks = [];
let cursor = 0;

for (const [index, scene] of scenes.entries()) {
  const sceneNumber = String(index + 1).padStart(2, "0");
  const imagePath = path.resolve(root, scene.image);
  const segmentPath = path.join(outputDir, `segment-${sceneNumber}.mp4`);

  if (!existsSync(imagePath)) {
    throw new Error(`Missing B-roll image: ${imagePath}`);
  }

  const duration = durations[index];
  const filter = [
    "scale=1080:1920:force_original_aspect_ratio=increase",
    "crop=1080:1920",
    "zoompan=z='min(zoom+0.0012,1.08)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30",
    "format=yuv420p",
  ].join(",");

  run(ffmpegPath, [
    "-y",
    "-loop",
    "1",
    "-i",
    imagePath,
    "-t",
    String(duration),
    "-vf",
    filter,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-an",
    segmentPath,
  ]);

  subtitleBlocks.push(`${index + 1}\n${srtTime(cursor)} --> ${srtTime(cursor + duration)}\n${scene.subtitle}\n`);
  cursor += duration;
  segmentPaths.push(segmentPath);
}

writeFileSync(srtPath, subtitleBlocks.join("\n"), "utf8");

const concatPath = path.join(outputDir, "concat.txt");
writeFileSync(concatPath, segmentPaths.map((file) => `file '${file.replaceAll("'", "'\\''")}'`).join("\n"), "utf8");

const silentVideoPath = path.join(outputDir, "reel-01-video-only.mp4");
run(ffmpegPath, ["-y", "-f", "concat", "-safe", "0", "-i", concatPath, "-c", "copy", silentVideoPath]);

const subtitleFilter = `subtitles=${srtPath}:force_style='FontName=Arial,FontSize=16,PrimaryColour=&H00FFFFFF,OutlineColour=&H9A000000,BorderStyle=3,Outline=1,Shadow=0,Alignment=2,MarginV=130'`;

run(ffmpegPath, [
  "-y",
  "-i",
  silentVideoPath,
  "-i",
  voicePath,
  "-vf",
  subtitleFilter,
  "-c:v",
  "libx264",
  "-preset",
  "veryfast",
  "-c:a",
  "aac",
  "-b:a",
  "160k",
  "-shortest",
  finalPath,
]);

console.log(`Reel draft: ${finalPath}`);
console.log(`Subtitles: ${srtPath}`);
