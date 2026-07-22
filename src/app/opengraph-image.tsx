import { ImageResponse } from "next/og";

export const alt =
  "Agamana Projects — You have the land. We'll help you build the project.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #04303b 0%, #04262f 100%)",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 999,
              background: "#e7f352",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              color: "#04262f",
            }}
          >
            A
          </div>
          <div style={{ fontSize: 30, letterSpacing: 1 }}>Agamana Projects</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e7f352",
              marginBottom: 24,
              fontFamily: "sans-serif",
            }}
          >
            Your Trusted Project Partner
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 960 }}>
            You Have the Land. We&apos;ll Help You Build the Project.
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#b8c4bf",
            fontFamily: "sans-serif",
          }}
        >
          One partner for every step — Karnataka
        </div>
      </div>
    ),
    { ...size },
  );
}
