import React from 'react';
import { useQuery } from 'react-query';
import { formatDistanceToNow } from 'date-fns';
import { Newspaper, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  source: string;
  sourceUrl: string;
  sourceCredibility: {
    rating: 'High' | 'Medium' | 'Low';
    verifiedBy: string[];
  };
  category: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Global CO2 Levels Hit New Record',
    summary: 'Scientists report unprecedented levels of carbon dioxide in the atmosphere, reaching 420 parts per million for the first time in human history.',
    publishedAt: new Date().toISOString(),
    source: 'Environmental News Network',
    sourceUrl: 'https://www.enn.com',
    sourceCredibility: {
      rating: 'High',
      verifiedBy: ['Reuters', 'Science Direct', 'Nature']
    },
    category: 'Climate Science'
  },
  {
    id: '2',
    title: 'New Renewable Energy Project Launched',
    summary: 'Major solar farm initiative begins construction in desert region, expected to power 100,000 homes with clean energy.',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    source: 'Green Energy Today',
    sourceUrl: 'https://www.greenenergytoday.org',
    sourceCredibility: {
      rating: 'High',
      verifiedBy: ['Bloomberg', 'Energy Institute']
    },
    category: 'Renewable Energy'
  },
  {
    id: '3',
    title: 'Ocean Cleanup Project Shows Promise',
    summary: 'Innovative system removes 100 tons of plastic from Pacific garbage patch, marking a significant milestone in ocean conservation efforts.',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    source: 'Marine Conservation Weekly',
    sourceUrl: 'https://www.marineconservation.org',
    sourceCredibility: {
      rating: 'High',
      verifiedBy: ['National Geographic', 'Oceanographic Institute']
    },
    category: 'Ocean Conservation'
  }
];

const NewsSection = () => {
  const { data: news, isLoading } = useQuery<NewsItem[]>(
    'environmental-news',
    () => Promise.resolve(mockNews),
    { refetchInterval: 3600000 } // Refetch every hour
  );

  if (isLoading) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Environmental News</h1>
        <p className="text-gray-600">Verified environmental news from trusted sources</p>
      </header>

      <div className="space-y-6">
        {news?.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    {item.category}
                  </span>
                  <CredibilityBadge rating={item.sourceCredibility.rating} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.summary}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Newspaper className="h-4 w-4 mr-2" />
                <a 
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-green-600"
                >
                  {item.source}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className="mx-2">•</span>
                <time>{formatDistanceToNow(new Date(item.publishedAt))} ago</time>
              </div>
              <SourceVerification sources={item.sourceCredibility.verifiedBy} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const CredibilityBadge: React.FC<{ rating: 'High' | 'Medium' | 'Low' }> = ({ rating }) => {
  const colors = {
    High: 'bg-blue-100 text-blue-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${colors[rating]}`}>
      {rating} Credibility
    </span>
  );
};

const SourceVerification: React.FC<{ sources: string[] }> = ({ sources }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-gray-500">Verified by:</span>
      <div className="flex items-center gap-1">
        {sources.map((source, index) => (
          <React.Fragment key={source}>
            {index > 0 && <span className="text-gray-300">,</span>}
            <span className="text-xs font-medium text-gray-600">{source}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;