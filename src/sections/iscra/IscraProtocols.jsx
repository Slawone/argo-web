"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

const STACK_W = 466;
const STACK_H = 439;

const boxes = [
  {
    id: "consumer",
    group: "multi",
    kind: "consumer",
    x: 0,
    y: 0,
    w: 466,
    h: 69,
  },
  { id: "fc", group: "block", kind: "plain", x: 0, y: 73, w: 100, h: 113 },
  { id: "ip-block", group: "block", kind: "ip", x: 120, y: 73, w: 99, h: 53 },
  { id: "iscsi", group: "block", kind: "ip", x: 120, y: 133, w: 99, h: 53 },
  { id: "scsi", group: "block", kind: "plain", x: 0, y: 191, w: 219, h: 174 },
  { id: "ip-nfs", group: "nfs", kind: "ip", x: 243, y: 73, w: 99, h: 53 },
  {
    id: "nfs",
    group: "nfs",
    kind: "file",
    x: 243,
    y: 133,
    w: 99,
    h: 232,
    href: "/storage/iscrastorage/nfs/",
  },
  { id: "ip-smb", group: "smb", kind: "ip", x: 366, y: 73, w: 100, h: 53 },
  { id: "smb", group: "smb", kind: "file", x: 366, y: 133, w: 100, h: 232 },
  { id: "zfs", group: "multi", kind: "plain", x: 0, y: 371, w: 466, h: 68 },
];

const cq = (px) => `${(px / STACK_W) * 100}cqw`;

const boxContent = {
  consumer: <span className="font-medium">Потребитель</span>,
  fc: <span className="font-medium">FC</span>,
  "ip-block": <span className="font-medium text-[#FF9000]">IP</span>,
  "ip-nfs": <span className="font-medium text-[#FF9000]">IP</span>,
  "ip-smb": <span className="font-medium text-[#FF9000]">IP</span>,
  iscsi: <span className="font-medium">iSCSI</span>,
  scsi: (
    <>
      <span className="font-medium">SCSI Target</span>
      <span className="font-light" style={{ fontSize: cq(18) }}>
        Framework ARGO
      </span>
    </>
  ),
  nfs: (
    <>
      <span className="font-medium leading-[1.18]">
        NFS
        <br />
        (v3/v4)
      </span>
      <span className="font-light leading-[1.83]" style={{ fontSize: cq(18) }}>
        Native
        <br />
        Kernel
      </span>
    </>
  ),
  smb: (
    <>
      <span className="font-medium">SMB</span>
      <span className="font-light leading-[1.83]" style={{ fontSize: cq(18) }}>
        Native
        <br />
        Kernel
      </span>
    </>
  ),
  zfs: <span className="font-light">Native ZFS</span>,
};

const baseKind = {
  consumer:
    "border-2 border-[#d9d9d9] dark:border-[#fffefe] shadow-[0_0_14px_3px_rgba(0,0,0,0.28)] dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.5),0_0_20px_5px_rgba(255,255,255,0.22)]",
  plain: "border-[1.5px] border-[#a1a1a1]",
  ip: "border-2 border-[#c4c4c4] dark:border-[#fffefe]",
  file: "border-[1.5px] border-[#FF9000]",
};

const activeKind =
  "border-2 border-[#FF9000] shadow-[0_0_8px_1px_rgba(255,144,0,0.45)] dark:shadow-[0_0_6px_2px_rgba(255,144,0,0.9),0_0_18px_6px_rgba(255,144,0,0.5),inset_0_0_10px_2px_rgba(255,144,0,0.4)]";

