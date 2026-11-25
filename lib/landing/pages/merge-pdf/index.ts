import type { LandingPage } from "../../types";
import { mergePdfAccessPages } from "./access";
import { mergePdfDocumentPages } from "./documents";
import { mergePdfWorkflowPages } from "./workflows";

export const mergePdfPages: LandingPage[] = [
  ...mergePdfAccessPages,
  ...mergePdfDocumentPages,
  ...mergePdfWorkflowPages,
];
