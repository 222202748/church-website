import React, { useState } from 'react';
import { MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useLanguage();
  
  // Add error handling and debugging
  const t = translations[language] || translations.en || {};
  
  // Debug logging (remove in production)
  console.log('Current language:', language);
  console.log('Translation object:', t);
  console.log('Type of t:', typeof t);
  
  // Ensure we have valid translations
  if (typeof t !== 'object' || Array.isArray(t)) {
    console.error('Invalid translation object:', t);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Translation Error</h2>
          <p className="text-gray-600">Please check your translations configuration.</p>
        </div>
      </div>
    );
  }

  // Safe function to get translation with fallback
  const getTranslation = (key, fallback = `[${key}]`) => {
    const value = t[key];
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'object' && value !== null) {
      console.warn(`Translation key "${key}" is an object, not a string:`, value);
      return fallback;
    }
    return fallback;
  };

  const blogPosts = [
    {
      id: 1,
      title: getTranslation('faithChallenges', 'Faith Challenges'),
      date: getTranslation('blogDate1', 'December 15, 2024'),
      image: "https://via.placeholder.com/300x200?text=Faith+Challenges",
      excerpt: getTranslation('faithChallengesExcerpt', 'Exploring the challenges we face in our faith journey...')
    },
    {
      id: 2,
      title: getTranslation('buildingCommunity', 'Building Community'),
      date: getTranslation('blogDate1', 'December 15, 2024'),
      image: "https://via.placeholder.com/300x200?text=Fellowship",
      excerpt: getTranslation('buildingCommunityExcerpt', 'How to build strong community bonds in your church...'),
      isRelated: true
    },
    {
      id: 3,
      title: getTranslation('discipleship', 'Discipleship'),
      date: getTranslation('blogDate2', 'December 10, 2024'),
      image: "https://via.placeholder.com/300x200?text=Discipleship",
      excerpt: getTranslation('discipleshipExcerpt', 'The importance of discipleship in Christian growth...')
    },
    {
      id: 4,
      title: getTranslation('actsOfKindness', 'Acts of Kindness'),
      date: getTranslation('blogDate3', 'December 5, 2024'),
      image: "https://via.placeholder.com/300x200?text=Kindness",
      excerpt: getTranslation('actsOfKindnessExcerpt', 'Small acts of kindness that make a big difference...')
    },
    {
      id: 5,
      title: getTranslation('kindnessInAction', 'Kindness in Action'),
      date: getTranslation('blogDate4', 'December 1, 2024'),
      image: "https://via.placeholder.com/300x200?text=Compassion",
      excerpt: getTranslation('kindnessInActionExcerpt', 'Real stories of compassion in our community...')
    }
  ];

  const featuredPost = {
    title: getTranslation('impactingLives', 'Impacting Lives Through Faith'),
    date: getTranslation('blogDate1', 'December 15, 2024'),
    day: "17",
    month: "DEC",
    image: "https://via.placeholder.com/800x400?text=Faith+In+Action"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-amber-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{getTranslation('churchAddress', '123 Church Street, City, State')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{getTranslation('workingHours', 'Mon-Sun: 9:00 AM - 6:00 PM')}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook size={16} className="cursor-pointer hover:text-amber-200" />
            <Twitter size={16} className="cursor-pointer hover:text-amber-200" />
            <Instagram size={16} className="cursor-pointer hover:text-amber-200" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-800">{getTranslation('churchName', 'Awakenur Church')}</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('home', 'Home')}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('about', 'About')}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('sermons', 'Sermons')}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('innerPages', 'Pages')}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('blog', 'Blog')}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{getTranslation('contact', 'Contact')}</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2">
                {getTranslation('donateNow', 'Donate Now')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-white">
              <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg text-center mb-4 w-20">
                <div className="text-2xl font-bold">{featuredPost.day}</div>
                <div className="text-sm">{featuredPost.month}</div>
              </div>
              <h2 className="text-gray-900 text-3xl font-bold mb-2">{featuredPost.title}</h2>
              <p className="text-gray-600">{featuredPost.date}</p>
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className="space-y-6">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 hover:text-amber-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                  {post.isRelated && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        {getTranslation('related', 'Related')}
                      </span>
                      <button className="bg-gray-800 text-white text-xs px-3 py-1 rounded hover:bg-gray-700">
                        {getTranslation('buyNow', 'Buy Now')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(3).map((post) => (
            <div key={post.id} className="flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src={post.image}
                alt={post.title}
                className="w-24 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg hover:text-amber-600">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <button 
              className={`w-10 h-10 rounded ${currentPage === 1 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={`w-10 h-10 rounded ${currentPage === 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button className="w-10 h-10 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
              →
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Blog;