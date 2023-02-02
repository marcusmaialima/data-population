/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react-swc"
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {},
  },
})
