"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

const DEFAULT_TITLE = "Nhận bảng giá & ưu đãi";

export default function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(DEFAULT_TITLE);
  const [leadContext, setLeadContext] = useState("");

  useEffect(() => {
    function openModal(event) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const trigger = event.target.closest('a[href="#lien-he"]');

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setModalTitle(trigger.getAttribute("data-lead-modal-title") || DEFAULT_TITLE);
      setLeadContext(trigger.getAttribute("data-lead-context") || "");
      setOpen(true);
    }

    document.addEventListener("click", openModal);

    return () => document.removeEventListener("click", openModal);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function closeModal() {
    setOpen(false);
  }

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-charcoal/55 px-4 py-6 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Đóng form đăng ký"
        onClick={closeModal}
      />

      <div className="relative z-10 max-h-[calc(100vh-3rem)] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-charcoal/10 bg-warm-white p-5 shadow-2xl shadow-charcoal/30 animate-popup-zoom md:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Saigon Living
            </p>
            <h2 id="lead-form-modal-title" className="mt-2 font-display text-3xl font-light text-charcoal">
              {modalTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 text-charcoal/60 transition-colors hover:border-gold hover:text-gold"
            aria-label="Đóng form"
          >
            ×
          </button>
        </div>

        <LeadForm
          key={`${modalTitle}-${leadContext}`}
          formName="lead_popup_form"
          submitLabel="Gửi yêu cầu"
          showSelect={false}
          showNote={false}
          leadContext={leadContext}
        />
      </div>
    </div>
  );
}
