import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #fffaf4 0%, #f4e8da 48%, #d8b98d 100%)",
          padding: "56px 60px",
          color: "#2b211d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 999,
                border: "3px solid rgba(74,53,36,0.12)",
                background: "rgba(255,255,255,0.72)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                fontWeight: 700,
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 34,
                  letterSpacing: "0.35em",
                  fontWeight: 700,
                }}
              >
                MAHANA
              </span>
              <span
                style={{
                  fontSize: 18,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  opacity: 0.72,
                }}
              >
                Organizer
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.72)",
              fontSize: 22,
            }}
          >
            Jakarta / Bogor / Depok / Bekasi / Tangerang
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.04,
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            Wedding organizer elegan untuk perayaan yang hangat dan tertata.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 860,
              fontSize: 30,
              lineHeight: 1.45,
              opacity: 0.8,
            }}
          >
            Premium wedding planning, calm coordination, and refined guest experience.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
