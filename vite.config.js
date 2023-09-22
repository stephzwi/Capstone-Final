import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADD THIS PART BELOW *********** vvvvv
  server: {
    watch: {
      usePolling: true,
    },
  },
  // END OF PART TO ADD *********** ^^^^^^^^
});
