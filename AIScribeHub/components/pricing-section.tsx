"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for trying out AIScribeHub",
    features: [
      "500 words per day",
      "Basic AI writing tools",
      "Grammar checking",
      "2 export formats",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 290 },
    description: "Ideal for content creators and writers",
    features: [
      "50,000 words per month",
      "Advanced AI tools",
      "StyleSync™ technology",
      "All export formats",
      "Priority support",
      "Plagiarism checker",
      "Research assistant",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 990 },
    description: "For teams and businesses",
    features: [
      "Unlimited words",
      "Custom AI model training",
      "Team collaboration",
      "API access",
      "24/7 priority support",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4"
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Choose the perfect plan for your writing needs
          </motion.p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? "text-primary" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? "text-primary" : "text-muted-foreground"}`}>
              Annual (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border bg-card p-8 ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-space-grotesk font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.price.monthly === 0 ? "Free forever" : `/${isAnnual ? "year" : "month"}`}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price.monthly === 0 ? "Start Free" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}