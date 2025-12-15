import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, CheckCircle } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    { icon: Lock, label: "SSL Encrypted" },
    { icon: Shield, label: "100% Secure" },
    { icon: CreditCard, label: "Safe Payment" },
    { icon: CheckCircle, label: "Verified" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-4 md:gap-6"
    >
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-muted-foreground text-sm"
        >
          <badge.icon className="w-4 h-4 text-primary" />
          <span>{badge.label}</span>
        </div>
      ))}
    </motion.div>
  );
};
