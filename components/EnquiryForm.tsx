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

type EnquiryFormProps = {
  defaultProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

export function EnquiryForm({
  defaultProduct = "",
  onSuccess,
  compact = false,
}: EnquiryFormProps) {
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
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-2 left-0 right-0 rounded-2xl bg-matcha p-3 text-center text-sm font-medium text-white shadow-[0_0_30px_rgba(128,150,113,0.3)]"
        >
          {toast}
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 ${compact ? "space-y-3" : "space-y-5"}`}
      >
        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-foreground-muted">
              Full Name *
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-chai">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="company" className="mb-1 block text-sm text-foreground-muted">
              Company Name *
            </label>
            <input
              id="company"
              {...register("company")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="Your Company"
            />
            {errors.company && (
              <p className="mt-1 text-xs text-chai">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-foreground-muted">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-chai">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm text-foreground-muted">
              Phone *
            </label>
            <input
              id="phone"
              {...register("phone")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-chai">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label htmlFor="product" className="mb-1 block text-sm text-foreground-muted">
              Product of Interest
            </label>
            <input
              id="product"
              {...register("product")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="e.g. Bamboo Flooring"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="mb-1 block text-sm text-foreground-muted">
              Quantity
            </label>
            <input
              id="quantity"
              {...register("quantity")}
              className="w-full rounded-lg border border-sage-muted/20 bg-surface/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/30 focus:shadow-[0_0_20px_rgba(63,126,74,0.15)]"
              placeholder="e.g. 500 sq ft"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-foreground-muted">
            Message *
          </label>
          <textarea
            id="message"
            rows={compact ? 3 : 5}
            {...register("message")}
            className="w-full resize-none rounded-2xl border border-almond bg-white/80 px-4 py-3 text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-matcha focus:ring-2 focus:ring-matcha/30 focus:shadow-[0_0_20px_rgba(128,150,113,0.15)]"
            placeholder="Tell us about your requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-chai">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
}
