import React from 'react';
// import { Users, MapPin, Star, Activity, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=612x612&w=0&k=20&c=Zm1MthU_G_LzfjBFBaMORRnuBhMsCjPQ38Ksfg4zl9g=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect with like-minded individuals in your area!
          </h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl px-8 py-4 rounded-full transition duration-300 transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>

      {/* Community Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Community Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Nearby Communities */}
          <div className="bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              
              <h3 className="text-xl font-semibold ml-3">Nearby Communities</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🏃‍♂️</span>
                Local Running Club
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🎨</span>
                Art Enthusiasts
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🌱</span>
                Garden Society
              </li>
            </ul>
          </div>

          {/* Top Rated */}
          <div className="bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
             
              <h3 className="text-xl font-semibold ml-3">Top Rated</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">📚</span>
                Book Club
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🎮</span>
                Gaming Group
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🎵</span>
                Music Lovers
              </li>
            </ul>
          </div>

          {/* Most Active */}
          <div className="bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
      
              <h3 className="text-xl font-semibold ml-3">Most Active</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">⚽</span>
                Sports League
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">🍳</span>
                Cooking Club
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 rounded-full p-2 mr-3">💻</span>
                Tech Meetup
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-black">Daily Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-black">Communities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-black">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                 
                  <span>contact@community.com</span>
                </div>
                <div className="flex items-center">
               
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-indigo-400 transition">
           
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                 
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md text-gray-900 w-full"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Community Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;