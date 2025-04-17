import React from 'react';
import Link from 'next/link';
import { Battery, Zap, Thermometer } from 'lucide-react';

interface ModuleData {
  id: string;
  batteryLevel: number;
  power: number;
  temperature: number;
  displayName: string;
}

interface SystemModulesProps {
  modules: ModuleData[];
  siteId: string;
  systemId: string;
}

const SystemModules: React.FC<SystemModulesProps> = ({ modules, siteId, systemId }) => {
  return (
    <div className="pb-12">
      <h2 className="text-xl font-semibold mb-4">System Modules</h2>
      <div className="grid grid-cols-3 gap-4">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/sites/${siteId}/systems/${systemId}/modules/${module.id}`}
            className="border bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:border-[#0066FF] transition-colors group"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium group-hover:text-[#0066FF]">{module.displayName}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{module.batteryLevel}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{module.power} kWh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{module.temperature}°C</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SystemModules; 