import { useState, useEffect } from "react";

import CryptoContext from "./CryptoContext";
export function CryptoProvider({ children }) {
  const [crypto, setCrypto] = useState([]);
  const [error, setError] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched crypto data:", data);
        setCrypto(data);
      } catch (error) {
        setError("Error fetching crypto data");
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCrypto();
  }, []);

  return(
  
  <CryptoContext.Provider value={crypto}>
    {children}
  </CryptoContext.Provider>);
}

export default CryptoProvider;
