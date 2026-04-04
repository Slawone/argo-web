"use client";

import { IMaskInput } from "react-imask";

export const InputField = ({ id, label, type = "text", form, setForm, errors }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium">{label}</label>

      {id === "phone" ? (
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          value={form[id]}
          onAccept={(value) =>
            setForm((prev) => ({ ...prev, [id]: value }))
          }
          unmask={false} // true — только цифры, false — отображаем форматированный текст
          placeholder="+7 (___) ___-__-__"
          className={`w-full p-3 pl-5 border rounded-full focus:outline-none focus:ring-2`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [id]: e.target.value }))
          }
          placeholder={type === "email" ? "example@mail.ru" : ""}
          className="w-full p-3 pl-5 border rounded-full focus:outline-none focus:ring-2"
        />
      )}

      {errors[id] && (
        <p className="mt-1 text-sm text-red-500">{errors[id]}</p>
      )}
    </div>
  );
};