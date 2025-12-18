import { useGeoLocation } from "@/hooks/useGeoLocation";
import Upsell1US from "@/components/upsell/Upsell1US";
import Upsell1International from "@/components/upsell/Upsell1International";
import { motion } from "framer-motion";

const Upsell1 = () => {
  const { isUS, loading } = useGeoLocation();

  // Show loading state while detecting location
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-amber-100/60 text-sm">Loading...</p>
        </motion.div>
      </div>
    );
  }

  // Show US version for US users, International version for others
  return isUS ? <Upsell1US /> : <Upsell1International />;
};

export default Upsell1;
