import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  vite: {
    optimizeDeps: {
      noDiscovery: true,
      exclude: ["aria-query", "axobject-query"],
    },
    server: {
      fs: {
        allow: ["."],
      },
    },
  },
});
