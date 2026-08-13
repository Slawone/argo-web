import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { ImageResponse } from "next/og.js";

const h = React.createElement;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const HEADLINE = "Системы хранения данных для импортозамещения";
const SUBLINE = "Реестр Минцифры и Минпромторга";

async function loadGoogleFont(family, weight, text) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();

  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Couldn't find font data for ${family} ${weight}`);

  const res = await fetch(match[1]);
  return res.arrayBuffer();
}


async function main() {
  const text = `ARGO.TECH ${HEADLINE} ${SUBLINE}`;

  const [fontRegular, fontBold] = await Promise.all([
    loadGoogleFont("Oswald", 400, text),
    loadGoogleFont("Oswald", 700, text),
  ]);

  const rawLogo = await readFile(path.join(ROOT, "public/logo.svg"), "utf8");
  const whiteLogo = rawLogo.replace(/fill="currentColor\s*"/g, 'fill="#ffffff"');
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(whiteLogo).toString("base64")}`;

  const element = h(
    "div",
    {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#000000",
      },
    },
    h("img", { src: logoDataUri, width: 280, height: 38 }),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "24px" } },
      h(
        "div",
        {
          style: {
            fontFamily: "Oswald",
            fontWeight: 700,
            fontSize: 56,
            color: "#ffffff",
            lineHeight: 1.15,
          },
        },
        HEADLINE,
      ),
      h(
        "div",
        {
          style: {
            fontFamily: "Oswald",
            fontWeight: 400,
            fontSize: 30,
            color: "#00b6cc",
          },
        },
        SUBLINE,
      ),
    ),
  );

  const image = new ImageResponse(element, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Oswald", data: fontRegular, weight: 400, style: "normal" },
      { name: "Oswald", data: fontBold, weight: 700, style: "normal" },
    ],
  });

  const buffer = Buffer.from(await image.arrayBuffer());
  await writeFile(path.join(ROOT, "public/og-image.png"), buffer);
  console.log("Saved public/og-image.png");
}

main();