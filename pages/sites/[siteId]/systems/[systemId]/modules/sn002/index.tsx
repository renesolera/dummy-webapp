import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import BatteryManagement from '@/components/BatteryManagement';
import WeatherConditions from '@/components/WeatherConditions';

type Tab = 'overview' | 'manual';

const ModulePage: NextPage = () => {
  const router = useRouter();
  const { siteId, systemId } = router.query;
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  // Handle loading state
  if (!siteId || !systemId) {
    return (
      <div className="dashboard-grid">
        <aside className="dashboard-grid__sidebar">
          <Sidebar />
        </aside>
        <main className="dashboard-grid__main">
          <div className="rt-container rt-r-size-4 rt-r-px-5 rt-r-pb-8">
            <div className="rt-ContainerInner">
              <Header />
              <div className="flex items-center justify-center h-[calc(100vh-64px)]">
                <div className="text-gray-500">Loading...</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Convert IDs to display names
  const siteName = siteId === 'demo-site' ? 'Demo Site' : String(siteId);
  const systemName = systemId === 'system-01' ? 'System 01' : String(systemId);
  const moduleName = 'Module-SN002';
  const moduleVersion = '2.0';

  return (
    <div className="dashboard-grid">
      <Head>
        <title>{moduleName} - {systemName} - {siteName} - Exowatt Dashboard</title>
      </Head>
      <aside className="dashboard-grid__sidebar">
        <Sidebar activePath={`/sites/${siteId}/systems/${systemId}/modules/sn002`} />
      </aside>
      <main className="dashboard-grid__main">
        <div className="rt-container">
          <div className="rt-ContainerInner">
            <header className="header">
              <Header />
            </header>
            
            <section>
              <div className="rt-Box rt-r-mt-6">
                <div className="flex items-center space-x-2 text-sm">
                  <HomeIcon className="w-4 h-4" />
                  <span>{siteName}</span>
                  <span className="text-gray-400">/</span>
                  <span>{systemName}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-[#0066FF]">{moduleName}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-[26px] font-semibold">{moduleName}</h1>
                      <span className="text-sm px-2 py-0.5 bg-gray-100 rounded">Module 2.0</span>
                    </div>
                    <div className="mt-1 flex items-center space-x-2 text-gray-500 text-sm">
                      <span>Riviera Beach, FL</span>
                      <span>81°F</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-12">
                    <div>
                      <div className="text-sm text-gray-600">Operational Mode</div>
                      <div className="mt-1">
                        <div className="text-[#0066FF] font-medium">Automatic</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Emergency Stop</div>
                      <div className="mt-1">
                        <button className="bg-[#FF3B30] text-white rounded px-4 py-1 text-sm flex items-center gap-2">
                          STOP
                          <div className="w-2.5 h-2.5 bg-white rounded"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-b">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`pb-3 mr-6 -mb-px font-medium ${
                      activeTab === 'overview' 
                        ? 'text-[#0066FF] border-b-2 border-[#0066FF]' 
                        : 'text-gray-500'
                    }`}
                  >
                    Module Performance
                  </button>
                  <button 
                    onClick={() => setActiveTab('manual')}
                    className={`pb-3 font-medium ${
                      activeTab === 'manual' 
                        ? 'text-[#0066FF] border-b-2 border-[#0066FF]' 
                        : 'text-gray-500'
                    }`}
                  >
                    Manual Mode
                  </button>
                </div>

                <div className="mt-6">
                  {activeTab === 'overview' ? (
                    <div className="grid grid-cols-2 gap-6">
                      <BatteryManagement />
                      <WeatherConditions />
                    </div>
                  ) : (
                    <div className="text-gray-500">Manual Mode content will be added later</div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModulePage; 