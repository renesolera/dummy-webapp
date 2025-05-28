import { SiteData } from '@/types'; 
import type { SystemData } from '@/components/SiteSystems'; 
 
// Helper function to get dates for the last 7 days 
const getLast7Days = () => { 
  const dates = []; 
  for (let i = 6; i >= 0; i--) { 
    const date = new Date(); 
    date.setDate(date.getDate() - i); 
    dates.push(date.toISOString().split('T')[0]); 
  } 
  return dates; 
};
 
export const mockSiteData = { 
  solar: { 
    power: '298 W/m²', 
    status: 'active' 
  }, 
  storage: { 
    soc: '14%', 
    status: 'charging' 
  }, 
  pcu: { 
    power: '0 W', 
    status: 'idle' 
  }, 
  grid: { 
    power: '0 W', 
    status: 'connected' 
  }, 
  load: { 
    power: '0 W', 
    status: 'normal' 
  } 
};
 
// Define a default system for any site ID 
const defaultSystem = { 
  health: 'good' as const, 
  name: 'System 01', 
  stateOfCharge: '76% / 9.5 kWhe', 
  activePower: '3.6 kW', 
  performance: 'Ok' as const 
}; 
 
export const mockSiteSystemsData = { 
  'exowatt-ranch': [ 
    { 
      health: 'good' as const, 
      name: 'System 01', 
      stateOfCharge: '76% / 9.5 kWhe', 
      activePower: '3.6 kW', 
      performance: 'Ok' as const 
    } 
  ],
  'demo-site': [ 
    { 
      health: 'good' as const, 
      name: 'System 01', 
      stateOfCharge: '76% / 9.5 kWhe', 
      activePower: '3.6 kW', 
      performance: 'Ok' as const 
    }, 
    { 
      health: 'good' as const, 
      name: 'System 02', 
      stateOfCharge: '82% / 9.5 kWhe', 
      activePower: '2.8 kW', 
      performance: 'Ok' as const 
    } 
  ] 
};
 
// Function to safely get systems for a site, returning default system if site not found 
export function getSiteSystemsData(siteId: string): SystemData[] { 
  return mockSiteSystemsData[siteId as keyof typeof mockSiteSystemsData] || [defaultSystem]; 
} 
