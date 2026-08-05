"use client";

import { useState } from "react";
import { submitLeadWebhook } from "@/app/lib/vlasta-thong-tin/lead-bridge";
import { trackLeadFormSubmission } from "@/app/lib/vlasta-thong-tin/tracking";
import Button from "./ui/Button";

const defaultSelectOptions = [
  "Bảng giá và ưu đãi",
  "Pháp lý dự án",
  "Tiến độ xây dựng thực tế",
  "Thiết kế căn hộ",
  "Thăm quan thực tế",
];

export default function LeadForm({
  formName = "price_form",
  submitLabel = "Gửi yêu cầu nhận bảng giá",
  showSelect = true,
  showNote = true,
  selectLabel = "Chọn nội dung bạn muốn hỗ trợ",
  selectPlaceholder = "Chọn nội dung bạn muốn hỗ trợ",
  selectOptions = defaultSelectOptions,
  extraSelect,
  extraSelects,
  contactPosition = "top",
  compact = false,
  inputMode = "select",
  leadContext = "",
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const additionalSelects = extraSelects ?? (extraSelect ? [extraSelect] : []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const unit = formData.get("unit");
    const extraValues = additionalSelects
      .map((select) => formData.get(select.name))
      .filter(Boolean);
    const projectDetails = [unit, ...extraValues].filter(Boolean).join(" - ");
    const projectLabel = leadContext
      ? `Vlasta Premier Phú Thuận - ${leadContext}`
      : projectDetails
        ? `Vlasta Premier Phú Thuận - ${projectDetails}`
        : "Vlasta Premier Phú Thuận";

    setLoading(true);
    setError("");

    try {
      await submitLeadWebhook({
        eventType: "lead_form_submission",
        fullName: formData.get("name"),
        phone: formData.get("phone"),
        email: "",
        project: projectLabel,
        note: formData.get("note"),
        registeredAt: new Date().toISOString(),
      });

      trackLeadFormSubmission({
        form_name: formName,
        project: "Vlasta Premier Phú Thuận",
        unit_type: leadContext || projectDetails,
      });

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Không gửi được thông tin. Vui lòng gọi hotline hoặc thử lại sau.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        id="lead-form-thank-you"
        className="py-10 text-center animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-tropical/10 text-2xl text-tropical">
          ✓
        </div>
        <h3 className="font-display text-3xl text-charcoal">Cảm ơn bạn!</h3>
        <p className="mt-3 text-charcoal/60">
          Chúng tôi sẽ liên hệ sớm nhất. Kiểm tra Zalo/SMS trong ít phút.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-5"}>
      {contactPosition === "top" && <ContactFields />}

      {showSelect && (
        <ChoiceField
          name="unit"
          label={selectLabel}
          placeholder={selectPlaceholder}
          options={selectOptions}
          mode={inputMode}
        />
      )}

      {additionalSelects.map((select) => (
        <ChoiceField
          key={select.name}
          name={select.name}
          label={select.label}
          placeholder={select.placeholder}
          options={select.options}
          mode={inputMode}
          required={select.required ?? true}
        />
      ))}

      {contactPosition === "afterSelects" && <ContactFields />}

      {showNote && (
        <div>
          <label className="mb-2 block text-sm font-medium text-charcoal/70">
            Ghi chú (tuỳ chọn)
          </label>
          <textarea
            name="note"
            rows={3}
            placeholder="Thời gian muốn tham quan, ngân sách..."
            className="w-full resize-none rounded-xl border border-charcoal/10 bg-warm-white px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          />
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={loading}>
        {loading ? "Đang gửi..." : submitLabel}
      </Button>

      {error ? (
        <p className="rounded-xl border border-red-500/20 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <p className="text-center text-[11px] leading-relaxed text-charcoal/40">
        Bằng việc gửi form, bạn đồng ý với{" "}
        <a
          href="#chinh-sach-bao-mat"
          className="font-semibold text-gold-dark underline-offset-2 hover:text-gold hover:underline"
        >
          chính sách bảo mật thông tin cá nhân
        </a>{" "}
        của đơn vị tư vấn.
      </p>
    </form>
  );
}

function ChoiceField({
  name,
  label,
  placeholder,
  options,
  mode = "select",
  required = true,
}) {
  if (mode === "buttons") {
    return (
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-charcoal/70">
          {label}
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {options.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option}
                required={required}
                className="peer sr-only"
              />
              <span className="flex min-h-11 items-center justify-center rounded-xl border border-charcoal/10 bg-warm-white px-3 py-2 text-center text-sm font-medium text-charcoal/70 transition-all peer-checked:border-gold peer-checked:bg-gold peer-checked:text-charcoal peer-focus-visible:ring-2 peer-focus-visible:ring-gold/30">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <div>
      <label className="sr-only">{label}</label>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border border-charcoal/10 bg-warm-white px-4 py-3.5 text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function ContactFields() {
  return (
    <>
      <FormField label="Họ và tên" name="name" required placeholder="Nguyễn Văn A" />
      <FormField label="Số điện thoại" name="phone" required type="tel" placeholder="090x xxx xxx" />
    </>
  );
}

function FormField({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-charcoal/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-charcoal/10 bg-warm-white px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}
