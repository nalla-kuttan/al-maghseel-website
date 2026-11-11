import routes from "./routes.json";
import type { Locale } from "./i18n";

export const SITE_URL = "https://www.almaghseel.com";
export const SERVICE_SLUGS = routes.services;

export const homePath = (locale: Locale) => (locale === "ar" ? "/ar/" : "/");
export const servicePath = (locale: Locale, slug: string) => `${homePath(locale)}${slug}/`;
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;
