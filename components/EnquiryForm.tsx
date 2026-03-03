"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { Button } from "./Button";

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

const inputLight =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";
const inputDark =
  "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30";
const labelLight = "mb-1.5 block text-sm font-medium text-foreground-muted";
const labelDark = "mb-1.5 block text-sm font-medium text-white/85";
const errorLight = "mt-1 text-xs text-accent";
const errorDark = "mt-1 text-xs text-accent-light";
const textareaLight =
  "w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";
const textareaDark =
  "w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30";

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
  const inputCls = isDark ? inputDark : inputLight;
  const labelCls = isDark ? labelDark : labelLight;
  const errorCls = isDark ? errorDark : errorLight;
  const textareaCls = isDark ? textareaDark : textareaLight;
  const [success, setSuccess] = useState(false);
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
      setSuccess(true);
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

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 ${compact ? "space-y-3" : "space-y-5"}`}
      >
        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="name" className={labelCls}>
              Full Name *
            </label>
            <input
              id="name"
              {...register("name")}
              className={inputCls}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className={errorCls}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>
              Company Name *
            </label>
            <input
              id="company"
              {...register("company")}
              className={inputCls}
              placeholder="Your Company"
            />
            {errors.company && (
              <p className={errorCls}>{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="email" className={labelCls}>
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={inputCls}
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className={errorCls}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>
              Phone *
            </label>
            <input
              id="phone"
              {...register("phone")}
              className={inputCls}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className={errorCls}>{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="product" className={labelCls}>
              Product of Interest
            </label>
            <input
              id="product"
              {...register("product")}
              className={inputCls}
              placeholder="e.g. Bamboo Flooring"
            />
          </div>
          <div>
            <label htmlFor="quantity" className={labelCls}>
              Quantity
            </label>
            <input
              id="quantity"
              {...register("quantity")}
              className={inputCls}
              placeholder="e.g. 500 sq ft"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>
            Message *
          </label>
          <textarea
            id="message"
            rows={compact ? 3 : 5}
            {...register("message")}
            className={textareaCls}
            placeholder="Tell us about your requirements..."
          />
          {errors.message && (
            <p className={errorCls}>{errors.message.message}</p>
          )}
        </div>

        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-white"
          >
            {toast}
          </motion.div>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
}
