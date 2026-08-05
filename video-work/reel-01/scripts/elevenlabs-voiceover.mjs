import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outputDir = path.join(root, "output");
const voiceIdPath = path.join(outputDir, "elevenlabs-voice-id.txt");
const voiceOutputPath = path.join(outputDir, "voice.mp3");
const scriptPath = path.join(root, "script.txt");

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  throw new Error("Missing ELEVENLABS_API_KEY. Run: export ELEVENLABS_API_KEY='your_api_key'");
}

const voiceName = process.env.ELEVENLABS_VOICE_NAME || "Tú";
const explicitVoiceId = process.env.ELEVENLABS_VOICE_ID || "";

const samplePaths = [
  "/Users/apple/Downloads/voice-clone-samples/voice-mau-1-tu-van-tu-nhien.m4a",
  "/Users/apple/Downloads/voice-clone-samples/voice-mau-2-hook-nhan-nha.m4a",
  "/Users/apple/Downloads/voice-clone-samples/voice-mau-3-phan-tich-cham.m4a",
];

async function cloneVoice() {
  const form = new FormData();
  form.append("name", voiceName);
  form.append(
    "description",
    "Vietnamese real estate advisory voice sample recorded by the owner for authorized voice cloning.",
  );

  for (const samplePath of samplePaths) {
    const bytes = readFileSync(samplePath);
    const blob = new Blob([bytes], { type: "audio/mp4" });
    form.append("files", blob, path.basename(samplePath));
  }

  const response = await fetch("https://api.elevenlabs.io/v1/voices/add", {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
    },
    body: form,
  });

  if (!response.ok) {
    throw new Error(`Voice clone failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  if (!data.voice_id) {
    throw new Error(`Voice clone response missing voice_id: ${JSON.stringify(data)}`);
  }

  writeFileSync(voiceIdPath, data.voice_id, "utf8");
  return data.voice_id;
}

async function findVoiceByName(name) {
  const response = await fetch("https://api.elevenlabs.io/v1/voices", {
    headers: {
      "xi-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Voice lookup failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const voices = data.voices || [];
  const normalizedName = name.trim().toLocaleLowerCase("vi");
  const voice = voices.find((item) => item.name?.trim().toLocaleLowerCase("vi") === normalizedName);

  if (!voice) {
    const availableVoices = voices.map((item) => item.name).filter(Boolean).join(", ");
    throw new Error(`Voice "${name}" not found. Available voices: ${availableVoices}`);
  }

  return voice;
}

function getNarrationText() {
  const chunks = readFileSync(scriptPath, "utf8")
    .trim()
    .split(/\n\s*\n/)
    .map((text) => text.replace(/\n/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((text, index, chunks) => {
      const isQuestion = text.endsWith("?") || text.includes("Vì sao");
      const isHook = index === 0;
      const isBeforeCta = index === chunks.length - 2;
      const isCta = index === chunks.length - 1;

      return {
        text,
        pauseAfter: isCta ? 0 : isQuestion ? 0.8 : isHook || isBeforeCta ? 0.65 : 0.45,
      };
    });

  return chunks
    .map((chunk) => `${chunk.text}${chunk.pauseAfter > 0 ? ` <break time="${chunk.pauseAfter}s" />` : ""}`)
    .join(" ");
}

async function generateVoiceover(voiceId) {
  const text = getNarrationText();
  const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_turbo_v2_5";
  const requestBody = {
    text,
    model_id: modelId,
    voice_settings: {
      stability: 0.34,
      similarity_boost: 0.9,
      style: 0.32,
      use_speaker_boost: true,
    },
  };

  if (modelId === "eleven_turbo_v2_5" || modelId === "eleven_flash_v2_5") {
    requestBody.language_code = "vi";
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`Text-to-speech failed: ${response.status} ${await response.text()}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  writeFileSync(voiceOutputPath, Buffer.from(arrayBuffer));
}

const voice = explicitVoiceId
  ? { voice_id: explicitVoiceId, name: "ELEVENLABS_VOICE_ID" }
  : await findVoiceByName(voiceName);
const voiceId = voice.voice_id;
writeFileSync(voiceIdPath, voiceId, "utf8");
await generateVoiceover(voiceId);

console.log(`Voice Name: ${voice.name}`);
console.log(`Voice ID: ${voiceId}`);
console.log(`Voiceover: ${voiceOutputPath}`);
