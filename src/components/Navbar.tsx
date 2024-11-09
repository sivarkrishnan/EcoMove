import React from 'react';
import { Leaf, LineChart, Train, Trophy, Newspaper, Map } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">EcoMove</span>
          </div>
          <div className="flex space-x-4">
            <NavButton
              icon={<LineChart />}
              label="Dashboard"
              active={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
            />
            <NavButton
              icon={<Map />}
              label="Map"
              active={activeTab === 'map'}
              onClick={() => setActiveTab('map')}
            />
            <NavButton
              icon={<Train />}
              label="Transport"
              active={activeTab === 'transport'}
              onClick={() => setActiveTab('transport')}
            />
            <NavButton
              icon={<Trophy />}
              label="Challenges"
              active={activeTab === 'challenges'}
              onClick={() => setActiveTab('challenges')}
            />
            <NavButton
              icon={<Newspaper />}
              label="News"
              active={activeTab === 'news'}
              onClick={() => setActiveTab('news')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
        active
          ? 'text-green-600 bg-green-50'
          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Navbar;