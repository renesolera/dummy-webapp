import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Home as HomeIcon } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SiteOverview from '@/components/SiteOverview';
import GenerationChart from '@/components/GenerationChart';
import SiteSystems from '@/components/SiteSystems';
import { mockSiteData, mockSiteSystemsData } from '@/lib/data';

const SitePage: NextPage = () => {
  const router = useRouter();
  const { siteId } = router.query;

  // Handle loading state
  if (!siteId) {
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
  
  // Convert siteId to display name (you would typically fetch this from an API)
  const siteName = siteId === 'exowatt-ranch' ? 'Exowatt Ranch' : 
                   siteId === 'demo-site' ? 'Demo Site' : 
                   String(siteId);

  return (
    <div className="dashboard-grid">
      <Head>
        <title>{siteName} - Exowatt Dashboard</title>
      </Head>
      <aside className="dashboard-grid__sidebar">
        <Sidebar activePath={`/sites/${siteId}`} />
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
                    <span>{siteName}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Site Performance</h2>
                  <SiteOverview data={mockSiteData} />
                </div>
              </div>

              <div className="rt-Box rt-r-mt-4">
                <div className="space-y-6">
                  {/* Generation Chart */}
                  <GenerationChart data={mockSiteData} />
                  
                  {/* Site Systems */}
                  <div className="mt-6">
                    <SiteSystems 
                      systems={mockSiteSystemsData[siteId as keyof typeof mockSiteSystemsData] || []} 
                      siteId={String(siteId)}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SitePage; 