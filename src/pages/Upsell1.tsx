import { useState, useCallback } from "react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import Upsell1US from "@/components/upsell/Upsell1US";
import Upsell1International from "@/components/upsell/Upsell1International";
import ProgressLoader from "@/components/upsell/ProgressLoader";

const Upsell1 = () => {
  const { isUS } = useGeoLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  // Show US version for all US users (mobile and desktop)
  if (isUS) {
    if (!loadingComplete) {
      return <ProgressLoader duration={22} onComplete={handleLoadingComplete} />;
    }
    return <Upsell1US />;
  }

  // For everyone else: show international version immediately
  return <Upsell1International />;
};

export default Upsell1;
