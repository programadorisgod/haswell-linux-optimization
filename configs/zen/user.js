// =============================================================================
// Optimizaciones de Alto Rendimiento para Zen Browser (Intel Haswell i5-4590S / HD 4600)
// =============================================================================

// 1. Aceleración de Video por Hardware (VA-API en Intel HD 4600)
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.rdd-ffmpeg.enabled", true);
user_pref("gfx.webrender.all", true);

// 2. Google Meet, Discord y WebRTC: Forzar H.264 por Hardware (desactivar VP9 en llamadas)
// Mantiene las videollamadas fluidas en el chip QuickSync H.264 sin quemar CPU
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.navigator.mediadatadecoder_h264_enabled", true);
user_pref("media.navigator.mediadatadecoder_vpx_enabled", false);
user_pref("media.peerconnection.video.vp9_enabled", false);
user_pref("media.av1.enabled", false);

// 3. DRM y Streaming (Amazon Prime Video, Netflix, Spotify Web)
// Activa el módulo Widevine CDM y permite MediaSource para reproducir contenido protegido
user_pref("media.eme.enabled", true);
user_pref("media.gmp-widevinecdm.enabled", true);
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.mediasource.vp9.enabled", true);

// 4. Juegos con WebGPU y WebGL en Intel Haswell (saltar lista de bloqueo)
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.webgpu.ignore-blocklist", true);
user_pref("webgl.force-enabled", true);

// 5. Optimización de Pestañas, CPU (4 hilos) y Memoria (8 GB RAM)
user_pref("dom.ipc.processCount", 4);
user_pref("dom.ipc.processCount.webIsolated", 2);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);

// Mantener accesible el motor de UI para que los popups de permisos (micrófono, almacenamiento, etc.) reciban clics
user_pref("accessibility.force_disabled", 0);
