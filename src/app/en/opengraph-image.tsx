import { ImageResponse } from "next/og";

export const alt = "Caléo Meneses — Machine Learning & Agentic AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function EnglishOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 82% 18%, #334155 0%, #111827 35%, #05070b 75%)",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px 88px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1040px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#94a3b8",
              display: "flex",
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Machine Learning · Agentic AI · Cloud
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -3,
              marginTop: 38,
            }}
          >
            Caléo Meneses
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 38,
              lineHeight: 1.3,
              marginTop: 22,
            }}
          >
            Useful, secure AI systems built for production.
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 27,
              marginTop: 62,
            }}
          >
            <span style={{ color: "#22d3ee", marginRight: 14 }}>●</span>
            caleosantos.com/en
          </div>
        </div>
      </div>
    ),
    size,
  );
}
