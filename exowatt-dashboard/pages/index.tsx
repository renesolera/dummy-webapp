import type { NextPage } from 'next';
import Head from 'next/head';
import { Home as HomeIcon } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SiteOverview from '@/components/SiteOverview';
import GenerationChart from '@/components/GenerationChart';
import { mockSiteData } from '@/lib/data';

const Home: NextPage = () => {
  return (
    <div className="dashboard-grid">
      <aside className="dashboard-grid__sidebar">
        <Sidebar />
      </aside>
      <main className="dashboard-grid__main">
        <div className="rt-container rt-r-size-4 rt-r-px-5 rt-r-pb-8">
          <div className="rt-ContainerInner">
            <header className="header">
              <Header />
            </header>
            
            <section>
              <div className="rt-Box rt-r-mt-6">
                <div className="rt-Flex rt-r-ai-center rt-r-jc-space-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <HomeIcon className="w-4 h-4" />
                    <span>Exowatt Ranch</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#0066FF]">System</span>
                  </div>
                </div>

                <div className="rt-Flex rt-r-ai-center rt-r-jc-space-between rt-r-mt-4">
                  <div>
                    <h1 className="rt-Heading rt-r-size-6 rt-r-mt-3 rt-r-mb-1">System</h1>
                    <div className="rt-Flex site-header-metadata">
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
                  <button className="text-[#0066FF] border-b-2 border-[#0066FF] pb-3 mr-6 -mb-px font-medium">
                    System Overview
                  </button>
                  <button className="text-gray-500 pb-3">
                    Manual Mode
                  </button>
                </div>
              </div>

              <div className="rt-Box rt-r-mt-4">
                <div className="space-y-6">
                  {/* Site Overview */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6">
                      <h2 className="rt-Heading rt-r-size-6 rt-r-mt-3 rt-r-mb-2">System Performance</h2>
                      <SiteOverview data={mockSiteData} />
                    </div>
                  </div>

                  {/* Generation Chart */}
                  <GenerationChart data={mockSiteData} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home; 