import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vendors: [] as string[],
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const vendorOptions = [
    'Cover lifters, spa steps and other hot tub accessories',
    'Outdoor structures, gazebos and outdoor saunas',
    'Island grills, grill inserts and appliances',
    'Acrylic hot tubs',
    'Roto molded hot tubs',
    'Emergency hot tub cabinet heater',
    'Outdoor patio furniture',
    'Digital marketing campaigns',
    'Infrared and traditional saunas',
    'Cold plunges'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleVendorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      vendors: selectedOptions
    }));
  };

  const handleCheckboxChange = (vendor: string) => {
    setFormData(prev => ({
      ...prev,
      vendors: prev.vendors.includes(vendor)
        ? prev.vendors.filter(v => v !== vendor)
        : [...prev.vendors, vendor]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          vendors: formData.vendors,
          message: formData.message 
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error('Server is not responding properly. Please try again later.');
      }

      if (response.ok && data.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', vendors: [], message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Server connection failed. Please try again later.');
    }
  };

  return (
    <div className={`mt-16 pt-8 border-t border-gray-200 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
        Get In Touch
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-8 text-center px-2">
        Interested in a product or have questions our services? Send us a message!
      </p>
      
      <div className="max-w-2xl mx-auto">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="vendors" className="block text-sm font-medium text-gray-700 mb-2">
              Which product(s) are you interested in? Click all that apply
            </label>
            <div className="space-y-3 p-4 border border-gray-300 rounded-lg bg-gray-50">
              {vendorOptions.map((vendor) => (
                <label key={vendor} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.vendors.includes(vendor)}
                    onChange={() => handleCheckboxChange(vendor)}
                    disabled={status === 'sending'}
                    className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-gray-700 leading-5">{vendor}</span>
                </label>
              ))}
            </div>
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
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Provide any further details and/or questions you may have regarding vendors/products..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Mail className="w-5 h-5 mr-2" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}