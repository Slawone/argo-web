"use client";

import { useState } from "react";
import { IMaskInput } from "react-imask";
import { MailCheck } from "lucide-react";
import { Button } from "@/ui";
import { cn } from "@/utils";
import { URL_BASE, CONTACT_PRODUCTS } from "@/config";

// Временно выключено: send.php пока не принимает website, product и message
const SUBMIT_ENABLED = false;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  website: "",
  product: "",
  message: "",
};

const fieldClassName =
  "w-full px-3 py-2 border rounded-lg bg-transparent title-color font-light text-base md:text-lg placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-colors";

const Field = ({ id, label, error, className, children }) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <label htmlFor={id} className="title-color text-base md:text-lg">
      {label}
    </label>
    {children}
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export const Contact = ({ source = "", className }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const update = (id) => (e) =>
    setForm((prev) => ({ ...prev, [id]: e.target.value }));

  const borderClass = (id) =>
    errors[id]
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 dark:border-white/20 focus:ring-blue-300";

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (form.phone.replace(/\D/g, "").length !== 11) e.phone = "Введите телефон полностью";
    if (!form.email.trim()) e.email = "Введите e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Некорректный e-mail";
    return e;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!SUBMIT_ENABLED) return;
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch(URL_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setServerError(data.message || "Ошибка отправки. Попробуйте позже.");
      }
    } catch {
      setStatus("error");
      setServerError("Не удалось отправить заявку. Проверьте соединение.");
    }
  };

  return (
    <section
      id="contact"
      className={cn("page-container py-5 md:py-10 font-sans font-light", className)}
    >
      <div className="grid md:grid-cols-[1fr_2fr]">
        <div className="px-4 py-5 md:py-10">
          <h2 className="title-color uppercase text-base md:text-xl lg:text-[28px] leading-none mb-5">
            Связаться с нами
          </h2>
          <p className="text-color main-text">
            Расскажем об опыте, покажем кейсы и дадим рекомендации
          </p>
        </div>

        <div className="px-4 py-8 md:py-10">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center gap-4 py-10">
              <MailCheck className="w-12 h-12 title-color" />
              <h3 className="title-color text-xl">Заявка отправлена!</h3>
              <p className="text-color">
                Наш менеджер свяжется с вами в ближайшее время.
              </p>
              <Button variant="secondary" onClick={() => setStatus("idle")}>
                Отправить ещё
              </Button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-x-9 gap-y-4"
            >
              <Field id="name" label="Имя" error={errors.name}>
                <input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ваше имя"
                  className={cn(fieldClassName, borderClass("name"))}
                />
              </Field>
              <Field id="email" label="Рабочий email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Ваш email"
                  className={cn(fieldClassName, borderClass("email"))}
                />
              </Field>
              <Field id="phone" label="Номер телефона" error={errors.phone}>
                <IMaskInput
                  id="phone"
                  mask="+{7} (000) 000-00-00"
                  value={form.phone}
                  onAccept={(value) => setForm((prev) => ({ ...prev, phone: value }))}
                  placeholder="+7 (999) 000-00-00"
                  className={cn(fieldClassName, borderClass("phone"))}
                />
              </Field>
              <Field id="website" label="Website компании">
                <input
                  id="website"
                  value={form.website}
                  onChange={update("website")}
                  placeholder="Example.com"
                  className={cn(fieldClassName, borderClass("website"))}
                />
              </Field>
              <Field id="product" label="Выбор продукта" className="md:col-span-2">
                <select
                  id="product"
                  value={form.product}
                  onChange={update("product")}
                  className={cn(
                    fieldClassName,
                    borderClass("product"),
                    "cursor-pointer dark:bg-black",
                    !form.product && "text-zinc-400 dark:text-zinc-500",
                  )}
                >
                  <option value="">Выберите продукт</option>
                  {CONTACT_PRODUCTS.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="message" label="Комментарий" className="md:col-span-2">
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Поле для ввода"
                  className={cn(fieldClassName, borderClass("message"), "resize-none")}
                />
              </Field>

              <div className="md:col-span-2 flex flex-col gap-3">
                <p className="text-color text-sm">
                  Нажимая на кнопку, я соглашаюсь с{" "}
                  <a
                    href="/documents/Политика_о_защите,_хранении,_обработке_и_передаче_персональных_данных.pdf"
                    target="_blank"
                    className="underline underline-offset-2 hover:title-color transition-colors"
                  >
                    условиями обработки персональных данных
                  </a>{" "}
                  и получением индивидуальных предложений
                </p>
                {serverError && (
                  <p className="text-sm text-red-500">{serverError}</p>
                )}
                <Button
                  type="submit"
                  disabled={!SUBMIT_ENABLED || status === "loading"}
                  className="w-full md:w-1/2 flex-center"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
