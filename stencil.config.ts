import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-starter-project-name",
  taskQueue: "async",
  hydratedFlag: {
    selector: "attribute",
    name: "calcite-hydrated",
  },
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
