# Reel 01: Co 1-2 Ty Mua Can Ho Sai Gon

Thu muc nay dung de tao Reel 9:16 bang Cursor + ElevenLabs.

## Input

- Script doc: `script.txt`
- Scene/subtitle/B-roll: `scenes.json`
- Voice samples da trim:
  - `/Users/apple/Downloads/voice-clone-samples/voice-mau-1-tu-van-tu-nhien.m4a`
  - `/Users/apple/Downloads/voice-clone-samples/voice-mau-2-hook-nhan-nha.m4a`
  - `/Users/apple/Downloads/voice-clone-samples/voice-mau-3-phan-tich-cham.m4a`

## Cach chay

1. Lay API key trong ElevenLabs.

2. Export API key trong terminal:

```sh
export ELEVENLABS_API_KEY="your_api_key_here"
```

3. Clone giong va tao voiceover:

```sh
node video-work/reel-01/scripts/elevenlabs-voiceover.mjs
```

Lenh nay se tao:

- `video-work/reel-01/output/elevenlabs-voice-id.txt`
- `video-work/reel-01/output/voice.mp3`

4. Dung video Reel:

```sh
node video-work/reel-01/scripts/render-reel.mjs
```

Output:

- `video-work/reel-01/output/reel-01-draft.mp4`
- `video-work/reel-01/output/reel-01-subtitles.srt`

## Luu y

- Thu muc nay nam ngoai `public`, nen video nhap khong bi public len website khi deploy.
- Neu da co voice clone tren ElevenLabs, co the dung lai bang:

```sh
export ELEVENLABS_VOICE_ID="your_voice_id_here"
node video-work/reel-01/scripts/elevenlabs-voiceover.mjs
```
