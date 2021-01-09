import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function Graphs() {
  const [globalData, setGlobalData] = useState([{}]);
  
  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
      
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      console.log(Object.values(Object.values(data.countryitems)[0]));
    }
    getData();
  },[])
  const lineData = {
    labels: globalData.map((eachData) => eachData.total_cases),
    datasets: [
      {
        label: "Total Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#ce0064",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: globalData.map((eachData) => eachData.total_cases),
      },
      {
        label: "Active Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#7318B4",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: globalData.map((eachData) => eachData.total_active_cases),
      },
      {
        label: "Deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: globalData.map((eachData) => eachData.total_deaths),
      },
      // {
      //   label: "New Cases Today",
      //   fill: false,
      //   lineTension: 0.1,
      //   backgroundColor: "rgba(75,192,192,0.4)",
      //   borderColor: "orange",
      //   borderCapStyle: "butt",
      //   borderDash: [],
      //   borderDashOffset: 0.0,
      //   borderJoinStyle: "miter",
      //   pointBorderColor: "rgba(75,192,192,1)",
      //   pointBackgroundColor: "#fff",
      //   pointBorderWidth: 1,
      //   pointHoverRadius: 5,
      //   pointHoverBackgroundColor: "rgba(75,192,192,1)",
      //   pointHoverBorderColor: "rgba(220,220,220,1)",
      //   pointHoverBorderWidth: 2,
      //   pointRadius: 1,
      //   pointHitRadius: 10,
      //   data: globalData.map((eachData) => eachData.total_new_cases_today),
      // },
      // {
      //   label: "New Deaths Today",
      //   fill: false,
      //   lineTension: 0.1,
      //   backgroundColor: "rgba(75,192,192,0.4)",
      //   borderColor: "red",
      //   borderCapStyle: "butt",
      //   borderDash: [],
      //   borderDashOffset: 0.0,
      //   borderJoinStyle: "miter",
      //   pointBorderColor: "rgba(75,192,192,1)",
      //   pointBackgroundColor: "#fff",
      //   pointBorderWidth: 1,
      //   pointHoverRadius: 5,
      //   pointHoverBackgroundColor: "rgba(75,192,192,1)",
      //   pointHoverBorderColor: "rgba(220,220,220,1)",
      //   pointHoverBorderWidth: 2,
      //   pointRadius: 1,
      //   pointHitRadius: 10,
      //   data: globalData.map((eachData) => eachData.total_new_deaths_today),
      // },
      {
        label: "Total Recovered",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "Yellow",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: globalData.map((eachData) => eachData.total_recovered),
      },
    ],
  };

  

  return (
   
      <div className="lineChart">
        <Line data={lineData} />
      </div>
      
    
  );
};

