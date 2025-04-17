import React from 'react';
import { useRouter } from 'next/router';
import { CheckCircle } from 'lucide-react';

export interface SystemData {
  health: 'good' | 'warning' | 'error';
  name: string;
  stateOfCharge: string;
  activePower: string;
  performance: 'Ok' | 'Warning' | 'Error';
}

interface SiteSystemsProps {
  systems: SystemData[];
  siteId: string;
}

const SiteSystems: React.FC<SiteSystemsProps> = ({ systems, siteId }) => {
  const router = useRouter();

  const handleSystemClick = (systemName: string) => {
    // Replace spaces with hyphens for URL-friendly format
    const urlName = systemName.toLowerCase().replace(' ', '-');
    router.push(`/sites/${siteId}/systems/${urlName}`);
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Site Systems</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left pb-3 text-sm font-medium text-gray-500">Health</th>
              <th className="text-left pb-3 text-sm font-medium text-gray-500">System Name</th>
              <th className="text-left pb-3 text-sm font-medium text-gray-500">State of Charge</th>
              <th className="text-left pb-3 text-sm font-medium text-gray-500">Active Power</th>
              <th className="text-left pb-3 text-sm font-medium text-gray-500">Performance</th>
            </tr>
          </thead>
          <tbody>
            {systems.map((system, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0">
                <td className="py-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </td>
                <td className="py-4">
                  <span 
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleSystemClick(system.name)}
                  >
                    {system.name}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{system.stateOfCharge}</td>
                <td className="py-4 text-gray-600">{system.activePower}</td>
                <td className="py-4 text-gray-600">{system.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiteSystems; 