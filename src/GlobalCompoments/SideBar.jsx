import { useContext } from "react";
import { RiTriangleFill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import CryptoContext from "../Components/Crypto/Context/CryptoContext";

export default function SideBar({ handleCoin }) {
  const crypto = useContext(CryptoContext);

  return (
    <div className="w-full md:w-1/3 bg-gray-900 rounded-br-md p-5 overflow-y-scroll h-screen">
      <div className="text-white flex flex-col gap-5">
        {crypto.map((coin) => (
          <div
            key={coin.id}
            className="flex bg-gray-800 hover:bg-aqua-500 p-4 rounded-lg items-center cursor-pointer transition duration-300"
            onClick={() => handleCoin(coin)}
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-1/4 sm:w-1/5 md:w-1/3 rounded-full" // Responsive image size
            />
            <div className="w-2/3 ml-3"> {/* Added ml-3 for some spacing */}
              <p className="text-center m-2 text-sm md:text-base text-aqua-300 font-bold">
                {coin.name}
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs sm:text-sm md:text-base text-aqua-100 font-semibold">
                  ${coin.current_price?.toLocaleString() || "N/A"}
                </p>
                <div className="flex flex-col md:flex-row items-center text-xs sm:text-sm md:text-base mt-2 md:mt-0">
                  <p className="text-aqua-200">
                    {coin.price_change_percentage_24h > 0 && "+"}
                    {coin.price_change_percentage_24h !== null &&
                    !isNaN(coin.price_change_percentage_24h)
                      ? coin.price_change_percentage_24h.toFixed(2)
                      : "N/A"}{" "}
                    %
                  </p>
                  {coin.price_change_percentage_24h < 0 ? (
                    <TbTriangleInvertedFilled className="align-baseline text-red-400 mt-1 ml-1" />
                  ) : (
                    <RiTriangleFill className="align-baseline text-green-400 mt-1 ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
