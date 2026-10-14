// Gera um vídeo com o Seedance 2.5 (Higgsfield) e imprime a URL.
// Credenciais: HF_CREDENTIALS="key-id:key-secret" em .env.local (nunca no código nem no Git).
// Rodar: npm run seedance
import { config as loadEnv } from "dotenv";
import { config, higgsfield } from "@higgsfield/client/v2";

loadEnv({ path: ".env.local", quiet: true });

if (!process.env.HF_CREDENTIALS) {
  console.error("HF_CREDENTIALS não encontrado em .env.local (formato key-id:key-secret).");
  process.exit(1);
}

config({ credentials: process.env.HF_CREDENTIALS });

try {
  const result = await higgsfield.subscribe("bytedance/seedance-2.5/text-to-video", {
    input: {
      prompt: "A cinematic scene at sunset",
      duration: 5,
      resolution: "720p",
      aspect_ratio: "16:9",
    },
    withPolling: true,
  });

  const url = result.video?.url;
  if (result.status === "completed" && url) {
    console.log(`Request ${result.request_id} concluída.`);
    console.log(url);
  } else {
    // failed, nsfw (moderado), canceled ou concluído sem arquivo: não é sucesso.
    const motivo =
      result.status === "nsfw" ? "bloqueado pela moderação (nsfw)" :
      result.status === "completed" ? "concluído sem URL de vídeo" :
      `status ${result.status}`;
    console.error(`Request ${result.request_id} não gerou vídeo: ${motivo}.`);
    process.exitCode = 1;
  }
} catch (err) {
  // Credenciais inválidas, sem créditos, entrada inválida, timeout do polling etc.
  const e = err as { name?: string; message?: string };
  console.error(`Falha na geração: ${e.name ?? "Error"}: ${e.message ?? String(err)}`);
  process.exitCode = 1;
}
