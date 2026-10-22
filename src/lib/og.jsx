import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const MIME = { ".svg": "image/svg+xml", ".png": "image/png" };

const read = (file) => readFile(path.join(process.cwd(), file));

const toDataUri = async (file, transform) => {
  let data = await read(file);
  if (transform) data = Buffer.from(transform(data.toString("utf8")));
  return `data:${MIME[path.extname(file)]};base64,${data.toString("base64")}`;
};

export async function renderOgImage({
  title,
  subtitle,
  accent = "#00B6CC",
  partnerLogo,
  image,
}) {
  const [fontRegular, fontBold, argoLogo, partnerLogoSrc, imageSrc] = await Promise.all([
    read("src/assets/fonts/Oswald-400.ttf"),
    read("src/assets/fonts/Oswald-700.ttf"),
    toDataUri("public/logo.svg", (svg) =>
      svg.replace(/fill="currentColor\s*"/g, 'fill="#ffffff"'),
    ),
    partnerLogo && toDataUri(partnerLogo.src),
    image && toDataUri(image.src),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#000000",
          fontFamily: "Oswald",
          position: "relative",
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            width={image.width}
            height={image.height}
            style={{
              position: "absolute",
              right: image.right ?? 40,
              top: image.top ?? (630 - image.height) / 2,
            }}
          />
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={argoLogo} alt="" width={280} height={38} />
          {partnerLogoSrc && (
            <>
              <svg width="24" height="24" viewBox="0 0 24 24" style={{ margin: "0 32px" }}>
                <path d="M3 3L21 21M21 3L3 21" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <img
                src={partnerLogoSrc}
                alt=""
                width={partnerLogo.width}
                height={partnerLogo.height}
              />
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: imageSrc ? 560 : 1040,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ fontWeight: 400, fontSize: 30, color: accent }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Oswald", data: fontRegular, weight: 400, style: "normal" },
        { name: "Oswald", data: fontBold, weight: 700, style: "normal" },
      ],
    },
  );
}
