export const site = {
  name: "Nazhi Velvetfield",
  title: "雫之绒野 | Nazhi Velvetfield",
  description: "雫之绒野（Nazhi Velvetfield）的个人站点，记录技术开发、二次元相关内容与日常随笔。",
  author: "雫之绒野 / Nazhi Velvetfield",
  keywords: ["雫之绒野", "Nazhi Velvetfield", "nrongye", "个人博客", "二次元", "技术开发", "Astro"],
  nav: [
    { href: "/", label: "HOME", icon: "tabler:home-heart", hint: "front page" },
    { href: "/blog/", label: "BLOG", icon: "tabler:book-2", hint: "notes" },
    { href: "/games/", label: "GAME", icon: "tabler:device-gamepad-2", hint: "playroom" },
    { href: "/projects/", label: "WORKS", icon: "tabler:code", hint: "projects" },
    { href: "/about/", label: "ME", icon: "tabler:user-heart", hint: "profile" }
  ]
};

export const categoryLabel: Record<string, string> = {
  tech: "技术开发",
  anime: "二次元",
  life: "日常记录"
};
