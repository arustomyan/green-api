import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      shared: "/src/shared",
      features: "/src/features",
      entities: "/src/entities",
      widget: "/src/widget",
      app: "/src/app",
    },
  },
});
