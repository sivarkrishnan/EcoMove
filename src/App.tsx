import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TransportFinder from './components/TransportFinder';
import Challenges from './components/Challenges';
import NewsSection from './components/NewsSection';
import PollutionAlert from './components/PollutionAlert';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <PollutionAlert />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'transport' && <TransportFinder />}
          {activeTab === 'challenges' && <Challenges />}
          {activeTab === 'news' && <NewsSection />}
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;