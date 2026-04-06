"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { YM_ID } from "@/config";

export const Metrika = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const url = pathname + (query ? `?${query}` : "");

    if (typeof window !== "undefined" && window.ym) {
      window.ym(YM_ID, "hit", url);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)
            };
            m[i].l=1*new Date();
            k=e.createElement(t),
            a=e.getElementsByTagName(t)[0];
            k.async=1;
            k.src=r;
            a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${YM_ID}, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        `}
      </Script>

      <noscript>
        <div>
          <Image src={"https://mc.yandex.ru/watch/" + YM_ID} width={0} height={0} style={{ position: "absolute", left: "-9999px" }}
            alt="" />
        </div>
      </noscript>
    </>
  );
};
