import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import GithubIcon from '@/components/ui/icons/github.astro'
import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";

// This should be passed from your Astro components
export function getConstants(currentPath: string) {
  const lang = currentPath.startsWith("/en") ? "en" : "pt";
  const t = lang === "en" ? en : pt;

  const NAV_LINKS = [
    {
      label: t.nav.home,
      href: lang === "en" ? "/en/" : "/",
    },
    {
      label: t.nav.articles,
      href: lang === "en" ? "/en/articles" : "/articles",
    },
    {
      label: t.nav.projects,
      href: lang === "en" ? "/en/projects" : "/projects",
    },
  ] as const;

  const SOCIAL_LINKS = [
    {
      name: 'Github',
      icon: GithubIcon,
      url: "https://github.com/lumahloi",
    },
    {
      name: 'Linkedin',
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/lumah-pereira/",
    },
  ];

  return { NAV_LINKS, SOCIAL_LINKS };
}