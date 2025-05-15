import type { Experience } from "../types";
import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";

export function getConstants(currentPath: string) {
  const lang = currentPath.startsWith("/en") ? "en" : "pt";
  const t = lang === "en" ? en : pt;

  const EXPERIENCES = [
      {
    company: t.experiences[0].company,
    positions: [
      {
        title: t.experiences[0].positions[0].title,
        year: t.experiences[0].positions[0].year,
        description: t.experiences[0].positions[0].description,
        skills: t.experiences[0].positions[0].skills,
      },
    ],
  },
  {
    company: t.experiences[1].company,
    positions: [
      {
        title: t.experiences[1].positions[0].title,
        year: t.experiences[1].positions[0].year,
        description: t.experiences[1].positions[0].description,
        skills: t.experiences[1].positions[0].skills
      },
      {
        title: t.experiences[1].positions[1].title,
        year: t.experiences[1].positions[1].year,
        description: t.experiences[1].positions[1].description,
        skills: t.experiences[1].positions[1].skills
      },
      {
        title: t.experiences[1].positions[2].title,
        year: t.experiences[1].positions[2].year,
        description: t.experiences[1].positions[2].description,
        skills: t.experiences[1].positions[2].skills
      },
      {
        title: t.experiences[1].positions[3].title,
        year: t.experiences[1].positions[3].year,
        description: t.experiences[1].positions[3].description,
        skills: t.experiences[1].positions[3].skills
      },
      {
        title: t.experiences[1].positions[4].title,
        year: t.experiences[1].positions[4].year,
        description: t.experiences[1].positions[4].description,
        skills: t.experiences[1].positions[4].skills
      },
      {
        title: t.experiences[1].positions[5].title,
        year: t.experiences[1].positions[5].year,
        description: t.experiences[1].positions[5].description,
        skills: t.experiences[1].positions[5].skills
      },
    ],
  },
  ]
  return { EXPERIENCES };
}