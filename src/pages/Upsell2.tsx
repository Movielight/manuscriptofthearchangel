import { useGeoLocation } from "@/hooks/useGeoLocation";
import Upsell2US from "@/components/upsell/Upsell2US";
import Upsell2International from "@/components/upsell/Upsell2International";
import ProgressLoader from "@/components/upsell/ProgressLoader";
import { useState } from "react";

const Upsell2 = () => {
  const { isUS, loading } = useGeoLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Show loading while detecting geolocation
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
