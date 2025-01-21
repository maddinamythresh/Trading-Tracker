import {React,useState} from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function LinearGraph() {


    const [clicked, setClicked] = useState(false);

    
    return (
       <>
       {clicked?null:<Display/>} 
       </>
    );
}

const Display=()=>{
    return(
        <div className="flex flex-1 justify-center items-center h-fit bg-gray-800">
 
    <p className="text-gray-500">Search your favorite Crypto  or Click on it </p>
 
     </div>
    )
}


