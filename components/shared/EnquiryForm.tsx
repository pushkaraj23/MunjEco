"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { submitEnquiry } from "@/lib/submitEnquiry";

const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  product: z.string(),
  quantity: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

type EnquiryFormProps = {
  defaultProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
  theme?: "light" | "dark";
};

export function EnquiryForm({
  defaultProduct = "",
  onSuccess,
  compact = false,
  theme = "light",
}: EnquiryFormProps) {
  const isDark = theme === "dark";
  const [toast, setToast] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { product: defaultProduct },
  });

  async function onSubmit(data: EnquiryFormData) {
    try {
      await submitEnquiry(data);
      setToast("Enquiry submitted successfully. We'll be in touch soon.");
      reset();
      onSuccess?.();
    } catch {
      setToast("Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const inputBase =
    "w-full rounded-none border bg-transparent px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2";
  const inputLight = `${inputBase} border-border bg-background text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20`;
  const inputDark = `${inputBase} border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/30`;

  const labelBase = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.15em]";
  const labelLight = `${labelBase} text-foreground-muted`;
  const labelDark = `${labelBase} text-white/85`;

  const errorCls = isDark ? "mt-1 text-[0.65rem] text-primary-light" : "mt-1 text-[0.65rem] text-accent";

  const textareaBase = "w-full resize-none rounded-none border px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2";
  const textareaLight = `${textareaBase} border-border bg-background text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20`;
  const textareaDark = `${textareaBase} border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/30`;

  const inputCls = isDark ? inputDark : inputLight;
  const labelCls = isDark ? labelDark : labelLight;
  const textareaCls = isDark ? textareaDark : textareaLight;

  const gap = compact ? "gap-3" : "gap-4";
  const rowGap = compact ? "gap-3" : "gap-4";

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col ${gap}`}
      >
        <div className={`grid ${rowGap} sm:grid-cols-2`}>
          <div>
            <label htmlFor="enq-name" className={labelCls}>
              Full Name *
            </label>
            <input
              id="enq-name"
              {...register("name")}
              className={inputCls}
              placeholder="John Doe"
            />
            {errors.name && <p className={errorCls}>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="enq-company" className={labelCls}>
              Company Name *
            </label>
            <input
              id="enq-company"
              {...register("company")}
              className={inputCls}
              placeholder="Your Company"
            />
            {errors.company && <p className={errorCls}>{errors.company.message}</p>}
          </div>
        </div>

        <div className={`grid ${rowGap} sm:grid-cols-2`}>
          <div>
            <label htmlFor="enq-email" className={labelCls}>
              Email *
            </label>
            <input
              id="enq-email"
              type="email"
              {...register("email")}
              className={inputCls}
              placeholder="john@company.com"
            />
            {errors.email && <p className={errorCls}>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="enq-phone" className={labelCls}>
              Phone *
            </label>
            <input
              id="enq-phone"
              {...register("phone")}
              className={inputCls}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
          </div>
        </div>

        <div className={`grid ${rowGap} sm:grid-cols-2`}>
          <div>
            <label htmlFor="enq-product" className={labelCls}>
              Product of Interest
            </label>
            <input
              id="enq-product"
              {...register("product")}
              className={inputCls}
              placeholder="e.g. Bamboo Pens"
            />
          </div>
          <div>
            <label htmlFor="enq-quantity" className={labelCls}>
              Quantity
            </label>
            <input
              id="enq-quantity"
              {...register("quantity")}
              className={inputCls}
              placeholder="e.g. 500 units"
            />
          </div>
        </div>

        <div>
          <label htmlFor="enq-message" className={labelCls}>
            Message *
          </label>
          <textarea
            id="enq-message"
            rows={compact ? 3 : 4}
            {...register("message")}
            className={textareaCls}
            placeholder="Tell us about your requirements..."
          />
          {errors.message && <p className={errorCls}>{errors.message.message}</p>}
        </div>

        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-none bg-primary px-4 py-3 text-center text-sm font-medium text-white"
          >
            {toast}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-none bg-primary px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
