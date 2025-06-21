
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">VisaFlow</h1>
            </div>
            <Button onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline Your <span className="text-blue-600">Visa Workflow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive visa processing solution that takes care of the entire visa vertical stack 
            for your company - from application to approval.
          </p>
          <Button size="lg" onClick={() => navigate('/dashboard')} className="mr-4">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Workflow Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create and manage comprehensive visa workflows tailored to your company's needs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Information Gathering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Efficiently collect relevant information from both company and prospective employees.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Document Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatically generate required documents and forms with smart recommendations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <CardTitle>Dashboard Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor progress, track deadlines, and get comprehensive insights at a glance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
