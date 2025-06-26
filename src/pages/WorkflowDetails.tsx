
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import H1BWorkflow from '@/components/H1BWorkflow';

const WorkflowDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-warm">
      {/* Header - Match Dashboard Header exactly */}
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
                <Link to="/dashboard" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-4">Dashboard</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
                    <span className="text-gray-600 text-sm font-medium">JD</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white">
                  <DropdownMenuItem className="cursor-pointer">
                    <Link to="/settings" className="flex items-center w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
