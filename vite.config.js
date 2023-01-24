import { defineConfig} from "vite";
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/template-pointjs/",
    plugins: [
        VitePWA({
            registerType: 'prompt',
            manifest: {
                short_name: "Template PointJS",
                name: "Template PointJS",
                icons: [
                    {
                        src: "logo32.png",
                        type: "image/png",
                        sizes: "32x32"
                    },
                    {
                        src: "logo64.png",
                        type: "image/png",
                        sizes: "64x64"
                    },
                    {
                        src: "logo128.png",
                        type: "image/png",
                        sizes: "128x128"
                    },
                    {
                        src: "logo256.png",
                        type: "image/png",
                        sizes: "256x256"
                    },
                ],
                start_url: ".",
                display: "standalone",
                theme_color: "#000000",
                background_color: "#ffffff"
            }
        })
    ]
})