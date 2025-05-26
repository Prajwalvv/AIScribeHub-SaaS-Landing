"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Fingerprint, FileCheck, Shield, Brain } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "InstantWrite™",
    description: "Generate high-quality content in seconds with our advanced AI engine",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "StyleSync™",
    description: "AI that adapts to your unique writing style and brand voice",
    gradient: "from-secondary/20 via-secondary/10 to-transparent",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "MultiFormat Export",
    description: "Export your content in multiple formats with one click",
    gradient: "from-accent/20 via-accent/10 to-transparent",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Grammar Enhancement",
    description: "Perfect grammar and style with advanced AI suggestions",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Plagiarism Shield",
    description: "Ensure your content is 100% original and plagiarism-free",
    gradient: "from-secondary/20 via-accent/10 to-transparent",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Research Assistant",
    description: "AI-powered research tools to enhance your content with facts",
    gradient: "from-accent/20 via-primary/10 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4"
          >
            Supercharge Your Writing with{" "}
            <span className="text-gradient">AI Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to create amazing content, powered by cutting-edge AI technology
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
              <div className="relative">
                <div className="mb-4 inline-block p-3 rounded-lg bg-muted">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-space-grotesk font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}