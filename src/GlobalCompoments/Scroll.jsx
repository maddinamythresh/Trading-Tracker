import { useContext, useRef, useEffect } from "react";
import CryptoContext from "../Components/Crypto/Context/CryptoContext";
import { RiTriangleFill } from "react-icons/ri";

export default function Scroll() {
  const crypto = useContext(CryptoContext); // Get data from context
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollContent = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!scrollContent || !scrollContainer) return;

      if (scrollContainer.scrollLeft >= scrollContent.offsetWidth / 2) {
        scrollContainer.scrollLeft -= scrollContent.offsetWidth / 2;
      } else {
        scrollContainer.scrollLeft += 1; // Adjust speed here
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="overflow">
      <div
        ref={containerRef}
        className="flex bg-gradient-to-r from-[#06162b] via-[#1a3a5d] to-[#06162b] bg-opacity-70 py-3 overflow-x-scroll custom-scroll overflow-hidden"
        style={{
          width: "100%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          
        }}
        role="region"
        aria-label="Crypto image scroll"
      >
        <div ref={scrollRef} className="flex" style={{ width: "max-content" }}>
          {crypto.map((coin, index) => (
            <div
              key={coin.id || index}
              className="flex items-center gap-3 px-7"
              style={{ flex: "0 0 auto" }}
            >
              <img
                src={coin.image}
                className="w-20 rounded-full shadow-lg"
                alt={coin.name}
              />
              <div className="flex flex-col">
                <p className="text-white text-lg font-semibold">
                  {coin.current_price && !isNaN(coin.current_price)
                    ? coin.current_price.toFixed(2)
                    : "N/A"}{" "}
                  USD
                </p>
                <p className="text-center text-sm text-gray-300">
                  {coin.price_change_percentage_24h &&
                  !isNaN(coin.price_change_percentage_24h)
                    ? coin.price_change_percentage_24h.toFixed(2)
                    : "N/A"}{" "}
                  %
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}