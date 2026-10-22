import { renderOgImage } from "@/lib/og";
import { ogImages } from "@/config";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ogImages).map((name) => ({ name: `${name}.png` }));
}

export async function GET(_request, { params }) {
  const { name } = await params;
  const { alt, ...options } = ogImages[name.replace(/\.png$/, "")];
  return renderOgImage(options);
}
