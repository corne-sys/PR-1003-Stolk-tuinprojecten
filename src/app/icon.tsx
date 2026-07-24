import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
          <path
            d="M4 24C10 24 11 15 15 15C19 15 20 6 26 6"
            stroke="#95A278"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
