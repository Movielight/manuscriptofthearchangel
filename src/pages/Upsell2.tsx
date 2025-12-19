import { useGeoLocation } from "@/hooks/useGeoLocation";
import Upsell2US from "@/components/upsell/Upsell2US";
import Upsell2International from "@/components/upsell/Upsell2International";
import ProgressLoader from "@/components/upsell/ProgressLoader";
import { useState } from "react";

const Upsell2 = () => {
  const { isUS } = useGeoLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Show US version for all US users (mobile and desktop)
  if (isUS) {
    if (!loadingComplete) {
      return <ProgressLoader onComplete={() => setLoadingComplete(true)} />;
    }
    return <Upsell2US />;
  }

  // Show international version for everyone else
  return <Upsell2International />;
};

export default Upsell2;
