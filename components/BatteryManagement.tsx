import React from 'react';
import { Battery, Clock, Box } from 'lucide-react';

const BatteryManagement: React.FC = () => {
  return (
    <div className="bg-[#1C1C1E] rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Battery className="w-5 h-5 text-green-400" />
          <h2 className="text-lg font-medium">Battery Management</h2>
        </div>
        <button className="text-[#ff6712] text-sm hover:text-[#ff8142]">
          View full report
        </button>
      </div>

      <div className="flex gap-6">
        <div className="flex-shrink-0 w-24">
          <div className="flex flex-col gap-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${
                  i < 8 ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          <div className="mt-2 flex items-center gap-1">
            <div className="text-green-400 text-2xl font-semibold">78%</div>
            <div className="text-sm text-gray-400">Battery</div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="bg-[#2C2C2E] rounded-lg p-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-[#0066FF]" />
                <span className="text-2xl font-semibold">5:30</span>
                <span className="text-gray-400">hours</span>
              </div>
              <div className="text-sm text-gray-400">Max hours remaining</div>
            </div>
          </div>

          <div className="bg-[#2C2C2E] rounded-lg p-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Box className="w-4 h-4 text-[#ff6712]" />
                <span className="text-2xl font-semibold">28.5</span>
                <span className="text-gray-400">/40kWh</span>
              </div>
              <div className="text-sm text-gray-400">Current energy remaining</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-[#2C2C2E] rounded-lg p-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        <span className="text-sm">Load demand is being met</span>
      </div>
    </div>
  );
};

export default BatteryManagement; 