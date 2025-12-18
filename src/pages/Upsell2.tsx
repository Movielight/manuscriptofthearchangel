import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useIsMobile } from "@/hooks/use-mobile";
import Upsell2US from "@/components/upsell/Upsell2US";
import Upsell2International from "@/components/upsell/Upsell2International";
import ProgressLoader from "@/components/upsell/ProgressLoader";
import { useState } from "react";

const Upsell2 = () => {
  const { isUS } = useGeoLocation();
  const isMobile = useIsMobile();
  const [loadingComplete, setLoadingComplete] = useState(false);

  const showBlackPage = isUS && isMobile;

  // Show progress loader for US mobile users before revealing black page
  if (showBlackPage && !loadingComplete) {
    return <ProgressLoader onComplete={() => setLoadingComplete(true)} />;
  }

  // Show black page for US mobile users after loading
  if (showBlackPage && loadingComplete) {
    return <Upsell2US />;
  }

  // Show international version for everyone else
  return <Upsell2International />;
};

export default Upsell2;
