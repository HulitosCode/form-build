import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  ignorePatterns: ["src/lib/generated/**"],
};

// Exporta a configuração com output em modo standalone
// Isso permite que o Next.js gere uma build independente (ideal para Docker)
// O modo 'standalone' cria uma pasta `.next/standalone` com tudo que o app precisa,
// reduzindo o tamanho da imagem final e facilitando o deploy em ambientes isolados.
module.exports = {
  output: 'standalone',
};

export default nextConfig;
