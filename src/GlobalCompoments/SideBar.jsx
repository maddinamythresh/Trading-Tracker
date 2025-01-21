import { useContext } from "react";
import CryptoContext from "../Components/Crypto/Context/CryptoContext";
import { RiTriangleFill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";
export default function SideBar() {
  const crypto = useContext(CryptoContext);

  return (
    <div className="w-1/3 bg-[#06162b] bg-opacity-25 rounded-br-md p-5 overflow-y-scroll h-screen">
      <div className="text-white flex flex-col gap-5">
        {crypto.map((coin) => (
          <div
            key={coin.id}
            className="flex bg-[#2c3e50] bg-opacity-80 p-[3%] rounded items-center"
          >
            <img src={coin.image} alt={coin.name} className="w-1/3 rounded-full" />
            <div className="w-2/3">
              <p className="text-center m-2">{coin.name}</p>
              <div className="flex justify-evenly">

                <p>{coin.current_price}</p>
                <div className="flex">
                <p>{coin.price_change_percentage_24h>0 && "+"}{coin.price_change_percentage_24h.toFixed(2)}% </p>
                {coin.price_change_percentage_24h<0 ? <TbTriangleInvertedFilled className="align-baseline text-red-500 mt-1"/>:
                <RiTriangleFill className="align-baseline text-green-500 mt-1"/>}
                </div>
              </div>
              

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
