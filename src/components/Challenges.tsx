import React from 'react';
import { Trophy, TreePine, Bike, Leaf } from 'lucide-react';

const Challenges = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Green Challenges</h1>
        <p className="text-gray-600">Join challenges to make a bigger impact</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <Trophy className="h-8 w-8" />
          </div>
          <div className="space-y-4">
            <ProgressBar label="Monthly Challenge" progress={75} />
            <ProgressBar label="Total Points" progress={60} />
            <p className="text-green-100">Level 12 - Earth Guardian</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="grid grid-cols-3 gap-4">
            <Achievement
              icon={<Bike className="h-6 w-6 text-blue-500" />}
              label="Cycle Master"
              unlocked
            />
            <Achievement
              icon={<TreePine className="h-6 w-6 text-green-500" />}
              label="Tree Planter"
              unlocked
            />
            <Achievement
              icon={<Leaf className="h-6 w-6 text-gray-400" />}
              label="Zero Waste"
              unlocked={false}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Active Challenges</h2>
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
};

interface ProgressBarProps {
  label: string;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, progress }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">{label}</span>
        <span className="text-sm">{progress}%</span>
      </div>
      <div className="w-full bg-green-700 rounded-full h-2.5">
        <div
          className="bg-white rounded-full h-2.5 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

interface AchievementProps {
  icon: React.ReactNode;
  label: string;
  unlocked: boolean;
}

const Achievement: React.FC<AchievementProps> = ({ icon, label, unlocked }) => {
  return (
    <div className={`text-center p-3 rounded-lg ${unlocked ? 'bg-gray-50' : 'bg-gray-100'}`}>
      <div className="flex justify-center mb-2">{icon}</div>
      <p className={`text-sm ${unlocked ? 'text-gray-800' : 'text-gray-500'}`}>{label}</p>
    </div>
  );
};

const challenges = [
  {
    title: "30 Days Car-Free",
    description: "Use public transport or bike for 30 days",
    reward: "500 points",
    participants: 1234,
    daysLeft: 15,
    progress: 50
  },
  {
    title: "Zero Waste Week",
    description: "Minimize your waste production for a week",
    reward: "300 points",
    participants: 856,
    daysLeft: 7,
    progress: 25
  },
  {
    title: "Energy Saver",
    description: "Reduce your energy consumption by 20%",
    reward: "400 points",
    participants: 2156,
    daysLeft: 21,
    progress: 35
  }
];

interface ChallengeCardProps {
  title: string;
  description: string;
  reward: string;
  participants: number;
  daysLeft: number;
  progress: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  reward,
  participants,
  daysLeft,
  progress
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          {reward}
        </span>
      </div>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 rounded-full h-2.5 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{participants.toLocaleString()} participants</span>
        <span>{daysLeft} days left</span>
      </div>
    </div>
  );
};

export default Challenges;