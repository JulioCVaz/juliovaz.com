import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from './i18n-config'

const i18nConfig = {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
}

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-expect-error locales are readonly
    const locales: string[] = i18n.locales;

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)
    const locale = match(languages, locales, i18n.defaultLocale)

    return locale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // // If you have one
    // if (
    //   [
    //     '/manifest.json',
    //     '/favicon.ico',
    //     // Your other files in `public`
    //   ].includes(pathname)
    // )
    //   return
    const pathnameIsMissingLocale = i18nConfig.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};