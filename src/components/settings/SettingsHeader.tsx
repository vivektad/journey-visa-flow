
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SettingsHeader = () => {
  return (
    <header className="bg-warm-card border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-medium text-gray-900">VisaFlow</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SettingsHeader;
