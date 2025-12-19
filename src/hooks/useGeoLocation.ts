import { useState, useEffect } from "react";

interface GeoData {
  country: string | null;
  isUS: boolean;
  loading: boolean;
  error: string | null;
}

export const useGeoLocation = (): GeoData => {
  const [geoData, setGeoData] = useState<GeoData>({
    country: null,
    isUS: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const detectCountry = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error("Failed to fetch location");
        }
        
        const data = await response.json();
        const countryCode = data.country_code || data.country;
        
        setGeoData({
          country: countryCode,
          isUS: countryCode === "US",
          loading: false,
          error: null,
        });
      } catch (error) {
        // On error, default to international version
        setGeoData({
          country: null,
          isUS: false,
          loading: false,
          error: "Failed to detect location",
        });
      }
    };

    detectCountry();
  }, []);

  return geoData;
};
