import type { LandingPage } from "../../types";
import { splitPdfAccessPages } from "./access";
import { splitPdfDocumentPages } from "./documents";
import { splitPdfWorkflowPages } from "./workflows";

export const splitPdfPages: LandingPage[] = [
  ...splitPdfAccessPages,
  ...splitPdfDocumentPages,
  ...splitPdfWorkflowPages,
];
