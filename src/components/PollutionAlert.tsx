import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PollutionAlert = () => {
  // Mock alert data - in production, this would come from an API
  const alert = {
    active: true,
    region: 'Downtown',
    level: 'High',
    message: 'Air quality index is above normal levels. Consider wearing a mask when outdoors.'
  };

  if (!alert.active) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <div className="container mx-auto flex items-center">
        <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
        <div>
          <h3 className="text-red-800 font-medium">
            High Pollution Alert: {alert.region}
          </h3>
          <p className="text-red-700 text-sm">{alert.message}</p>
        </div>
      </div>
    </div>
  );
};

export default PollutionAlert;