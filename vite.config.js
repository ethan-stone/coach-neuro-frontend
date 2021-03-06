import vue from "@vitejs/plugin-vue";
import * as path from "path";
const fs = require("fs");

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync("mkcert_localhost/key.pem"),
      cert: fs.readFileSync("mkcert_localhost/cert.pem")
    }
  }
};
