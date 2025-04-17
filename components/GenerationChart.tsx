import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface GenerationChartProps {
  data: any;
}

const GenerationChart: React.FC<GenerationChartProps> = () => {
  // Get dates for the last 10 days
  const getDates = () => {
    const dates = [];
    for (let i = 9; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
    }
    return dates;
  };

  // Get formatted date range string
  const getDateRange = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 9);
    return `${startDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}`;
  };

  const chartData = {
    labels: getDates(),
    datasets: [
      {
        label: 'Generation (kWh)',
        data: [75, 85, 90, 95, 98, 95, 92, 88, 85, 79],
        backgroundColor: '#ff3a2d',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 5
        }
      },
      y: {
        min: 0,
        max: 110,
        ticks: {
          stepSize: 10,
          padding: 5
        },
        grid: {
          color: '#f0f0f0',
        },
        border: {
          display: false,
        },
      },
    },
    barPercentage: 0.6,
    categoryPercentage: 0.92,
    layout: {
      padding: {
        left: 10,
        right: 10
      }
    }
  } as const;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5" style={{ color: '#ff3a2d' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <defs>
                <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#ff6215" />
                  <stop offset="100%" stopColor="#ff3a2d" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="12" fillOpacity="0.2" />
              <circle cx="12" cy="12" r="6" fill="url(#barGradient)" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Generation</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Date Range:</span>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50 flex items-center gap-2">
            {getDateRange()}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex gap-8">
        <div className="flex flex-col justify-start pt-4 w-32">
          <div className="text-sm text-gray-500">Today</div>
          <div className="text-4xl font-semibold flex items-baseline">
            79
            <span className="text-base font-normal text-gray-500 ml-1">kWh</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="h-64">
            <Bar data={{
              ...chartData,
              datasets: [{
                ...chartData.datasets[0],
                backgroundColor: function(context: any) {
                  const chart = context.chart;
                  const {ctx, chartArea} = chart;
                  if (!chartArea) {
                    return null;
                  }
                  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                  gradient.addColorStop(0, '#ff6215');
                  gradient.addColorStop(1, '#ff3a2d');
                  return gradient;
                }
              }]
            }} options={options} />
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        Capacity: 104 kWh / Day
      </div>
    </div>
  );
};

export default GenerationChart; 