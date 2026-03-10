"use client";

import { useState } from "react";

export function Cases() {
  const [activeTab, setActiveTab] = useState('storage');

  return (
    <section>
      <div className="flex overflow-hidden">
        {/* Левая часть */}
        <div className="">Кейсы</div>
        <div className="w-1/2 p-4 border-r">
          {activeTab === "storage" && <p>Левая часть контента для Вкладки 1</p>}
          {activeTab === "S3" && <p>Левая часть контента для Вкладки 2</p>}
          {activeTab === "Monitoring" && <p>Левая часть контента для Вкладки 3</p>}
          {activeTab === "AI" && <p>Левая часть контента для Вкладки 4</p>}
        </div>

        {/* Правая часть */}
        <div className="w-1/2 p-4">
          {activeTab === "storage" && <p>Правая часть контента для Вкладки 1</p>}
          {activeTab === "S3" && <p>Правая часть контента для Вкладки 2</p>}
          {activeTab === "Monitoring" && <p>Правая часть контента для Вкладки 3</p>}
          {activeTab === "AI" && <p>Правая часть контента для Вкладки 4</p>}
        </div>
      </div>

      <div className="flex border rounded-xl overflow-hidden w-fit">
        <button
          onClick={() => setActiveTab("storage")}
          className={`px-4 py-1 transition-colors duration-300 ${
            activeTab === "storage" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Storage
        </button>
        <button
          onClick={() => setActiveTab("S3")}
          className={`px-4 py-1 transition-colors duration-300 ${
            activeTab === "S3" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          S3
        </button>

        <button
          onClick={() => setActiveTab("Monitoring")}
          className={`px-4 py-1 transition-colors duration-300 ${
            activeTab === "Monitoring" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Monitoring
        </button>

        <button
          onClick={() => setActiveTab("AI")}
          className={`px-4 py-1 transition-colors duration-300 ${
            activeTab === "AI" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          AI
        </button>
      </div>
    </section>
  )
}