const icons = {
  multi: (
    <svg viewBox="0 0 27 30" fill="currentColor" className="w-6.75">
      <path d="M22.9997 9.50003C22.9997 7.02352 20.9762 5 18.4998 5L2.74999 5C2.55108 5 2.36032 5.07902 2.21967 5.21967C2.07902 5.36032 2 5.55109 2 5.75C2 5.94892 2.07902 6.13969 2.21967 6.28034C2.36032 6.42099 2.55108 6.50001 2.74999 6.50001L18.4998 6.50001C20.1655 6.50001 21.4997 7.83427 21.4997 9.50003V10.25C21.4997 11.9158 20.1655 13.2501 18.4998 13.2501L6.49994 13.2501C4.02347 13.2501 2 15.2736 2 17.7501V18.5001C2 20.9766 4.02347 23.0001 6.49994 23.0001L20.4392 23.0001L18.7195 24.7199C18.5789 24.8605 18.4999 25.0513 18.4999 25.2502C18.4999 25.449 18.5789 25.6398 18.7195 25.7804C18.8602 25.921 19.0509 26 19.2498 26C19.4486 26 19.6394 25.921 19.78 25.7804L22.78 22.7804C22.9152 22.6453 22.9938 22.4637 22.9997 22.2726C23.0026 22.1705 22.9846 22.0689 22.9468 21.9739C22.909 21.879 22.8522 21.7928 22.78 21.7206L19.78 18.7206C19.6394 18.58 19.4486 18.501 19.2498 18.501C19.0509 18.501 18.8602 18.58 18.7195 18.7206C18.5789 18.8613 18.4999 19.052 18.4999 19.2509C18.4999 19.4497 18.5789 19.6405 18.7195 19.7811L20.4392 21.5001L6.49994 21.5001C4.83421 21.5001 3.49998 20.1659 3.49998 18.5001V17.7501C3.49998 16.0851 4.83421 14.7501 6.49994 14.7501L18.4998 14.7501C20.9762 14.7501 22.9997 12.7266 22.9997 10.25V9.50003Z" />
    </svg>
  ),
  nfs: (
    <svg
      viewBox="0 0 37 37"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-9.25"
    >
      <path d="M11.25 7H19.499L19.5889 7.01172C19.6184 7.01955 19.6473 7.03127 19.6748 7.04688C19.7297 7.07806 19.778 7.12422 19.8135 7.18262C19.849 7.24115 19.8698 7.3096 19.873 7.38086C19.8746 7.41643 19.8723 7.45214 19.8652 7.48633L19.8311 7.58496L16.7021 13.959L15.9941 15.4004H23.625C23.6924 15.4004 23.7598 15.4195 23.8193 15.458C23.879 15.4967 23.9295 15.5536 23.9619 15.624C23.9944 15.6945 24.007 15.7746 23.9971 15.8535C23.9871 15.9322 23.9553 16.0046 23.9082 16.0625L10.1582 32.8623C10.1217 32.9069 10.0769 32.9416 10.0283 32.9648C9.97972 32.988 9.92716 33 9.875 33H9.86719C9.81465 33.0004 9.76165 32.9881 9.71289 32.9639C9.64012 32.9267 9.57758 32.8641 9.53906 32.7822C9.49997 32.6991 9.48953 32.6034 9.50977 32.5117V32.5098L11.8877 21.6133L12.1523 20.4004H4.375L4.2832 20.3877C4.253 20.3795 4.22327 20.3678 4.19531 20.3516C4.13946 20.319 4.09076 20.2706 4.05566 20.21C4.02049 20.1491 4.00087 20.078 4 20.0049C3.99958 19.9683 4.00404 19.9322 4.0127 19.8975L4.05078 19.7988L10.9248 7.19824L10.9258 7.19922C10.9603 7.13595 11.0095 7.08488 11.0664 7.05078C11.1232 7.01681 11.1868 7 11.25 7Z" />
    </svg>
  ),
  smb: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-8"
    >
      <path d="M20 8.30273V17.5254C20 18.4709 19.6095 19.521 18.6982 20.6562C18.0008 21.5251 17.0094 22.4285 15.7295 23.333C13.8573 24.6559 12.003 25.5366 11.5 25.7666C10.997 25.5366 9.14269 24.6559 7.27051 23.333C5.99053 22.4285 4.99919 21.5251 4.30176 20.6562C3.39042 19.5209 3 18.4708 3 17.5254V8.30273L11.5 5.81348L20 8.30273Z" />
    </svg>
  ),
};

export const IscraProtocols = ({ intro, items, initial = "nfs" }) => {
  const { containerVariants, textVariants } = motionVariants;
  const [active, setActive] = useState(initial);
  const focus =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9000]";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans font-light"
    >
      <div className="grid lg:grid-cols-[682fr_588fr]">
        <div className="flex flex-col border main-border">
          <button
            type="button"
            aria-pressed={active === "block"}
            onClick={() => setActive("block")}
            className={cn(
              "text-left cursor-pointer border-b main-border px-4 py-6 md:px-9 xl:px-15.25 xl:pt-7.5 xl:pb-8.75 text-color text-base md:text-xl lg:text-[28px] lg:leading-[33.2px] xl:whitespace-pre",
              focus,
            )}
          >
            <motion.span variants={textVariants} className="block">
              <span
                className={cn(
                  "transition-colors",
                  active === "block" ? "text-[#FF9000]" : "title-color",
                )}
              >
                {intro.lead}
              </span>
              {"\n"}
              {intro.text}
              <span className="title-color">{intro.accent}</span>
              {intro.tail}
            </motion.span>
          </button>
          <ul className="flex flex-col gap-6 px-4 py-6 md:px-9 xl:px-9.25 xl:pt-7.75 xl:pb-8.5">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={active === item.id}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "flex items-center gap-3 xl:gap-3.5 w-full text-left cursor-pointer",
                    focus,
                  )}
                >
                  <span
                    className={cn(
                      "flex w-9.25 shrink-0 justify-center transition-colors",
                      active === item.id ? "text-[#FF6600]" : "title-color",
                    )}
                  >
                    {icons[item.id]}
                  </span>
                  <motion.span
                    variants={textVariants}
                    className="text-color text-sm md:text-base lg:text-lg xl:text-[24px] xl:leading-7.5 xl:whitespace-pre"
                  >
                    {item.text}
                  </motion.span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          variants={textVariants}
          className="flex items-start justify-center lg:justify-end px-4 py-8 lg:py-0 lg:pt-25 lg:pr-5"
        >
          <div
            className="relative w-full max-w-116.5 text-[#1f1f1f] dark:text-white @container"
            style={{ aspectRatio: `${STACK_W} / ${STACK_H}` }}
          >
            <div className="absolute inset-0" style={{ fontSize: cq(28) }}>
              {boxes.map((box) => {
                const isActive = box.group === active;
                const className = cn(
                  "absolute flex flex-col items-center justify-center text-center rounded-[2.2cqw] bg-white dark:bg-black cursor-pointer transition-[border-color,box-shadow] duration-300 leading-[1.18]",
                  baseKind[box.kind],
                  isActive && box.kind !== "ip" && activeKind,
                  box.id === "fc" && "pb-[6cqw]",
                  (box.id === "nfs" || box.id === "smb") &&
                    "justify-start pt-[17cqw] gap-0",
                  focus,
                );
                const style = {
                  left: `${(box.x / STACK_W) * 100}%`,
                  top: `${(box.y / STACK_H) * 100}%`,
                  width: `${(box.w / STACK_W) * 100}%`,
                  height: `${(box.h / STACK_H) * 100}%`,
                };

                return box.href ? (
                  <Link
                    key={box.id}
                    href={box.href}
                    className={className}
                    style={style}
                  >
                    {boxContent[box.id]}
                  </Link>
                ) : (
                  <button
                    key={box.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(box.group)}
                    className={className}
                    style={style}
                  >
                    {boxContent[box.id]}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
