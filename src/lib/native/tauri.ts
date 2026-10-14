export async function isNative(): Promise<boolean> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<boolean>("is_native");
  } catch {
    return false;
  }
}

export async function listAudioDevices(): Promise<string[]> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<string[]>("list_audio_devices");
  } catch {
    return [];
  }
}

export async function openAudio(device?: string): Promise<number> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<number>("open_audio", { device });
  } catch {
    return -1;
  }
}

export async function audioLatency(): Promise<number> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<number>("audio_latency");
  } catch {
    return -1;
  }
}

export async function scanVst(path: string): Promise<string[]> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<string[]>("scan_vst", { path });
  } catch {
    return [];
  }
}

export async function loadVst(path: string): Promise<string> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<string>("load_vst", { path });
  } catch {
    return "";
  }
}

export async function setBufferSize(size: number): Promise<number> {
  try {
    const { invoke } = await import("@tauri-apps/api/core");
    return await invoke<number>("set_buffer_size", { size });
  } catch {
    return -1;
  }
}
