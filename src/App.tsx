import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Sun, Waves, ExternalLink, Mail } from 'lucide-react';
import AboutUs from './pages/AboutUs';

function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <span className="text-white font-medium px-4 py-2 rounded-md bg-gray-900">
                  Home
                </span>
                <button
                  onClick={scrollToContact}
                  className="text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  Contact
                </button>
                <Link
                  to="/about"
                  className="text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  About Us
                </Link>
              </nav>
            </div>

            {/* Hero Image Section */}
            <div className="p-4 sm:p-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/stella_backdrop.jpg"
                  alt="Modern Outdoor Living Space with Pergola and Pool"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-8 pb-12">
              {/* Company Description Section */}
              <div className="text-center mb-12">
                <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p className="mb-4 px-2">
                    At AMA Sales Co, our goal is to make running and supplying your outdoor living business as simple and efficient as possible. By serving as your single point of contact, we eliminate the hassle of working with multiple vendors, save you time, and ensure your receive high quality products and reliable solutions.
                  </p>
                  <p className="mb-4 px-2">
                    Our mission is to help your business grow by making the planning, sourcing, and purchasing of your outdoor products simple, efficient and completely stress free.
                  </p>
                  <p className="px-2">
                    Please visit the websites below (by clicking on the company logo) for product information.
                  </p>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 text-center px-2">
                  Have questions about our products or services? Send us a message!
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <form 
                    action="mailto:maw@amasalesco.com" 
                    method="post" 
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                        placeholder="Tell us about your project or ask any questions..."
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Partner Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
                {/* Dynamic Outdoor Living Solutions */}
                <a 
                  href="https://www.dynamicoutdoorliving.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/xSdQVCR.png" alt="Dynamic Outdoor Living Solutions" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Dynamic Outdoor Living Solutions</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">Lifters, Spa Steps, Pergolas and MORE!</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Visscher Specialty */}
                <a 
                  href="https://visscherspecialty.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/4k9XAta.png" alt="Visscher Specialty" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Visscher Specialty</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">Amazing backyard structures with endless possibilities! NOW LAUNCHING THE NEW OUTDOOR SAUNA LINE</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Kokomo Grills Outdoor Kitchens */}
                <a 
                  href="https://www.kokomogrills.com/outdoor-kitchens" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/p0GMDWR.png" alt="Kokomo Grills Outdoor Kitchens" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">OUTDOOR KITCHENS | BBQ Islands | Kokomo Grills</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">3 island kitchen options that have a lifetime warranty! Best in the industry</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Aspen Spas */}
                <a 
                  href="https://aspenspas.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/dP8YYqg.png" alt="Aspen Spas" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Aspen Spas</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">Built in the US! A family-owned business that prides itself on quality!</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* InnovaSpa */}
                <a 
                  href="https://innovaspa.com/en_us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/7HxqGsP.png" alt="InnovaSpa" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">InnovaSpa</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">A quality roto molded spa that every showroom should offer!</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* The Spa Dragon */}
                <a 
                  href="https://thespadragon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/I5EUZiP.png" alt="The Spa Dragon" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">The Spa Dragon</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">A great addition for any cold climate spa retailer. Follow the link for more information!</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Kokomo Grills */}
                <a 
                  href="https://www.kokomogrills.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/p0GMDWR.png" alt="Kokomo Grills" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Kokomo Grills</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">Superior Island Grills and Appliance inserts</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Patio Resorts */}
                <a 
                  href="https://www.patioresorts.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/IOyeh2A.png" alt="Patio Resorts" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Patio Resorts</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">Upscale Patio Furniture for your returning customers</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>

                {/* Omni Digital Marketing */}
                <a 
                  href="https://omnidigital.marketing/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-full h-24 sm:h-32 flex items-center justify-center mx-auto mb-4">
                    <img src="https://i.imgur.com/VYliEEr.png" alt="Omni Digital Marketing" className="w-48 sm:w-64 h-20 sm:h-32 object-contain rounded-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">Omni Digital Marketing</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3">A full online/ social media marketing company for sales events and monthly advertising with proven results</p>
                  <div className="flex justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </a>
              </div>

              {/* Contact Us Section */}
              <div id="contact-us" className="mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                  Contact Us
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 text-center px-2">
                  Contact your local sales representative for more information!
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Michael White */}
                  <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white">Michael White</h3>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">CO, ID, MT, NM, UT</p>
                      <p className="text-white font-semibold text-sm sm:text-base">602.405.1221</p>
                      <a href="mailto:maw@amasalesco.com" className="text-white hover:text-gray-300 flex items-center justify-center text-sm sm:text-base">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>maw@amasalesco.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Paul Crawford */}
                  <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white">Paul Crawford</h3>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">AZ, Southern/ Central CA, NV</p>
                      <p className="text-white font-semibold text-sm sm:text-base">702.497.9004</p>
                      <a href="mailto:paul@amasalesco.com" className="text-white hover:text-gray-300 flex items-center justify-center text-sm sm:text-base">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>paul@amasalesco.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Rodney Eudy */}
                  <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white">Rodney Eudy</h3>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">Northern CA, Oregon, WA</p>
                      <p className="text-white font-semibold text-sm sm:text-base">503.930.1055</p>
                      <a href="mailto:rodney@amasalesco.com" className="text-white hover:text-gray-300 flex items-center justify-center text-sm sm:text-base">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>rodney@amasalesco.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Todd Holmes */}
                  <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white">Todd Holmes</h3>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">CO, WY</p>
                      <p className="text-white font-semibold text-sm sm:text-base">661.675.9675</p>
                      <a href="mailto:todd@amasalesco.com" className="text-white hover:text-gray-300 flex items-center justify-center text-sm sm:text-base">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>todd@amasalesco.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Joe Hoover */}
                  <div className="bg-gray-800 text-white border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white">Joe Hoover</h3>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">AR, KS, LA, MO, OK, TX</p>
                      <p className="text-white font-semibold text-sm sm:text-base">423.435.2697</p>
                      <a href="mailto:jlh@amasalesco.com" className="text-white hover:text-gray-300 flex items-center justify-center text-sm sm:text-base">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>jlh@amasalesco.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 text-center px-2">
                  Have questions about our products or services? Send us a message!
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <form 
                    action="mailto:maw@amasalesco.com" 
                    method="post" 
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                        placeholder="Tell us about your project or ask any questions..."
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;