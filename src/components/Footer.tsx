import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const quotes = [
    {
      text: "The greatest threat to our planet is the belief that someone else will save it.",
      author: "Robert Swan",
    },
    {
      text: "We don't inherit the Earth from our ancestors, we borrow it from our children.",
      author: "Native American Proverb",
    },
    {
      text: "Nature provides a free lunch, but only if we control our appetites.",
      author: "William Ruckelshaus",
    }
  ];

  // Use the current date to select a quote that changes daily
  const today = new Date().getDate();
  const quote = quotes[today % quotes.length];

  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">EcoMove</span>
          </div>
          
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-gray-600 italic">
              "{quote.text}"
            </blockquote>
            <p className="text-gray-500 mt-2">— {quote.author}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">About</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Our Mission</li>
                <li>Team</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Carbon Tracking</li>
                <li>Transport Finder</li>
                <li>Challenges</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>News</li>
                <li>Research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Contact Us</li>
                <li>Support</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EcoMove. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;