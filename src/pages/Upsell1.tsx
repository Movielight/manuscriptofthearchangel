import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useIsMobile } from "@/hooks/use-mobile";
import Upsell1US from "@/components/upsell/Upsell1US";
import Upsell1International from "@/components/upsell/Upsell1International";

const Upsell1 = () => {
  const { isUS } = useGeoLocation();
  const isMobile = useIsMobile();

  // Show US version only for US users on mobile devices
  const showUSVersion = isUS && isMobile;

  return showUSVersion ? <Upsell1US /> : <Upsell1International />;
};

export default Upsell1;
