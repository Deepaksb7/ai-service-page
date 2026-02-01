"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contextPrompt, setContextPrompt] = useState("Let's Talk AI");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      reset();
      setIsSuccess(false);
      setIsOpen(false);
    }, 2000);
  };

  // ... (scroll effect remains same)

  return (
    <>
      {/* ... (trigger button remains same) */}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-900 shadow-2xl z-70 p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">{contextPrompt}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-zinc-500 max-w-[250px]">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
                <p>Or email us directly at</p>
                <a
                  href="mailto:hello@nexusai.com"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  hello@nexusai.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
