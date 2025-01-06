import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
    en: () => import("../dictionaries/en.json").then((module) => module.default),
    pt: () => import("../dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return locale === 'pt' ? dictionaries.pt() : dictionaries.en()
};