import { NuxtConfig } from "@nuxt/types";

require("dotenv").config();

export const head: NuxtConfig["head"] = {
  titleTemplate: (titleChunk: String) => {
    return titleChunk
      ? `${titleChunk} - ${process.env.APP_NAME}`
      : process.env.APP_NAME || "";
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: process.env.APP_META_DESCRIPTION || ""
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo/logo-favicon.svg"
    }
  ]
};
