import React, { useState } from 'react';

const ManualMode: React.FC = () => {
  const [power, setPower] = useState('7000');
  const maxPower = 7500;

  const handleSetPower = () => {
    // Here you would typically make an API call to set the power
    console.log('Setting power to:', power);
  };

  // Calculate the angle for the gauge (255 degrees total range, leaving 105 degrees gap)
  const calculateGaugeAngle = () => {
    const percentage = (Number(power) / maxPower);
    return percentage * 255; // 0 to 255 degrees range
  };

  // Generate notch markers
  const generateNotches = () => {
    const notches = [];
    const totalNotches = 11;
    const arcLength = 255; // degrees
    const startAngle = -122.5 - 90; // Adjust for SVG rotation
    
    for (let i = 0; i < totalNotches - 1; i++) {
      const angle = startAngle + (i * (arcLength / (totalNotches - 1)));
      const radians = (angle * Math.PI) / 180;
      const innerRadius = 40;
      const outerRadius = 45;
      
      // Calculate start and end points of the notch
      const x1 = 50 + innerRadius * Math.cos(radians);
      const y1 = 50 + innerRadius * Math.sin(radians);
      const x2 = 50 + outerRadius * Math.cos(radians);
      const y2 = 50 + outerRadius * Math.sin(radians);
      
      notches.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#eee"
          strokeWidth="2"
          strokeLinecap="round"
          transform="rotate(180 50 50)"
        />
      );
    }
    return notches;
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <h2 className="text-xl font-semibold mb-2">Manual Mode</h2>
      <p className="text-gray-600 mb-8">Control the system manually by adjusting the power output</p>

      <div className="bg-white rounded-xl border p-8">
        <div className="flex justify-between">
          <div className="w-[50%]">
            <div>
              <h3 className="font-medium mb-1">Heat engine power</h3>
              <p className="text-sm text-gray-600 mb-4">Manually set the power level of the heat engine</p>
              
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                  className="flex-1 border rounded px-3 py-1.5"
                  placeholder="Enter power"
                />
                <button
                  onClick={handleSetPower}
                  className="bg-[#ff6712] text-white px-4 py-1.5 rounded text-sm"
                >
                  Set
                </button>
              </div>
              
              <div className="border-b w-[90%] mb-6"></div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">At Power</span>
                  <span>{power} W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Runtime</span>
                  <span>5 hrs 21 minutes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[45%] bg-white rounded-lg border p-6">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="font-medium mb-4">Current power</h3>
                <div className="relative w-64 h-64 mx-auto">
                  <svg className="w-full h-full transform rotate-180" viewBox="0 0 100 100">
                    {/* Background arc */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="235.5 100"
                      strokeDashoffset="-50"
                      transform="rotate(-122.5 50 50)"
                    />
                    {/* Notch markers */}
                    {generateNotches()}
                    {/* Power indicator */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ff6712"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${calculateGaugeAngle() * 1.41} 1000`}
                      strokeDashoffset="-50"
                      transform="rotate(-122.5 50 50)"
                    />
                    {/* End dot */}
                    <circle
                      cx="50"
                      cy="5"
                      r="3"
                      fill="#ff6712"
                      transform={`rotate(${calculateGaugeAngle() - 90} 50 50)`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-semibold">{power}W</span>
                    <div className="absolute bottom-2 w-full flex justify-between px-4 text-xs text-gray-500">
                      <span>0W</span>
                      <span>{maxPower}W</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Estimated Runtime</span>
                  <span>5 hrs 21 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Module Energy</span>
                  <span>37.5 kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualMode; 