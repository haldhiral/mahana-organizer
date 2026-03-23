import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export function buildBrandIconResponse(size: number) {
  const cardSize = Math.round(size * 0.72);
  const accentSize = Math.round(size * 0.16);
  const borderRadius = Math.round(size * 0.2);
  const borderWidth = Math.max(3, Math.round(size * 0.015));
  const fontSize = Math.round(size * 0.42);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 24% 18%, rgba(201, 169, 110, 0.2) 0, transparent 32%), linear-gradient(180deg, ${siteConfig.icon.background} 0%, #f5ede4 100%)`,
        }}
      >
        <div
          style={{
            position: "relative",
            width: cardSize,
            height: cardSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius,
            border: `${borderWidth}px solid ${siteConfig.icon.border}`,
            background: siteConfig.icon.surface,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.68), 0 24px 48px rgba(28,42,58,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: Math.round(cardSize * 0.14),
              right: Math.round(cardSize * 0.14),
              width: accentSize,
              height: accentSize,
              borderRadius: 9999,
              background: siteConfig.icon.accent,
              opacity: 0.34,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: siteConfig.icon.foreground,
              fontSize,
              fontWeight: 700,
              letterSpacing: "-0.08em",
              lineHeight: 1,
              fontFamily: "Georgia, Times New Roman, serif",
              transform: "translateY(-2%)",
            }}
          >
            M
          </div>
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
    },
  );
}
