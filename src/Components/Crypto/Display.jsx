import React, { useContext, useState } from "react";
import CryptoContext from "../Crypto/Context/CryptoContext";
import Scroll from "../../GlobalCompoments/Scroll";
import SideBar from "../../GlobalCompoments/SideBar";
import LinearGraph from "../../GlobalCompoments/LinearGraph";
import Graph from "../../GlobalCompoments/Graph";

const MemoizedScroll = React.memo(Scroll);
const MemoizedSideBar = React.memo(SideBar);
export default function Display() {
  const crypto = useContext(CryptoContext);
  const [coin, selectedCoin] = useState(null);

  const handleCoin = (coin) => {
    selectedCoin(coin);
  };

  
  return (
    <>
      <MemoizedScroll  />
      <div className="flex h-screen">
        
        <MemoizedSideBar handleCoin={handleCoin} />
        <div className="w-2/3 flex flex-col">
          {coin != null ? (
            <Graph coin={coin.id} />
          ) : (
            <div className="flex flex-1 px-16 justify-center items-center bg-gray-800">
              Click on the coin to see the graph
            </div>
          )}
        </div>
      </div>
    </>
  );
}
