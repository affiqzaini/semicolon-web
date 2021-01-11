import { NuxtConfig } from "@nuxt/types";

export const build: NuxtConfig["build"] = {
  loaders: {
    scss: {
      prependData: `$theme-primary: ${process.env.THEME_PRIMARY}; $theme-secondary: ${process.env.THEME_SECONDARY}; $theme-accent: ${process.env.THEME_ACCENT}; $theme-orange: ${process.env.THEME_ORANGE};`
    }
  },

  extend(config: any, ctx: any) {
    config.node = {
      fs: "empty"
    };
  }
};
