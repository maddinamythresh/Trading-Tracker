import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
import CryptoContext from "../Components/Crypto/Context/CryptoContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

export default function Graph({coin}) {
  const [chartData, setChartData] = useState(null);
  const crypto = useContext(CryptoContext);
  const [days,setDays]=useState(1);


  

  // Internal FetchData function
  async function FetchData(id, day) {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`;
    const params = {
      method: "GET",
      headers: {
        'x-cg-api-key': 'CG-858LDupJEEfGbpBnVKdjzijY',
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  console.log(coin)
  useEffect(() => {
    async function fetchChartData() {
      const result = await FetchData(coin, days); 
      console.log("Fetchednj",result); // Call FetchData internally
      if (result && result.prices) {
        const labels = result.prices.map(item =>
          new Date(item[0]).toLocaleTimeString()
        ); // X-axis labels
        const values = result.prices.map(item => item[1]); // Y-axis values

        setChartData({
          labels: labels,
          datasets: [
            {
              label: `${coin} Price`,
              data: values,
              borderColor: "rgba(75,192,192,1)", // Line color
              fill: true,
              backgroundColor: "rgba(75,192,192,0.1)",
              tension: 0.1,
              pointRadius: 0,
              pointHitRadius: 10,
              pointHoverRadius: 5,
            },
          ],
        });
      }
    }
    fetchChartData();
  }, [coin]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white",
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            return `Price: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
          callback: function (value) {
            return value;
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
    
    <div className="flex flex-col flex-1 justify-evenly  px-16  bg-gray-800 ">
     
      {chartData ? (
        <div className="border flex-2  border-gray-950 " style={{ width: "100%", height: "70%" }}>
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
    
  );
}
