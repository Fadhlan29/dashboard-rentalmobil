import React from "react";
import '../styles/ChartDashboardStyles/style.css'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
 
const ChartDashboard = (props) => {
  const {
    title,
    dataNumber,
    percentage,
    years,
    data
  } = props

  return (
    <section className="chart-dashboard">
      <div>
        <div className="title">
          <p>{ title }</p>
        </div>
        <div className="data-number">
          <p>{ dataNumber }</p>
        </div>
        <div className="percentage-years">
          <p className="percentage">{ percentage }</p>
          <p className="years">{ years }</p>
        </div>
      </div>
  
      <div className="chart-wrapper">
        <Line
          data = {{
            labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],  
            datasets: [
              {
                data: data,   
                borderColor: 'blue',  
                borderWidth: 2,       
                fill: false,
                tension: 0.4,    
                pointRadius: 0,      
              },
            ],
          }}
          options = {{
            scales: {
              x: {
                display: false,  
              },
              y: {
                display: false,  
              },
            },
            plugins: {
              legend: {
                display: false, 
              },
            },
          }}/>
      </div>
    </section>
  );
};

export default ChartDashboard;
