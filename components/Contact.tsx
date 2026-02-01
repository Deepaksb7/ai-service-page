"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

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
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to transform <br />
                <span className="text-blue-500">your business?</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Schedule a consultation with our AI architects. We'll analyze
                your infrastructure and propose a high-impact roadmap.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                    <a
                      href="mailto:hello@nexusai.com"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      hello@nexusai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Live Chat</h4>
                    <p className="text-zinc-400">Available 9am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Embedded Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-800/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            {isSuccess ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-zinc-400">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-600 resize-none"
                    placeholder="Tell us about your project needs..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
