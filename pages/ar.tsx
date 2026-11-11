import ArabicShell from "../components/ArabicShell";
import SitePage from "../components/SitePage";
import { getFontPreloads } from "../lib/arabicFont";

export default function ArabicHome({ fontPreloads }: { fontPreloads: string[] }) {
  return <ArabicShell fontPreloads={fontPreloads}><SitePage locale="ar" /></ArabicShell>;
}

export function getStaticProps() {
  return { props: { fontPreloads: getFontPreloads("/ar") } };
}
