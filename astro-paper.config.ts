import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://generalawen.github.io/density-doppler/",
    title: "epoch's Tech Life",
    description: "记录技术探索与生活思考的个人博客",
    author: "epoch",
    profile: "https://generalawen.github.io/density-doppler",
    ogImage: "default-og.svg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/generalawen" },
    { name: "mail", url: "mailto:qq2335768771@gmail.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "mail",     url: "mailto:?subject=%E6%9F%A5%E7%9C%8B%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0&body=" },
  ],
});