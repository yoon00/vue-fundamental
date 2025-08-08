import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vueDevTools(), vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/components": resolve(__dirname, "src/components"),
    },
  },
});
