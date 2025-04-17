import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="w-[360px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <Bell className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <Settings className="w-4 h-4 text-gray-600" />
          </button>
          <div className="flex items-center space-x-1.5">
            <div className="w-7 h-7 bg-[#0066FF] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">R</span>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 