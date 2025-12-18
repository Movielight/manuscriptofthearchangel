import { useState, useEffect } from "react";

interface GeoData {
  country: string | null;
  isUS: boolean;
  loading: boolean;
  error: string | null;
}

export const useGeoLocation = (): GeoData => {
  // Start with loading: false and default to international (non-US)
  // This ensures instant page load
  const [geoData, setGeoData] = useState<GeoData>({
    country: null,
    isUS: false,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const detectCountry = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout

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
        
        // Only update if user is from US (otherwise already showing correct page)
        if (countryCode === "US") {
          setGeoData({
            country: countryCode,
            isUS: true,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        // Silent fail - already showing international version
        console.log("Geolocation skipped:", error);
      }
    };

    detectCountry();
  }, []);

  return geoData;
};
