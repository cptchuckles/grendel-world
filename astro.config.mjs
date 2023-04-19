import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: "https://grendel.world",
  output: "server",
  adapter: deno(),
  markdown: {
    drafts: true,
    syntaxHighlighting: "shiki",
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },
});
