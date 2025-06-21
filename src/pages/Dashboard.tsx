
import React from 'react';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, Users, Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface VisaWorkflow {
  id: string;
  employeeName: string;
  visaType: string;
  status: 'draft' | 'in-progress' | 'under-review' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  createdDate: string;
  dueDate: string;
  completionPercentage: number;
  assignedTo: string;
}

const dummyWorkflows: VisaWorkflow[] = [
  {
    id: '1',
    employeeName: 'Sarah Johnson',
    visaType: 'H-1B',
    status: 'in-progress',
    priority: 'high',
    createdDate: '2024-01-15',
    dueDate: '2024-03-01',
    completionPercentage: 65,
    assignedTo: 'Legal Team'
  },
  {
    id: '2',
    employeeName: 'Miguel Rodriguez',
    visaType: 'L-1A',
    status: 'under-review',
    priority: 'medium',
    createdDate: '2024-01-20',
    dueDate: '2024-02-28',
    completionPercentage: 80,
    assignedTo: 'HR Department'
  },
  {
    id: '3',
    employeeName: 'Priya Patel',
    visaType: 'O-1',
    status: 'approved',
    priority: 'low',
    createdDate: '2024-01-10',
    dueDate: '2024-02-15',
    completionPercentage: 100,
    assignedTo: 'Immigration Law Firm'
  },
  {
    id: '4',
    employeeName: 'Chen Wei',
    visaType: 'E-2',
    status: 'draft',
    priority: 'medium',
    createdDate: '2024-01-25',
    dueDate: '2024-03-15',
    completionPercentage: 25,
    assignedTo: 'Legal Team'
  }
];

const getStatusBadge = (status: string) => {
  const colors = {
    draft: 'bg-gray-100 text-gray-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    'under-review': 'bg-yellow-100 text-yellow-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700'
  };

  return (
    <Badge className={`${colors[status as keyof typeof colors]} border-0 text-xs font-medium`}>
      {status.replace('-', ' ').toUpperCase()}
    </Badge>
  );
};

const Dashboard = () => {
  const stats = {
    current: dummyWorkflows.filter(w => w.status === 'in-progress' || w.status === 'draft').length,
    inReview: dummyWorkflows.filter(w => w.status === 'under-review').length,
    totalSubmissions: dummyWorkflows.length * 15, // Dummy multiplier for submissions
    collaborators: 43
  };

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
                <a href="#" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-4">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 pb-4">Explore</a>
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
        {/* Welcome Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back, Julia</h1>
            <p className="text-sm text-gray-500">PROJECT SUMMARIES SINCE DEC 10, 2022</p>
          </div>
          <div className="text-right">
            <Button variant="outline" className="text-sm">Edit Profile</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-warm-purple border border-gray-200">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stats.current}</div>
              <div className="text-sm text-gray-600">Current Projects</div>
            </CardContent>
          </Card>

          <Card className="bg-soft-orange border border-gray-200">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stats.inReview}</div>
              <div className="text-sm text-gray-600">In Review</div>
            </CardContent>
          </Card>

          <Card className="bg-muted-blue border border-gray-200">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stats.totalSubmissions}</div>
              <div className="text-sm text-gray-600">Total Submissions</div>
            </CardContent>
          </Card>

          <Card className="bg-sage border border-gray-200">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stats.collaborators}</div>
              <div className="text-sm text-gray-600">Collaborators</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Workflow Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Active Workflows</h2>
                <p className="text-sm text-gray-500 mt-1">UPDATED: {new Date().toLocaleDateString().toUpperCase()}</p>
              </div>
            </div>

            {/* Active Workflows */}
            <div className="space-y-4">
              {dummyWorkflows.map((workflow) => (
                <Card key={workflow.id} className="bg-warm-card border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Link 
                            to={`/workflow/${workflow.id}`}
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {workflow.employeeName}
                          </Link>
                          {getStatusBadge(workflow.status)}
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{workflow.visaType} Visa</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {workflow.assignedTo}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Due: {new Date(workflow.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{workflow.completionPercentage}%</div>
                            <div className="w-20 bg-gray-200 rounded-full h-1 mt-1">
                              <div 
                                className="bg-blue-500 h-1 rounded-full"
                                style={{ width: `${workflow.completionPercentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
              <Button variant="ghost" size="sm" className="text-sm text-gray-500">View All</Button>
            </div>

            <div className="space-y-4">
              <Card className="bg-warm-card border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-muted-blue rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Space Explorer</h4>
                      <p className="text-sm text-gray-500">EARNED 09/22/25</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warm-card border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-soft-orange rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Project Leader</h4>
                      <p className="text-sm text-gray-500">EARNED 09/22/25</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warm-card border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Organizer</h4>
                      <p className="text-sm text-gray-500">EARNED 09/22/25</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-warm-card border border-gray-200 mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  New H1B Workflow
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Documents
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Invite Collaborator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
