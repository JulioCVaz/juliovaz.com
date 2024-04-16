'use server'

import type { Locale } from "../lib/i18n-config";
import { getDictionary } from '../lib/get-dictionary'

export type Dictionary = Awaited<Promise<PromiseLike<ReturnType<typeof getDictionary>>>>

export const getClientDictionary = (lang: Locale) => getDictionary(lang)