import { useState, useCallback } from "react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import Upsell1US from "@/components/upsell/Upsell1US";
import Upsell1International from "@/components/upsell/Upsell1International";
import ProgressLoader from "@/components/upsell/ProgressLoader";

const Upsell1 = () => {
  const { isUS, loading } = useGeoLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

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
      return <ProgressLoader duration={22} onComplete={handleLoadingComplete} />;
    }
    return <Upsell1US />;
  }

  // For everyone else: show international version immediately
  return <Upsell1International />;
};

export default Upsell1;
