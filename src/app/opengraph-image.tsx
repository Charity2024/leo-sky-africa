import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Leo Sky Africa — Africa's Gateway to Space";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #030303 0%, #390059 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "2px solid #E089FD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#FDC005",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFF0FA",
            letterSpacing: "0.08em",
            marginBottom: 16,
          }}
        >
          LEO SKY AFRICA
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#E089FD",
            letterSpacing: "0.15em",
          }}
        >
          AFRICA&apos;S GATEWAY TO SPACE
        </div>
      </div>
    ),
    { ...size },
  );
}
