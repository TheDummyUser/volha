import { useEffect, useState } from "react";

type Currency = "INR" | "USD";

export default function useLocaleCurrency(): {
  currency: Currency;
  loading: boolean;
} {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("geo lookup failed");
        const data = await res.json();
        if (!cancelled && data?.country_code === "IN") {
          setCurrency("INR");
        }
      } catch {
        // silently fall back to USD
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  return { currency, loading };
}
