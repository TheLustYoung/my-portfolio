// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/common/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = t("contact.form.errors.required");
    if (!form.email.trim()) {
      newErrors.email = t("contact.form.errors.required");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = t("contact.form.errors.email");
    }
    if (!form.message.trim())
      newErrors.message = t("contact.form.errors.required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSuccess("");
      setError("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    let json: any = null;
    try {
      json = await res.json();
    } catch {
      // если тело пустое / не json
    }

    if (!res.ok || !json?.ok) {
      const messageFromServer =
        json?.error ||
        t("contact.form.error") ||
        "Не удалось отправить сообщение. Попробуйте позже.";
      setError(messageFromServer);
      return;
    }

    setSuccess(
      t("contact.form.success") ||
        "Сообщение отправлено. Я отвечу на ваш email."
    );
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("Contact form error:", err);
    setError(
      t("contact.form.error") ||
        "Что-то пошло не так. Попробуйте позже или напишите напрямую."
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
      <h1 className="text-base md:text-lg font-semibold mb-2">
        {t("contact.title")}
      </h1>
      <p className="text-xs md:text-sm text-slate-400 mb-5">
        {t("contact.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 text-xs text-slate-300">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400/70 text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-xs text-slate-300">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400/70 text-sm"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-xs text-slate-300">
            {t("contact.form.message")}
          </label>
          <textarea
            value={form.message}
            onChange={handleChange("message")}
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400/70 resize-none text-sm"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message}</p>
          )}
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Отправка..." : t("contact.form.submit") || "Отправить"}
        </Button>

        {success && (
          <p className="mt-2 text-xs text-emerald-400">{success}</p>
        )}
        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
      </form>
    </div>
  );
}
