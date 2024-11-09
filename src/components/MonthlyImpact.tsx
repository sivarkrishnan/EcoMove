import React from 'react';
import { BarChart, TreePine, Droplets, Wind } from 'lucide-react';

interface ImpactMetric {
  label: string;
  value: number;
  unit: string;
  change: number;
  icon: React.ReactNode;
}

const MonthlyImpact = () => {
  const metrics: ImpactMetric[] = [
    {
      label: 'CO₂ Reduced',
      value: 245.8,
      unit: 'kg',
      change: 12,
      icon: <Wind className="h-6 w-6 text-green-500" />
    },
    {
      label: 'Trees Saved',
      value: 12,
      unit: 'trees',
      change: 8,
      icon: <TreePine className="h-6 w-6 text-green-500" />
    },
    {
      label: 'Water Saved',
      value: 1250,
      unit: 'L',
      change: 15,
      icon: <Droplets className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Monthly Impact Report</h2>
        <BarChart className="h-6 w-6 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              {metric.icon}
              <span className={`text-sm font-medium ${
                metric.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
            <div className="mt-2">
              <h3 className="text-gray-600 text-sm">{metric.label}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </span>
                <span className="ml-1 text-gray-500">{metric.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyImpact;