import React, { useState } from 'react';
import { MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useLanguage();
  const t = translations[language];

  const blogPosts = [
    {
      id: 1,
      title: t.faithChallenges,
      date: t.blogDate1,
      image: "https://via.placeholder.com/300x200?text=Faith+Challenges",
      excerpt: t.faithChallengesExcerpt
    },
    {
      id: 2,
      title: t.buildingCommunity,
      date: t.blogDate1,
      image: "https://via.placeholder.com/300x200?text=Fellowship",
      excerpt: t.buildingCommunityExcerpt,
      isRelated: true
    },
    {
      id: 3,
      title: t.discipleship,
      date: t.blogDate2,
      image: "https://via.placeholder.com/300x200?text=Discipleship",
      excerpt: t.discipleshipExcerpt
    },
    {
      id: 4,
      title: t.actsOfKindness,
      date: t.blogDate3,
      image: "https://via.placeholder.com/300x200?text=Kindness",
      excerpt: t.actsOfKindnessExcerpt
    },
    {
      id: 5,
      title: t.kindnessInAction,
      date: t.blogDate4,
      image: "https://via.placeholder.com/300x200?text=Compassion",
      excerpt: t.kindnessInActionExcerpt
    }
  ];

  const featuredPost = {
    title: t.impactingLives,
    date: t.blogDate1,
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
              <span>{t.churchAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{t.workingHours}</span>
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
              <span className="text-2xl font-bold text-gray-800">{t.churchName}</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.home}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.about}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.sermons}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.innerPages}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.blog}</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">{t.contact}</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2">
                {t.donateNow}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of the component with translations */}
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
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">RELATED</span>
                      <button className="bg-gray-800 text-white text-xs px-3 py-1 rounded hover:bg-gray-700">
                        BUY NOW
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

      {/* Footer */}
      <footer className="bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                </div>
                <span className="text-2xl font-bold">Awakenur</span>
              </div>
              <p className="text-sm mb-4">GET A FREE ESTIMATE TODAY!</p>
              <p className="text-xl font-bold mb-4">1-555-678-8888</p>
              <p className="text-sm text-gray-300 mb-2">
                Office: 1234 Fashion Street, Suite 567, New York, United States
              </p>
              <p className="text-sm text-gray-300">
                Support 24/7: bestthemes@gmail.com
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe For All The Top News!</h3>
              <p className="text-sm text-gray-300 mb-4">Sign up for updates on our latest news and events.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
                />
                <button className="bg-amber-600 px-4 py-2 rounded-r-lg hover:bg-amber-700">
                  →
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">QUICK LINK</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">Homepage</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Our Pastor</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Latest News</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sermon</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Membership</a></li>
              </ul>
            </div>

            {/* Working Time */}
            <div>
              <h3 className="text-lg font-bold mb-4">WORKING TIME</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Mon-Fri: 6:00am - 7:00pm</p>
                <p>Sat: 6:00am - 8:00pm</p>
                <p>Sun: 5:30am - 9:00pm</p>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2">FOLLOW US ON:</h4>
                <div className="flex gap-4">
                  <Facebook size={20} className="cursor-pointer hover:text-amber-300" />
                  <Twitter size={20} className="cursor-pointer hover:text-amber-300" />
                  <Instagram size={20} className="cursor-pointer hover:text-amber-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
              <p>©2025 Awakenur. All Rights Reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
