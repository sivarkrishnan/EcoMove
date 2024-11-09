import React, { useEffect, useRef, useState } from 'react';
import { Bike, Bus, Train, Heart } from 'lucide-react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

const TransportFinder = () => {
  const [location, setLocation] = useState('');
  const [fitnessStats, setFitnessStats] = useState({
    steps: 8432,
    calories: 342,
    distance: 5.2,
    co2Saved: 1.8
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    map.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-0.118092, 51.509865]), // London coordinates
        zoom: 13
      })
    });

    return () => {
      if (map.current) {
        map.current.setTarget(undefined);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sustainable Transport Hub</h1>
        <p className="text-gray-600">Find eco-friendly transportation options and track your impact</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
          
          <div 
            ref={mapRef} 
            className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TransportOption
              icon={<Train className="h-8 w-8 text-purple-600" />}
              type="Train Stations"
              options={[
                { name: "Central Station", distance: "0.8 km", time: "10 min" },
                { name: "West Terminal", distance: "1.2 km", time: "15 min" }
              ]}
            />
            <TransportOption
              icon={<Bus className="h-8 w-8 text-blue-600" />}
              type="Bus Stops"
              options={[
                { name: "Market Street", distance: "0.3 km", time: "4 min" },
                { name: "City Hall", distance: "0.5 km", time: "6 min" }
              ]}
            />
            <TransportOption
              icon={<Bike className="h-8 w-8 text-green-600" />}
              type="Bike Sharing"
              options={[
                { name: "Green Park Hub", distance: "0.2 km", time: "3 min" },
                { name: "Station Square", distance: "0.4 km", time: "5 min" }
              ]}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Fitness Impact</h2>
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <div className="space-y-4">
              <FitnessMetric label="Steps Today" value={fitnessStats.steps} unit="steps" />
              <FitnessMetric label="Calories Burned" value={fitnessStats.calories} unit="kcal" />
              <FitnessMetric label="Distance Covered" value={fitnessStats.distance} unit="km" />
              <FitnessMetric label="CO₂ Saved" value={fitnessStats.co2Saved} unit="kg" />
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Environmental Impact</h2>
            <div className="space-y-4">
              <ImpactCard
                title="CO₂ Saved"
                value="2.5 kg"
                description="Per trip by choosing public transport"
              />
              <ImpactCard
                title="Trees Equivalent"
                value="1.2"
                description="Number of trees needed to absorb the same CO₂"
              />
              <ImpactCard
                title="Monthly Impact"
                value="75 kg"
                description="Potential CO₂ reduction with regular use"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TransportOption {
  icon: React.ReactNode;
  type: string;
  options: Array<{
    name: string;
    distance: string;
    time: string;
  }>;
}

const TransportOption: React.FC<TransportOption> = ({ icon, type, options }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
      </div>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
            <p className="font-medium text-gray-800">{option.name}</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{option.distance}</span>
              <span>{option.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FitnessMetric {
  label: string;
  value: number;
  unit: string;
}

const FitnessMetric: React.FC<FitnessMetric> = ({ label, value, unit }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-800">
        {value.toLocaleString()} {unit}
      </span>
    </div>
  );
};

interface ImpactCard {
  title: string;
  value: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCard> = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-green-700 font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TransportFinder;