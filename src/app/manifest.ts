import type { MetadataRoute } from "next";
import { company } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "Stolk",
    description: "Tuinontwerp en complete tuinaanleg in Wijngaarden en omgeving.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F2E9",
    theme_color: "#1F3327",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
