import { useContext } from "react";
import { RiTriangleFill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import CryptoContext from "../Components/Crypto/Context/CryptoContext";

export default function SideBar({ handleCoin }) {
  const crypto = useContext(CryptoContext);

  return (
    <div className="w-full md:w-1/3 bg-[#06162b] bg-opacity-25 rounded-br-md p-5 overflow-y-scroll h-screen">
      <div className="text-white flex flex-col gap-5">
        {crypto.map((coin) => (
          <div
            key={coin.id}
            className="flex bg-[#2c3e50] bg-opacity-80 p-[3%] rounded items-center cursor-pointer"
            onClick={() => handleCoin(coin)}
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-1/4 sm:w-1/5 md:w-1/3 rounded-full"  // Responsive image size
            />
            <div className="w-2/3 ml-3"> {/* Added ml-3 for some spacing */}
              <p className="text-center m-2 text-sm md:text-base">{coin.name}</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs sm:text-sm md:text-base">{coin.current_price}</p>
                <div className="flex flex-col md:flex-row items-center text-xs sm:text-sm md:text-base mt-2 md:mt-0">
                  <p>
                    {coin.price_change_percentage_24h > 0 && "+"}
                    {coin.price_change_percentage_24h !== null &&
                    !isNaN(coin.price_change_percentage_24h)
                      ? coin.price_change_percentage_24h.toFixed(2)
                      : "N/A"}{" "}
                    %
                  </p>
                  {coin.price_change_percentage_24h < 0 ? (
                    <TbTriangleInvertedFilled className="align-baseline text-red-500 mt-1 ml-1" />
                  ) : (
                    <RiTriangleFill className="align-baseline text-green-500 mt-1 ml-1" />
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
