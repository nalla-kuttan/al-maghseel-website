import React from "react";
import { getCopy, Locale } from "../lib/i18n";
import { absoluteUrl, SITE_URL } from "../lib/site";

const OG_IMAGE = `${SITE_URL}/hvac-hero-rooftop-service.jpg`;

/** JSON-LD structured data. "<" is escaped so copy can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

type MetaProps = { locale: Locale; title: string; description: string; ogTitle?: string; ogDescription?: string; path: string; enPath: string; arPath: string };

/** Head tags shared by every indexable bilingual page. Returns an array so it can sit directly inside next/head. */
export function pageMeta({ locale, title, description, ogTitle = title, ogDescription = description, path, enPath, arPath }: MetaProps) {
  const t = getCopy(locale);
  const isAr = locale === "ar";
  const url = absoluteUrl(path);
  return [
    <title key="title">{title}</title>,
    <meta key="description" name="description" content={description} />,
    <link key="canonical" rel="canonical" href={url} />,
    <meta key="robots" name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />,
    <meta key="og:type" property="og:type" content="website" />,
    <meta key="og:site_name" property="og:site_name" content={t.brand.name} />,
    <meta key="og:locale" property="og:locale" content={isAr ? "ar_AE" : "en_AE"} />,
    <meta key="og:locale:alternate" property="og:locale:alternate" content={isAr ? "en_AE" : "ar_AE"} />,
    <meta key="og:title" property="og:title" content={ogTitle} />,
    <meta key="og:description" property="og:description" content={ogDescription} />,
    <meta key="og:url" property="og:url" content={url} />,
    <meta key="og:image" property="og:image" content={OG_IMAGE} />,
    <meta key="og:image:width" property="og:image:width" content="1600" />,
    <meta key="og:image:height" property="og:image:height" content="1067" />,
    <meta key="og:image:alt" property="og:image:alt" content={t.seo.imageAlt} />,
    <meta key="twitter:card" name="twitter:card" content="summary_large_image" />,
    <meta key="twitter:title" name="twitter:title" content={ogTitle} />,
    <meta key="twitter:description" name="twitter:description" content={ogDescription} />,
    <meta key="twitter:image" name="twitter:image" content={OG_IMAGE} />,
    <meta key="twitter:image:alt" name="twitter:image:alt" content={t.seo.imageAlt} />,
    <link key="hreflang-en" rel="alternate" hrefLang="en-ae" href={absoluteUrl(enPath)} />,
    <link key="hreflang-ar" rel="alternate" hrefLang="ar-ae" href={absoluteUrl(arPath)} />,
    <link key="hreflang-default" rel="alternate" hrefLang="x-default" href={absoluteUrl(enPath)} />,
    <link key="preconnect-wa" rel="preconnect" href="https://wa.me" />,
    <link key="dns-wa" rel="dns-prefetch" href="https://wa.me" />,
  ];
}
