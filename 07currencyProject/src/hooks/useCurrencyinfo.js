import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) {
            setData({});
            return;
        }

        const fetchCurrencyData = async () => {
            try {
                // Primary API
                const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

                const response = await fetch(primaryUrl);

                if (!response.ok) {
                    throw new Error("Primary API failed");
                }

                const result = await response.json();

                setData(result[currency] || {});
            } catch (error) {
                console.log(
                    "Primary API failed. Trying fallback API..."
                );

                try {
                    // Fallback API
                    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

                    const response = await fetch(fallbackUrl);

                    if (!response.ok) {
                        throw new Error("Fallback API failed");
                    }

                    const result = await response.json();

                    setData(result[currency] || {});
                } catch (fallbackError) {
                    console.error(
                        "Currency API Error:",
                        fallbackError
                    );

                    setData({});
                }
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;