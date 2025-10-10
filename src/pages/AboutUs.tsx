import React from 'react';
import { Sun, Waves, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_img.jpg')",
          backgroundSize: 'cover',
          backgroundColor: 'black'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Main Content Card */}
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Logo Section */}
            <div className="pt-12 pb-8 px-8 text-center">
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-full border-4 border-black p-4 shadow-lg">
                  <img 
                    src="https://i.imgur.com/hCyhd30.png" 
                    alt="AMA Sales Co. Logo" 
                    className="max-h-16 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="bg-gray-800 py-3 px-4 sm:px-8">
              <nav className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
                <Link
                  to="/"
                  className="text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  Contact
                </Link>
                <span className="text-white font-medium px-4 py-2 rounded-md bg-gray-900">
                  About Us
                </span>
              </nav>
            </div>

            {/* Hero Image Section */}
            <div className="p-4 sm:p-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/spa_pic.png"
                  alt="Luxury Spa and Outdoor Living"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            {/* About Us Content Section */}
            <div className="px-4 sm:px-8 pb-12">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12">
                {/* Where to find us - Left Column (30%) */}
                <div className="lg:w-3/10 flex-shrink-0 order-2 lg:order-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6">
                    Where to find us:
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <p className="font-medium text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">States we serve:</p>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <p>• Arkansas (AR)</p>
                      <p>• Arizona (AZ)</p>
                      <p>• Colorado (CO)</p>
                      <p>• Idaho (ID)</p>
                      <p>• Kansas (KS)</p>
                      <p>• Louisiana (LA)</p>
                      <p>• Missouri (MO)</p>
                      <p>• Montana (MT)</p>
                      <p>• Southern/Central California</p>
                      <p>• Nevada (NV)</p>
                      <p>• New Mexico (NM)</p>
                      <p>• Northern California</p>
                      <p>• Oklahoma (OK)</p>
                      <p>• Oregon</p>
                      <p>• Southern/Central California</p>
                      <p>• Texas (TX)</p>
                      <p>• Utah (UT)</p>
                      <p>• Washington (WA)</p>
                      <p>• Wyoming (WY)</p>
                    </div>
                  </div>
                </div>

                {/* About Us - Right Column (70%) */}
                <div className="lg:w-7/10 flex-grow order-1 lg:order-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                    About Us
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg">
                      At AMA Sales Co., our goal is to make running and supplying your outdoor living business as simple and efficient as possible. By serving as your single point of contact, we eliminate the hassle of working with multiple vendors, save you time, and ensure your receive high quality products and reliable solutions.
                    </p>
                    <p className="text-base sm:text-lg">
                      Our mission is to help your business grow by making the planning, sourcing, and purchasing of your outdoor products simple, efficient and completely stress free.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Back to Home Button */}
              <div className="text-center">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;