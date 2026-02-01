"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Strategy",
    price: "4,999",
    description: "Ideal for companies starting their AI journey.",
    features: [
      "AI Readiness Assessment",
      "Opportunity Mapping",
      "Vendor Selection Support",
      "Strategic Roadmap",
    ],
  },
  {
    name: "Implementation",
    price: "12,999",
    description: "End-to-end development and deployment.",
    features: [
      "Everything in Strategy",
      "MVP Development",
      "Custom Model Fine-tuning",
      "Infrastructure Setup",
      "Initial Training",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale transformation and support.",
    features: [
      "Everything in Implementation",
      "Dedicated AI Team",
      "24/7 SLA Support",
      "On-premise Deployment",
      "Governance & Audits",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Flexible engagement models tailored to your stage of growth.
          </p>

          <div className="inline-flex items-center gap-4 bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                !isAnnual
                  ? "bg-white dark:bg-zinc-700 shadow-sm"
                  : "text-zinc-500",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                isAnnual
                  ? "bg-white dark:bg-zinc-700 shadow-sm"
                  : "text-zinc-500",
              )}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-2xl flex flex-col border",
                plan.highlight
                  ? "bg-white dark:bg-zinc-800 border-blue-500 shadow-xl scale-105 z-10"
                  : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-zinc-500 text-sm">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "w-full py-3 rounded-lg font-semibold transition-colors",
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-black dark:text-white",
                )}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
