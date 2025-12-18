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
      try {
        // Using ipapi.co free tier for geolocation
        const response = await fetch("https://ipapi.co/json/");
        
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
        console.error("Geolocation error:", error);
        // Default to non-US on error
        setGeoData({
          country: null,
          isUS: false,
          loading: false,
          error: "Could not detect location",
        });
      }
    };

    detectCountry();
  }, []);

  return geoData;
};
