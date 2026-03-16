import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrutalCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "yellow" | "blue" | "green" | "purple";
  delay?: number;
}

const variantClass: Record<string, string> = {
  default: "brutal-card",
  yellow: "brutal-card-yellow",
  blue: "brutal-card-blue",
  green: "brutal-card-green",
  purple: "brutal-card-purple",
};

const BrutalCard = ({ children, className = "", variant = "default", delay = 0 }: BrutalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.2, 0, 0, 1] }}
      className={`${variantClass[variant]} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BrutalCard;
