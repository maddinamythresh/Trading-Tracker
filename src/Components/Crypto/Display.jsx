import React, { useContext } from "react";
import CryptoContext from "../Crypto/Context/CryptoContext";
import Scroll from "../../GlobalCompoments/Scroll";
import SideBar from "../../GlobalCompoments/SideBar";
import LinearGraph from "../../GlobalCompoments/LinearGraph";
import Graph from "../../GlobalCompoments/Graph";
export default function Display(){

    const crypto = useContext(CryptoContext);

    return(
        <>
                <Scroll/>
                <div className="flex h-screen">
        <SideBar />
        <div className="w-2/3 flex flex-col">
            <Graph/>
          
        </div>
      </div>
        </>
    )
}