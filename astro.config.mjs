import { defineConfig } from "astro/config";
import { execFileSync } from "node:child_process";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: "https://grendel.world",
  output: "server",
  adapter: deno(),
  server: {
    host: (function () {
      const ipRoute = execFileSync("/usr/bin/ip", [
        "--json",
        "route",
      ]).toString();

      const ipAddress = JSON.parse(ipRoute)
        .filter((route) => route.dst === "default")
        .map((route) => route.prefsrc);

      return ipAddress[0] || "localhost";
    })(),
  },
  markdown: {
    drafts: true,
    syntaxHighlighting: "shiki",
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },
});
