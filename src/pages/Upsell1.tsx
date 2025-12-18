import { useState, useCallback } from "react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useIsMobile } from "@/hooks/use-mobile";
import Upsell1US from "@/components/upsell/Upsell1US";
import Upsell1International from "@/components/upsell/Upsell1International";
import ProgressLoader from "@/components/upsell/ProgressLoader";

const Upsell1 = () => {
  const { isUS } = useGeoLocation();
  const isMobile = useIsMobile();
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Show US version only for US users on mobile devices
  const showUSVersion = isUS && isMobile;

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  // For US mobile users: show progress loader first, then black page
  if (showUSVersion) {
    if (!loadingComplete) {
      return <ProgressLoader duration={22} onComplete={handleLoadingComplete} />;
    }
    return <Upsell1US />;
  }

  // For everyone else: show international version immediately
  return <Upsell1International />;
};

export default Upsell1;
