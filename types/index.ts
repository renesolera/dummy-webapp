export interface SiteData {
  solar: {
    power: string;
    status: string;
  };
  storage: {
    soc: string;
    status: string;
  };
  pcu: {
    power: string;
    status: string;
  };
  grid: {
    power: string;
    status: string;
  };
  load: {
    power: string;
    status: string;
  };
} 