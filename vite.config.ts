import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import { splitVendorChunkPlugin } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), splitVendorChunkPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
})
