import React from 'react';

const ControlPanel: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4" style={{ color: '#ff3a2d' }}>Control Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Power Generation</p>
          <p className="text-xl font-bold text-gray-800">1.2 MW</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Battery Level</p>
          <p className="text-xl font-bold text-gray-800">85%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Grid Status</p>
          <p className="text-xl font-bold text-gray-800">Connected</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">System Health</p>
          <p className="text-xl font-bold text-gray-800">Good</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold shadow-md">
          Emergency Stop
        </button>
      </div>
    </div>
  );
};

export default ControlPanel; 