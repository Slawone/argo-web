"use client";

import { IMaskInput } from "react-imask";

export const InputField = ({ id, label, type = "text", form, setForm, errors }) => {
  const fieldClassName = `w-full p-2 pl-5 border rounded-xl focus:outline-none focus:ring-2 transition-colors title-color ${
    errors[id]
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 dark:border-white/20 focus:ring-blue-300"
  }`;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-light title-color">{label}</label>

      {id === "phone" ? (
        <IMaskInput
          id={id}
          mask="+{7} (000) 000-00-00"
          value={form[id]}
          onAccept={(value) => setForm((prev) => ({ ...prev, [id]: value }))}
          unmask={false}
          placeholder="+7 (___) ___-__-__"
          className={fieldClassName}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((prev) => ({ ...prev, [id]: e.target.value }))}
          placeholder={type === "email" ? "example@mail.ru" : ""}
          className={fieldClassName}
        />
      )}

      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
    </div>
  );
};
