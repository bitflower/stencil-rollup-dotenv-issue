import { Config } from "@stencil/core";
import dotenvPlugin from "rollup-plugin-dotenv";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/"
    }
  ],
  plugins: [
    dotenvPlugin()
    //   {
    //   cwd: "../../" // set the working directory to the root of the project
    // }
  ]
};
