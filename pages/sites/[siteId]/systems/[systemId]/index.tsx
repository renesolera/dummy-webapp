import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SiteOverview from '@/components/SiteOverview';
import GenerationChart from '@/components/GenerationChart';
import ManualMode from '@/components/ManualMode';
import SystemModules from '@/components/SystemModules';
import { mockSiteData } from '@/lib/data';

type Tab = 'overview' | 'manual';

interface ModuleData {
  id: string;
  displayName: string;
  batteryLevel: number;
  power: number;
  temperature: number;
}

const SystemPage: NextPage = () => {
  const router = useRouter();
  const { siteId, systemId } = router.query;
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [moduleValues, setModuleValues] = useState<Record<string, ModuleData>>({});

  // Function to generate random value within 10% of base value
  const randomizeValue = (baseValue: number) => {
    const variation = baseValue * 0.1; // 10% of base value
    const randomOffset = (Math.random() * variation * 2) - variation; // Random value between -10% and +10%
    return Math.round(baseValue + randomOffset);
  };

  // Load or generate module values
  useEffect(() => {
    if (siteId && systemId) {
      const storageKey = `moduleValues-${siteId}-${systemId}`;
      const storedValues = localStorage.getItem(storageKey);
      
      if (storedValues) {
        setModuleValues(JSON.parse(storedValues));
      } else {
        const newValues: Record<string, ModuleData> = {};
        
        // Generate values for each module type
        if (siteId === 'exowatt-ranch') {
          ['sn001', 'sn002'].forEach(id => {
            newValues[id] = {
              id,
              displayName: id.toUpperCase(),
              batteryLevel: randomizeValue(55),
              power: randomizeValue(22),
              temperature: randomizeValue(880),
            };
          });
        } else if (systemId === 'system-01') {
          Array.from({ length: 8 }).forEach((_, i) => {
            const id = `module-${String(i + 1).padStart(2, '0')}`;
            newValues[id] = {
              id,
              displayName: `Module ${String(i + 1).padStart(2, '0')}`,
              batteryLevel: randomizeValue(55),
              power: randomizeValue(22),
              temperature: randomizeValue(880),
            };
          });
        } else if (systemId === 'system-02') {
          Array.from({ length: 7 }).forEach((_, i) => {
            const id = `module-${String(i + 1).padStart(2, '0')}`;
            newValues[id] = {
              id,
              displayName: `Module ${String(i + 1).padStart(2, '0')}`,
              batteryLevel: randomizeValue(55),
              power: randomizeValue(22),
              temperature: randomizeValue(880),
            };
          });
        }
        
        setModuleValues(newValues);
        localStorage.setItem(storageKey, JSON.stringify(newValues));
      }
    }
  }, [siteId, systemId]);

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

  // Get module data from stored values
  const getModuleData = () => {
    if (!moduleValues) return [];
    return Object.values(moduleValues);
  };

  // Convert systemId to display name
  const systemName = String(systemId).split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="dashboard-grid">
      <Head>
        <title>{systemName} - Exowatt Dashboard</title>
      </Head>
      <aside className="dashboard-grid__sidebar">
        <Sidebar activePath={`/sites/${siteId}/systems/${systemId}`} />
      </aside>
      <main className="dashboard-grid__main">
        <div className="rt-container">
          <div className="rt-ContainerInner">
            <header className="header">
              <Header />
            </header>
            
            <section>
              <div className="rt-Box rt-r-mt-6">
                <div className="rt-Flex rt-r-ai-center rt-r-jc-space-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <HomeIcon className="w-4 h-4" />
                    <span>{systemName}</span>
                  </div>
                </div>

                <div className="rt-Flex rt-r-ai-center rt-r-jc-space-between rt-r-mt-4">
                  <div>
                    <h1 className="rt-Heading rt-r-size-6 rt-r-mt-3 rt-r-mb-1">{systemName}</h1>
                    <div className="rt-Flex site-header-metadata space-x-2 text-gray-500">
                      <span>Miami</span>
                      <span>81°F</span>
                    </div>
                  </div>
                  
                  <div className="rt-Flex rt-r-ai-center rt-r-gap-12">
                    <div>
                      <div className="text-sm text-gray-600">Operational Mode</div>
                      <div className="rt-r-mt-1">
                        <div className="text-[#0066FF] font-medium">Automatic</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Emergency Stop</div>
                      <div className="rt-r-mt-1">
                        <button className="bg-[#FF3B30] text-white rounded px-4 py-1 text-sm flex items-center gap-2">
                          STOP
                          <div className="w-2.5 h-2.5 bg-white rounded"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rt-Flex rt-r-mt-6 border-b">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`pb-3 mr-6 -mb-px font-medium ${
                      activeTab === 'overview' 
                        ? 'text-[#0066FF] border-b-2 border-[#0066FF]' 
                        : 'text-gray-500'
                    }`}
                  >
                    System Overview
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

                <div className="mt-8">
                  {activeTab === 'overview' ? (
                    <>
                      <h2 className="text-xl font-semibold mb-4">Site Performance</h2>
                      <SiteOverview data={mockSiteData} />
                      <div className="mt-6">
                        <GenerationChart data={mockSiteData} />
                      </div>
                    </>
                  ) : (
                    <ManualMode />
                  )}
                </div>

                <div className="mt-8">
                  <SystemModules 
                    modules={getModuleData()}
                    siteId={String(siteId)}
                    systemId={String(systemId)}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SystemPage; 