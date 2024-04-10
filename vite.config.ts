import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@helpers", replacement: "/src/helpers/" },
      { find: "@store", replacement: "/src/zustandStore/" },
      // { find: "", replacement: "" },
    ],
  },
});
