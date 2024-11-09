import React from 'react';
import { LineChart, TreePine, Car, Leaf } from 'lucide-react';
import MonthlyImpact from './MonthlyImpact';
import Leaderboard from './Leaderboard';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Carbon Impact</h1>
        <p className="text-gray-600">Track and reduce your environmental footprint</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Car className="text-blue-500" />}
          title="Transport"
          value="2.5"
          unit="tons CO₂"
          change="-12%"
        />
        <StatCard
          icon={<TreePine className="text-green-500" />}
          title="Energy Use"
          value="1.8"
          unit="tons CO₂"
          change="-8%"
        />
        <StatCard
          icon={<Leaf className="text-yellow-500" />}
          title="Waste"
          value="0.7"
          unit="tons CO₂"
          change="-15%"
        />
        <StatCard
          icon={<LineChart className="text-purple-500" />}
          title="Total Impact"
          value="5.0"
          unit="tons CO₂"
          change="-11%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MonthlyImpact />
        </div>
        <div>
          <Leaderboard />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, unit, change }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className="text-sm font-medium text-green-600">{change}</span>
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="ml-1 text-gray-500">{unit}</span>
      </div>
    </div>
  );
};

interface Activity {
  type: string;
  description: string;
  impact: string;
  date: string;
}

const activities: Activity[] = [
  {
    type: "Transport",
    description: "Cycled to work instead of driving",
    impact: "-2.5 kg CO₂",
    date: "Today"
  },
  {
    type: "Energy",
    description: "Switched to LED bulbs",
    impact: "-1.8 kg CO₂",
    date: "Yesterday"
  },
  {
    type: "Waste",
    description: "Composted food waste",
    impact: "-0.5 kg CO₂",
    date: "2 days ago"
  }
];

const ActivityItem: React.FC<Activity> = ({ type, description, impact, date }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div>
        <span className="text-sm font-medium text-gray-900">{type}</span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-sm font-medium text-green-600">{impact}</span>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default Dashboard;