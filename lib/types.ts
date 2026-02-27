export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  specifications?: Record<string, string>;
  images: string[];
  featured: boolean;
  createdAt: { seconds: number; nanoseconds: number };
}

export type EnquiryStatus = "new" | "ongoing" | "done";

export interface Enquiry {
  id?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  status?: EnquiryStatus;
  createdAt?: { seconds: number; nanoseconds: number };
}
