import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

const MapView = () => {
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
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });

    return () => {
      if (map.current) {
        map.current.setTarget(undefined);
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Environmental Map</h1>
        <p className="text-gray-600">View environmental data and pollution levels in your area</p>
      </header>
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden"
      />
    </div>
  );
};

export default MapView;