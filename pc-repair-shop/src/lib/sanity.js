import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});
