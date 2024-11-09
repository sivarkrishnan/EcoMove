import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  change: number;
  avatar: string;
}

const Leaderboard = () => {
  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Sarah Chen",
      points: 2450,
      change: 2,
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      rank: 2,
      name: "Mike Johnson",
      points: 2380,
      change: 0,
      avatar: "https://i.pravatar.cc/150?u=mike"
    },
    {
      rank: 3,
      name: "Emma Wilson",
      points: 2310,
      change: 1,
      avatar: "https://i.pravatar.cc/150?u=emma"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Top Eco Warriors</h2>
      <div className="space-y-4">
        {leaderboardData.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(entry.rank)}
              </div>
              <img
                src={entry.avatar}
                alt={entry.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{entry.name}</h3>
                <p className="text-sm text-gray-500">{entry.points} points</p>
              </div>
            </div>
            <div className={`text-sm font-medium ${
              entry.change > 0 ? 'text-green-600' : 'text-gray-600'
            }`}>
              {entry.change > 0 ? `↑${entry.change}` : '−'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;