import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";

const {
  GISCUS_REPO,
  GISCUS_REPO_ID,
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_MAPPING,
  GISCUS_STRICT,
  GISCUS_REACTIONS_ENABLED,
  GISCUS_EMIT_METADATA,
  GISCUS_LANG,
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
  site: "https://spectre.lou.gg",
  output: "static",
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: "Kaiman the Hybrid!",
      openGraph: {
        home: {
          title: "crocowolf cove",
          description:
            "The superior species for anthropomorphic animals everywhere.",
        },
        blog: {
          title: "Blog",
          description: "Posts and ramblings from the animal themselves.",
        },
        projects: {
          title: "Projects",
        },
        friends: {
          title: "Friends",
        },
        art: {
          title: "Art",
        },
      },
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});

export default config;
