import React from 'react';
import { Cloud, Sun, Wind, Thermometer } from 'lucide-react';

const WeatherConditions: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-medium">Weather Conditions</h2>
        </div>
        <button className="text-[#0066FF] text-sm hover:text-blue-500">
          View full report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Sun className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-center">
            <div className="font-medium">SOLAR</div>
            <div className="text-sm text-gray-600">550 W/m</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Cloud className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-center">
            <div className="font-medium">MAX DNI</div>
            <div className="text-sm text-gray-600">#W/m²</div>
            <div className="bg-[#FFD700] text-xs px-2 py-0.5 rounded mt-1">NORMAL</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Wind className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-center">
            <div className="font-medium">WIND</div>
            <div className="text-sm text-gray-600">0.5 m/s</div>
            <div className="text-xs text-gray-500 mt-1">90° East</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Thermometer className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-center">
            <div className="font-medium">TEMP</div>
            <div className="text-sm text-gray-600">28°C</div>
            <div className="text-xs text-gray-500 mt-1">82.4°F</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditions; 