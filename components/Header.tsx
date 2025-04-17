import { FC } from 'react';
import Search from './Search';
import { Bell, Settings } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <Search />
      
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <Bell className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <Settings className="w-4 h-4 text-gray-600" />
        </button>
        <div className="w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-sm font-medium">
          R
        </div>
      </div>
    </header>
  );
};

export default Header; 