import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
// 图片压缩
import viteImagemin from 'vite-plugin-imagemin';
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// https://vitejs.dev/config/
export default ({
  mode
}) => {
  const envFiles = [
    /** mode file */
    `.env.${mode}`
  ]

  for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
      process.env[k] = envConfig[k]
    }
  }

  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, "src/components/"),
        assets: path.resolve(__dirname, "src/assets/"),
        services: path.resolve(__dirname, "src/services/"),
        utils: path.resolve(__dirname, "src/utils/"),
        views: path.resolve(__dirname, "src/views/"),
        api: path.resolve(__dirname, "src/services/api/"),
        request: path.resolve(__dirname, "src/utils/request/"),
        router: path.resolve(__dirname, "src/router/"),
        directives: path.resolve(__dirname, "src/directives/")
      }
    },
    base: process.env.PUBLIC_PATH,
    plugins: [
      vue(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      })
    ]
  })
}
