"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, MessageSquare, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

const useCases = [
  { icon: <MessageSquare className="w-4 h-4" />, text: "Social Posts" },
  { icon: <FileText className="w-4 h-4" />, text: "Essays" },
  { icon: <Zap className="w-4 h-4" />, text: "Scripts" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Stories" },
];

const floatingStats = [
  { label: "Words Generated", value: "10M+" },
  { label: "Happy Users", value: "50K+" },
  { label: "Time Saved", value: "1000h+" },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grain"></div>
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(138,43,226,0.1),transparent_50%)]" />
      </div>
      
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-8"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">AI Writing Assistant of 2024</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-space-grotesk text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your
              <br />
              Writing with{" "}
              <span className="text-gradient relative">
                AI Superpowers
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-8 -top-8"
                >
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </motion.div>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Create scroll-stopping content in seconds with AIScribeHub's next-gen AI writing assistant
            </motion.p>
          </div>

          {/* Use Cases Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              >
                {useCase.icon}
                <span className="text-sm font-medium">{useCase.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90"
            >
              <span className="relative z-10 flex items-center">
                Start Creating Free
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group hover:border-primary/50"
            >
              See How It Works
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 bg-primary/5 -z-10"
              />
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {floatingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.9 }}
                className="text-center"
              >
                <div className="font-space-grotesk font-bold text-2xl text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI Writing Assistant"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-20, 20],
              rotate: [-5, 5],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
            className="absolute -top-8 -right-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-lg border border-border/50"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-medium">Writing in progress...</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [20, -20],
              rotate: [5, -5],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
            className="absolute -bottom-8 -left-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-lg border border-border/50"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AI-Powered Magic</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}