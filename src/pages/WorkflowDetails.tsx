
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import H1BWorkflow from '@/components/H1BWorkflow';

const WorkflowDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <header className="bg-warm-card border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg font-medium text-gray-900">VisaFlow</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 pb-4">Dashboard</Link>
                <a href="#" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-4">Workflow Details</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 pb-4">My Projects</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2">
                New Project
              </Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="flex items-center mb-6">
          <Link 
            to="/dashboard" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Workflow Details</h1>
          <p className="text-sm text-gray-500">WORKFLOW ID: {id?.toUpperCase()}</p>
        </div>

        {/* H1B Workflow Component */}
        <H1BWorkflow />
      </main>
    </div>
  );
};

export default WorkflowDetails;
