import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YRT by Novara π | Your Revenue Department";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "80px",
        }}
      >
        {/* Copper top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#B07040",
          }}
        />

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#B07040",
            marginBottom: "24px",
          }}
        >
          Aesthetics · IVF · Dental · Private Clinics
        </p>

        {/* Brand name */}
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "80px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          YRT by Novara{" "}
          <span style={{ color: "#B07040" }}>π</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "24px",
            color: "#999999",
            marginTop: "8px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Your Revenue Department
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "56px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "40px",
          }}
        >
          {[
            { value: "8+", label: "Years experience" },
            { value: "400+", label: "Campaigns launched" },
            { value: "£2M+", label: "Ad spend managed" },
            { value: "4×", label: "Avg lead growth" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span
                style={{
                  fontFamily: "serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#B07040",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  color: "#666666",
                  marginTop: "6px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <p
          style={{
            position: "absolute",
            bottom: "36px",
            right: "80px",
            fontFamily: "sans-serif",
            fontSize: "14px",
            color: "#444444",
            letterSpacing: "0.1em",
          }}
        >
          yourevenueteam.com
        </p>
      </div>
    ),
    { ...size }
  );
}
