import { motion } from "framer-motion";

export const PaymentMethods = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <span className="text-xs text-muted-foreground">Accepted payments:</span>
      <div className="flex items-center gap-2">
        {/* Visa */}
        <div className="bg-card/80 rounded px-2 py-1 border border-border/50">
          <span className="text-xs font-bold text-[#1A1F71]">VISA</span>
        </div>
        {/* Mastercard */}
        <div className="bg-card/80 rounded px-2 py-1 border border-border/50">
          <span className="text-xs font-bold text-[#EB001B]">Master</span>
        </div>
        {/* Amex */}
        <div className="bg-card/80 rounded px-2 py-1 border border-border/50">
          <span className="text-xs font-bold text-[#006FCF]">Amex</span>
        </div>
        {/* PayPal */}
        <div className="bg-card/80 rounded px-2 py-1 border border-border/50">
          <span className="text-xs font-bold text-[#003087]">PayPal</span>
        </div>
        {/* PIX */}
        <div className="bg-card/80 rounded px-2 py-1 border border-border/50">
          <span className="text-xs font-bold text-[#32BCAD]">PIX</span>
        </div>
      </div>
    </motion.div>
  );
};
