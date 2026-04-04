"use client";

import { useState, useEffect, useRef } from "react";
import { X, MailCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IMaskInput } from "react-imask";

// Улучшенный InputField с поддержкой ошибок
export const InputField = ({ id, label, type = "text", form, setForm, errors }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = errors[id] ? "red" : "#d1d5db"; // tailwind gray-300
      inputRef.current.style.boxShadow = errors[id]
        ? "0 0 0 2px rgba(239,68,68,0.5)" // red-500
        : "0 0 0 2px rgba(59,130,246,0.25)"; // blue-300
    }
  }, [errors, id]);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium">{label}</label>

      {id === "phone" ? (
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          value={form[id]}
          onAccept={(value) => setForm((prev) => ({ ...prev, [id]: value }))}
          unmask={false}
          placeholder="+7 (___) ___-__-__"
          inputRef={inputRef}
          className="w-full p-3 pl-5 border rounded-full focus:outline-none transition-colors"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((prev) => ({ ...prev, [id]: e.target.value }))}
          placeholder={type === "email" ? "example@mail.ru" : ""}
          className={`w-full p-3 pl-5 border rounded-full focus:outline-none focus:ring-2 transition-colors ${
            errors[id] ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
        />
      )}

      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
    </div>
  );
};

// Основная форма OrderForm
export const OrderForm = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setForm({ name: "", phone: "", email: "" });
        setErrors({});
        setStatus("idle");
        setServerError("");
      }, 300);
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.phone.trim()) e.phone = "Введите телефон";
    if (!form.email.trim()) e.email = "Введите e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Некорректный e-mail";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else {
        setStatus("error");
        setServerError(data.message || "Ошибка отправки. Попробуйте позже.");
      }
    } catch {
      setStatus("error");
      setServerError("Не удалось отправить заявку. Проверьте соединение.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            className="relative w-full max-w-md bg-white dark:bg-[#111] rounded-2xl shadow-2xl p-8 font-sans font-light"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center text-center py-6 gap-4 font-sans font-light"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MailCheck className="w-12 h-12 title-color" />
                  <h2 className="text-xl text-[#0a0a0a] dark:text-white">
                    Заявка отправлена!
                  </h2>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-5">
                    Наш менеджер свяжется с вами в ближайшее время.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-8 py-3 rounded-full text-sm bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors md:cursor-pointer"
                  >
                    Закрыть
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-[#0a0a0a] dark:text-white mb-2 title-color">
                    Оставить заявку
                  </h2>
                  <p className="text-sm text-black/50 dark:text-white/50 mb-7 leading-5">
                    Заполните форму, и наш менеджер свяжется с вами в ближайшее время.
                  </p>

                  <div className="flex flex-col gap-4">
                    <InputField id="name" label="Ваше имя" form={form} setForm={setForm} errors={errors} />
                    <InputField id="phone" label="Телефон" form={form} setForm={setForm} errors={errors} />
                    <InputField id="email" label="E-mail" type="email" form={form} setForm={setForm} errors={errors} />
                  </div>

                  {serverError && (
                    <p className="mt-4 text-sm text-red-400 text-center">{serverError}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="mt-6 w-full py-3.5 rounded-full font-light bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed md:cursor-pointer"
                  >
                    {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                  </button>

                  <p className="mt-4 text-center text-[14px] title-color leading-4">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a
                      href="/docs/Политика_о_защите,_хранении,_обработке_и_передаче_персональных_данных.pdf"
                      className="underline underline-offset-2 hover:text-black/60 dark:hover:text-white/60 transition-colors"
                      target="_blank"
                    >
                      политикой конфиденциальности
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};