import Script from "next/script";
import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/site";

/**
 * The only place the AdSense script is added (used once, in the root layout).
 * Renders nothing unless ADSENSE_ENABLED is true in lib/site.ts.
 */
export default function AdSenseScript() {
  if (!ADSENSE_ENABLED) return null;

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
