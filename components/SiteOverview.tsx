import React, { useState } from 'react';
import { SiteData } from '@/types';

interface SiteOverviewProps {
  data: SiteData;
}

type SystemState = {
  solar: string;
  storage: string;
  pcu: string;
  grid: string;
};

const systemStates: Record<string, SystemState> = {
  'Dawn - Transitioning from Night to Day': {
    solar: '385 W/m²',
    storage: '45% SoC',
    pcu: '1.2 kW',
    grid: '0 W',
  },
  'Mid-Day - Full Sun, Fully Functioning System': {
    solar: '1085 W/m²',
    storage: '76% SoC',
    pcu: '3.6 kW',
    grid: '0 W',
  },
  'Mid-Day - Full Sun, Battery Charging Only': {
    solar: '1085 W/m²',
    storage: '82% SoC',
    pcu: '2.8 kW',
    grid: '0 W',
  },
  'Dusk - Transitioning from Day to Night': {
    solar: '280 W/m²',
    storage: '68% SoC',
    pcu: '1.8 kW',
    grid: '0 W',
  },
  'Night - No Sun, Discharging': {
    solar: '0 W/m²',
    storage: '52% SoC',
    pcu: '2.2 kW',
    grid: '0 W',
  },
  'Night - No Sun, Conserving Battery (Engine Off)': {
    solar: '0 W/m²',
    storage: '35% SoC',
    pcu: '0.8 kW',
    grid: '0 W',
  },
  'Grid Charging - Insufficient Solar Resource': {
    solar: '125 W/m²',
    storage: '28% SoC',
    pcu: '1.5 kW',
    grid: '2.4 kW',
  },
  'eStop Mode': {
    solar: '0 W/m²',
    storage: '65% SoC',
    pcu: '0 kW',
    grid: '0 W',
  },
  'Stow Mode': {
    solar: '0 W/m²',
    storage: '70% SoC',
    pcu: '0 kW',
    grid: '0 W',
  },
};

const SiteOverview: React.FC<SiteOverviewProps> = ({ data }) => {
  const [selectedState, setSelectedState] = useState<string>('Mid-Day - Full Sun, Fully Functioning System');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentValues = systemStates[selectedState];

  return (
    <div className="bg-white p-6 rounded-xl">
      <style jsx>{`
        @keyframes moveDot {
          0% {
            left: 0;
          }
          100% {
            left: calc(100% - 6px);
          }
        }
        .line-container {
          position: absolute;
          top: 56px;
          height: 2px;
          overflow: visible;
        }
        .animated-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          animation: moveDot 2s infinite linear;
        }
      `}</style>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-lg font-semibold">System Overview</h2>
        </div>
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
          >
            Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              {Object.keys(systemStates).map((state) => (
                <button
                  key={state}
                  className="w-full text-left px-3 py-1 text-xs hover:bg-gray-100 focus:outline-none"
                  onClick={() => {
                    setSelectedState(state);
                    setIsDropdownOpen(false);
                  }}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="relative w-full px-12 py-8 pb-32">
        <div className="grid grid-cols-4 gap-24 mb-24">
          {/* Solar Icon */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center border-2 border-yellow-500">
              <div className="text-white text-xs mb-2">Solar</div>
              <svg className="w-8 h-8 text-yellow-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
              </svg>
              <div className="text-yellow-500 text-xs mt-1">{currentValues.solar}</div>
            </div>
            <div className="line-container left-[112px] w-[268px] bg-yellow-500">
              <div className="animated-dot bg-yellow-500"></div>
            </div>
          </div>

          {/* Storage Icon */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center border-2 border-green-500">
              <div className="text-white text-xs mb-2">Storage</div>
              <svg className="w-8 h-8 text-green-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 18h16c1.1 0 2-.9 2-2v-2H2v2c0 1.1.9 2 2 2zM2 12h20V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6z" />
              </svg>
              <div className="text-green-500 text-xs mt-1">{currentValues.storage}</div>
            </div>
            <div className="line-container left-[112px] w-[268px] bg-green-500">
              <div className="animated-dot bg-green-500"></div>
            </div>
            <div className="absolute top-[112px] left-[56px] w-[2px] h-[80px] bg-blue-500"></div>
          </div>

          {/* PCU Icon */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center border-2" style={{ borderColor: '#ff6413' }}>
              <div className="text-white text-xs mb-2">PCU</div>
              <svg className="w-8 h-8 mb-1" style={{ color: '#ff6413' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-xs mt-1" style={{ color: '#ff6413' }}>{currentValues.pcu}</div>
            </div>
            <div className="line-container left-[112px] w-[268px]" style={{ backgroundColor: '#ff6413' }}>
              <div className="animated-dot" style={{ backgroundColor: '#ff6413' }}></div>
            </div>
          </div>

          {/* Load Icon */}
          <div>
            <div className="w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center">
              <div className="text-white text-xs mb-2">Load</div>
              <svg className="w-8 h-8 text-white mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid Icon */}
        <div className="absolute" style={{ left: 'calc(33.33% - 78px)', top: '224px' }}>
          <div className="w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center border-2 border-blue-500">
            <div className="text-white text-xs mb-2">Grid</div>
            <svg className="w-8 h-8 text-blue-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-3.18C8.16 11.4 9 10.3 9 9s-.84-2.4-2-2.82V2H5v4.18C3.84 6.6 3 7.7 3 9s.84 2.4 2 2.82V15c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82z" />
            </svg>
            <div className="text-white text-xs mt-1">{currentValues.grid}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteOverview; 