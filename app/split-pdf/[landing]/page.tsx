import { createLandingRoute } from "@/lib/landing/route";

export const dynamicParams = false;

const route = createLandingRoute("split-pdf");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
