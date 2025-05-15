import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";

export function getConstants(currentPath: string) {
  const lang = currentPath.startsWith("/en") ? "en" : "pt";
  const t = lang === "en" ? en : pt;

  const PROFILE_INFO = {
    role: t.profile.role,
    logo: t.profile.logo,
    slogan: t.profile.slogan,
    displayName: t.profile.displayName,
    email: t.profile.email,
    about: t.profile.about,
    working: t.profile.working,
    linkedin: t.profile.linkedin,
    github: t.profile.github,
  } as const;

  return { PROFILE_INFO };
}
