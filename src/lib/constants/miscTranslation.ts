import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";

export function getConstants(currentPath: string) {
  const lang = currentPath.startsWith("/en") ? "en" : "pt";
  const t = lang === "en" ? en : pt;

  const SHOW_BUTTON = {
    showMore: t.misc.showMore,
    showLess: t.misc.showLess,
  }

  const THISPG_TEXT = t.misc.thisPage;
  
  return { SHOW_BUTTON, THISPG_TEXT };
}