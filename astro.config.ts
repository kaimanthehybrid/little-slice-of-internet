import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
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
          title: "-- the crocowolf cove",
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
  adapter: netlify(),
});

export default config;
