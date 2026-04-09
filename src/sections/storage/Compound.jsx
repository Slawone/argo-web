"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { motionVariants } from "@/config";

const imgTabUnderline = "https://www.figma.com/api/mcp/asset/c69426bc-18d8-4700-8aa4-f645698da466";
const imgCopy = "https://www.figma.com/api/mcp/asset/330df76d-e74e-4dd2-9b2e-e6535c643318";

const tabs = [
  { id: "resilience", label: "Отказоустойчивость" },
  { id: "performance", label: "Производительность" },
  { id: "services", label: "Сервисы/Механизмы" },
];

const tabContent = {
  resilience: (
    <ul className="flex flex-col gap-2 text-[12px] title-color" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
      <li>1 High Availability</li>
      <li>2 <span className="text-[#00FF66]">Sync</span> / Async Replication</li>
      <li className="bg-[rgba(12,50,27,0.5)] dark:bg-[rgba(12,50,27,1)]">3 <span className="text-[#00FF66]">RAID</span> / Erasure Coding</li>
      <li>4 <span className="text-[#00FF66]">Multipathing</span></li>
      <li>5 Write-Ahead Logging / Journaling</li>
      <li>6 Self-Healing</li>
      <li>7 Health Monitoring</li>
    </ul>
  ),
  performance: (
    <ul className="flex flex-col gap-2 text-[12px] title-color" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
      <li>1 Read cache5</li>
      <li>2 ARC (Adaptive Replacement Cache)</li>
      <li>3 <span className="text-[#00FF66]">L2ARC</span> (Level 2 ARC)</li>
      <li>4 ZIL / SLOG (Separate Log Devices)</li>
      <li>5 I/O Prioritization / Scheduling</li>
      <li>6 <span className="text-[#00FF66]">Compression</span></li>
      <li>7 <span className="text-[#00FF66]">Deduplication</span></li>
      <li>8 Parallel Scrubbing and Resilvering</li>
    </ul>
  ),
  services: (
    <ul className="flex flex-col gap-2 text-[12px] title-color" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
      <li>1 <span className="text-[#00FF66]">Snapshots</span> и Clones</li>
      <li className="bg-[rgba(12,50,27,0.5)] dark:bg-[rgba(12,50,27,1)]">2 Checksumming</li>
      <li>3 <span className="text-[#00FF66]">Scrubbing</span></li>
      <li>4 RAID</li>
      <li>5 <span className="text-[#00FF66]">Thin Provisioning</span></li>
      <li>6 Quota & Reservations</li>
      <li>7 Replication</li>
      <li>8 Dataset Hierarchy</li>
      <li>9 Export/Import Pools</li>
    </ul>
  ),
}

const RESILIENCE_TEXT = `1 High Availability
2 Sync/Async Replication
3 RAID / Erasure Coding
4 Multipathing
5 Write-Ahead Logging / Journaling
6 Self-Healing
7 Health Monitoring`;

const FAULT_TOLERANCE_LINES = [
  { num: "1", content: <span className="text-[#ededed]">High Availability</span>, trailingIcon: true },
  {
    num: "2",
    content: (
      <>
        <span className="text-[#00ff66]">Sync</span>
        <span className="text-[#ededed]">/Async Replication</span>
      </>
    ),
  },
  {
    num: "3",
    content: (
      <>
        <span className="text-[#00ff66]">RAID</span>
        <span className="text-[#ededed]"> / Erasure Coding</span>
      </>
    ),
    highlight: true,
  },
  { num: "4", content: <span className="text-[#00ff66]">Multipathing</span> },
  {
    num: "5",
    content: <span className="text-[#ededed]">Write-Ahead Logging / Journaling</span>,
  },
  { num: "6", content: <span className="text-[#ededed]">Self-Healing</span> },
  { num: "7", content: <span className="text-[#ededed]">Health Monitoring</span> },
];

export const Compound = () => {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;
  const [activeTab, setActiveTab] = useState("resilience");

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-border"
    >
      <div className="relative">
        <div className="grid lg:grid-cols-[5fr_7fr]">
          {/* Левая колонка */}
          <div className="flex flex-col items-start gap-8 font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
            <motion.h2
              variants={textVariants}
              className="text-base md:text-xl lg:text-[28px]font-light uppercase leading-none title-color"
            >
              Состав
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-color"
            >
              ISCRA OS (Intellectual Scalable Clusterised Appliance) (OpenSolaris Base); ZFS; High
              Availability Framework; Cluster Framework; Web; Monitoring
            </motion.p>
            <a
              href="https://reestr.digital.gov.ru/reestr/307200/"
              target="_blank"
              className="button button-primary flex-center"
            >
              <Image src="/reestr.svg" width={20} height={20} alt="reestr" className="dark:invert" />
              Реестр программного обеспечения
            </a>
          </div>

          {/* Правая колонка */}
          <div className="section-py flex flex-col items-center gap-5 md:gap-10">
            <div className="w-full max-w-160 rounded-3xl bg-white dark:bg-black border border-black/8 dark:border-white/14">
              <div className="grid grid-cols-3 border-b border-black/8 dark:border-white/14">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`cursor-pointer px-5 py-3 text-[9px] sm:text-sm border-r last-of-type:border-r-0 border-black/8 dark:border-white/14 ${activeTab === tab.id ? "title-color" : "text-color"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }} className="p-5">
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="/docs/presentation.pdf"
                target="_blank"
                className="button button-primary flex-center"
              >
                <Image src="/download.svg" width={20} height={20} alt="reestr" className="invert dark:invert-0" />
                Presentation
              </a>
              <a
                href="/docs/options.pdf"
                target="_blank"
                className="button button-secondary flex-center"
              >
                <Image src="/download.svg" width={20} height={20} alt="reestr" className="dark:invert" />
                Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
