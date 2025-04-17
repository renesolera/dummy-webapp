import { FC } from 'react';
import Link from 'next/link';
import { LayoutGrid, Home, Box } from 'lucide-react';

interface SidebarProps {
  activePath?: string;
}

const Sidebar: FC<SidebarProps> = ({ activePath = '' }) => {
  const isActive = (path: string) => activePath.startsWith(path);

  return (
    <div className="w-64 text-white h-screen flex flex-col">
      {/* Logo section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <img
            src="/exowatt-logo.svg"
            alt="Exowatt Logo"
            className="h-7"
          />
          <span className="ml-2 text-lg leading-none">EXOWATT</span>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-400 mb-4">SITES</div>
        
        <nav className="space-y-2">
          {/* Exowatt Ranch */}
          <div className="relative">
            <Link 
              href="/sites/exowatt-ranch"
              className={`flex items-center space-x-3 px-3 py-1.5 ${
                isActive('/sites/exowatt-ranch') ? 'text-[#0066FF]' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Exowatt Ranch</span>
            </Link>

            {/* System */}
            <div className="ml-[18px] mt-1">
              <div className="relative flex items-center">
                <div className="absolute left-0 -top-3 h-6 w-3 border-l border-b border-gray-700"></div>
                <Link 
                  href="/sites/exowatt-ranch/systems/system"
                  className={`flex items-center pl-4 ${
                    isActive('/sites/exowatt-ranch/systems/system') ? 'text-[#0066FF]' : 'text-gray-300 hover:text-gray-100'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="ml-2">System</span>
                </Link>
              </div>

              {/* SN001 and SN002 */}
              <div className="ml-3">
                {['sn001', 'sn002'].map((sn, index) => (
                  <div key={sn} className="relative flex items-center mt-1">
                    <div className="absolute left-0 -top-2 h-6 w-3 border-l border-b border-gray-700"></div>
                    <Link
                      href={`/sites/exowatt-ranch/systems/system/modules/${sn}`}
                      className={`flex items-center pl-4 ${
                        isActive(`/sites/exowatt-ranch/systems/system/modules/${sn}`) 
                          ? 'text-[#0066FF]' 
                          : 'text-gray-300 hover:text-gray-100'
                      }`}
                    >
                      <Box className="w-4 h-4" />
                      <span className="ml-2">{sn.toUpperCase()}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Site */}
          <div className="relative mt-2">
            <Link 
              href="/sites/demo-site"
              className={`flex items-center space-x-3 px-3 py-1.5 ${
                isActive('/sites/demo-site') ? 'text-[#0066FF]' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Demo Site</span>
            </Link>

            {/* Systems container with continuous line */}
            <div className="ml-[18px] relative">
              {/* Continuous vertical line */}
              <div className="absolute left-0 top-0 bottom-0 border-l border-gray-700"></div>

              {/* System 01 */}
              <div className="relative">
                <div className="relative flex items-center mt-1">
                  <div className="absolute left-0 top-1/2 w-3 border-b border-gray-700"></div>
                  <Link 
                    href="/sites/demo-site/systems/system-01"
                    className={`flex items-center pl-4 ${
                      isActive('/sites/demo-site/systems/system-01') ? 'text-[#0066FF]' : 'text-gray-300 hover:text-gray-100'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span className="ml-2">System 01</span>
                  </Link>
                </div>

                {/* Modules */}
                <div className="ml-3">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="relative flex items-center mt-1">
                      <div className="absolute left-0 -top-2 h-6 w-3 border-l border-b border-gray-700"></div>
                      <Link
                        href={`/sites/demo-site/systems/system-01/modules/module-${String(i + 1).padStart(2, '0')}`}
                        className={`flex items-center pl-4 ${
                          isActive(`/sites/demo-site/systems/system-01/modules/module-${String(i + 1).padStart(2, '0')}`) 
                            ? 'text-[#0066FF]' 
                            : 'text-gray-300 hover:text-gray-100'
                        }`}
                      >
                        <Box className="w-4 h-4" />
                        <span className="ml-2">Module {String(i + 1).padStart(2, '0')}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* System 02 */}
              <div className="relative">
                <div className="relative flex items-center mt-1">
                  <div className="absolute left-0 top-1/2 w-3 border-b border-gray-700"></div>
                  <Link 
                    href="/sites/demo-site/systems/system-02"
                    className={`flex items-center pl-4 ${
                      isActive('/sites/demo-site/systems/system-02') ? 'text-[#0066FF]' : 'text-gray-300 hover:text-gray-100'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span className="ml-2">System 02</span>
                  </Link>
                </div>

                {/* Modules */}
                <div className="ml-3">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="relative flex items-center mt-1">
                      <div className="absolute left-0 -top-2 h-6 w-3 border-l border-b border-gray-700"></div>
                      <Link
                        href={`/sites/demo-site/systems/system-02/modules/module-${String(i + 1).padStart(2, '0')}`}
                        className={`flex items-center pl-4 ${
                          isActive(`/sites/demo-site/systems/system-02/modules/module-${String(i + 1).padStart(2, '0')}`) 
                            ? 'text-[#0066FF]' 
                            : 'text-gray-300 hover:text-gray-100'
                        }`}
                      >
                        <Box className="w-4 h-4" />
                        <span className="ml-2">Module {String(i + 1).padStart(2, '0')}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 