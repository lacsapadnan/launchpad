export const siteConfig = {
  name: "LaunchPad SaaS",
  description: "Production-ready B2B SaaS Boilerplate for Indonesia",
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: "https://launchpad.com/og.jpg",
  links: {
    twitter: "https://twitter.com/launchpad",
    github: "https://github.com/launchpad/boilerplate",
  },
}

export type SiteConfig = typeof siteConfig
