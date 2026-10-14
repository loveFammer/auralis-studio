# Auralis — Mix & Master

Browser-based and Tauri native DAW for mixing and mastering.

## Features

- Multi-track arrangement with waveform editing
- Mixer console with EQ, compressor, sends
- Demucs ONNX instrument separation (WebGPU/WASM)
- Real-time meters (LUFS, True Peak, goniometer)
- Drum machine, chords, visualizer
- Tauri native audio bridge (cpal) and VST scan/load

## Run (web)

```bash
npm install
npm run dev
```

## Build native

```bash
npm run tauri:dev
npm run tauri:build
```
