"use client";

import { useRef, useEffect } from "react";
import { IMaskInput } from "react-imask";

export const InputField = ({ id, label, type = "text", form, setForm, errors }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = errors[id] ? "red" : "#d1d5db";
      inputRef.current.style.boxShadow = errors[id]
        ? "0 0 0 2px rgba(239,68,68,0.5)" // red-500
        : "0 0 0 2px rgba(59,130,246,0.25)"; // blue-300
    }
  }, [errors, id]);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-light title-color">{label}</label>

      {id === "phone" ? (
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          value={form[id]}
          // onAccept={(value) => setForm((prev) => ({ ...prev, [id]: value }))}
          onAccept={(value) => {
            // Убираем все нецифровые символы для проверки длины
            const digitsOnly = value.replace(/\D/g, '');
            // Полная длина номера (7 + 10 цифр = 11 цифр)
            const isValidLength = digitsOnly.length === 11;

            // Обновляем состояние только если длина корректная
            if (isValidLength || digitsOnly.length === 0) {
              setForm((prev) => ({ ...prev, [id]: value }));
            }
          }}
          unmask={false}
          placeholder="+7 (___) ___-__-__"
          inputRef={inputRef}
          className="w-full p-2 pl-5 border rounded-xl focus:outline-none transition-colors title-color"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((prev) => ({ ...prev, [id]: e.target.value }))}
          placeholder={type === "email" ? "example@mail.ru" : ""}
          className={`w-full p-2 pl-5 border rounded-xl focus:outline-none focus:ring-2 transition-colors title-color ${errors[id] ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
            }`}
        />
      )}

      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
    </div>
  );
};
