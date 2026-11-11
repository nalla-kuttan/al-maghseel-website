import { DocumentProps, Html, Head, Main, NextScript } from "next/document";

export default function Document(props: DocumentProps) {
  const page = props.__NEXT_DATA__.page;
  const isArabic = page === "/ar" || page.startsWith("/ar/");
  return (
    <Html lang={isArabic ? "ar-AE" : "en-AE"} dir={isArabic ? "rtl" : "ltr"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
