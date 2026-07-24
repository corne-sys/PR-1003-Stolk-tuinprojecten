import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F3327",
        }}
      >
        <svg width="110" height="110" viewBox="0 0 30 30" fill="none">
          <path
            d="M4 24C10 24 11 15 15 15C19 15 20 6 26 6"
            stroke="#95A278"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15 15C13.5 12 13.5 9 15 6M15 15C16.5 12 16.5 9 15 6M15 15C13.2 17.6 12.7 20.4 13 23M15 15C16.8 17.6 17.3 20.4 17 23"
            stroke="#95A278"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
