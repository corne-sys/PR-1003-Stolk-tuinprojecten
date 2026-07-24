import { ImageResponse } from "next/og";
import { company } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#1F3327",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 30 30" fill="none">
          <path
            d="M4 24C10 24 11 15 15 15C19 15 20 6 26 6"
            stroke="#95A278"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ marginTop: 40, fontSize: 72, color: "#F7F2E9", fontWeight: 500 }}>
          {company.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 32, color: "#95A278" }}>
          Tuinontwerp &amp; tuinaanleg — Wijngaarden en omgeving
        </div>
      </div>
    ),
    { ...size }
  );
}
