import { defineConfig} from "vite";
import {VitePWA} from "vite-plugin-pwa";


export default defineConfig({
    base: "/template-pointjs/",
    plugins: [
        VitePWA({
            registerType: 'prompt',
            manifest: {
                short_name: "Template PointJS",
                name: "Template PointJS",
                icons: [],
                start_url: ".",
                display: "standalone",
                theme_color: "#282a36",
                background_color: "#282a36"
            }
        })
    ]
})