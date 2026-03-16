import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrutalCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "yellow" | "blue";
  delay?: number;
}

const variantClass = {
  default: "brutal-card",
  yellow: "brutal-card-yellow",
  blue: "brutal-card-blue",
};

const BrutalCard = ({ children, className = "", variant = "default", delay = 0 }: BrutalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.2, 0, 0, 1] }}
      className={`${variantClass[variant]} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BrutalCard;
