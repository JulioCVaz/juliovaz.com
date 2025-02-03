import type { Config } from "tailwindcss";
import sharedConfig from "@westeros/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx", "./src/content/**/*.{md,mdx}"],
  presets: [sharedConfig],
};

export default config;
