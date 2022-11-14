import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export default function ChartCard({chartData, chartColors}) {
  return (
    <div className='shifts-status-chart-wrap d-flex justify-content-center align-items-center p-3'>
        <div className='shifts-status-chart me-5'>
            <Doughnut data={chartData} />
        </div>
        <div className='labels'>
            <h5>Shifts Status</h5>
            <div>
                <span style={{backgroundColor: chartColors[0]}}></span> {chartData.labels[0]}
            </div>
            <div>
                <span style={{backgroundColor: chartColors[1]}}></span> {chartData.labels[1]}
            </div>
            <div>
                <span style={{backgroundColor: chartColors[2]}}></span> {chartData.labels[2]}
            </div>
            <div>
                <span style={{backgroundColor: chartColors[3]}}></span> {chartData.labels[3]}
            </div>
        </div>
    </div>
  )
}
