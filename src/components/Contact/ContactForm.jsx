import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../ui/Button";

// Placeholder EmailJS credentials — replace with real values before going live.
const EMAILJS_SERVICE_ID = "service_caeluna_placeholder";
const EMAILJS_TEMPLATE_ID = "template_caeluna_placeholder";
const EMAILJS_PUBLIC_KEY = "caeluna_public_key_placeholder";

const inputClasses =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-accent/40";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className={`${inputClasses} ${errors.name ? "border-red-400" : "border-navy-200"}`}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            className={`${inputClasses} ${errors.email ? "border-red-400" : "border-navy-200"}`}
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={`${inputClasses} ${errors.phone ? "border-red-400" : "border-navy-200"}`}
            {...register("phone", {
              pattern: {
                value: /^[0-9+\-()\s]{7,20}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy-700">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project inquiry"
            className={`${inputClasses} ${errors.subject ? "border-red-400" : "border-navy-200"}`}
            {...register("subject", { required: "Please enter a subject" })}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClasses} resize-none ${errors.message ? "border-red-400" : "border-navy-200"}`}
          {...register("message", {
            required: "Please enter a message",
            minLength: { value: 20, message: "Message should be at least 20 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button as="button" type="submit" icon={false} className="mt-2 w-full sm:w-fit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-emerald-600"
        >
          <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent — we'll be in touch soon.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-red-500"
        >
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again later.
        </motion.p>
      )}
    </form>
  );
}
