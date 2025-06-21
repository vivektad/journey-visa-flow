
import React from 'react';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, Users, Calendar } from 'lucide-react';
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
  },
  {
    id: '5',
    employeeName: 'David Thompson',
    visaType: 'TN',
    status: 'rejected',
    priority: 'high',
    createdDate: '2024-01-05',
    dueDate: '2024-02-20',
    completionPercentage: 90,
    assignedTo: 'HR Department'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'draft':
      return <FileText className="w-4 h-4" />;
    case 'in-progress':
      return <Clock className="w-4 h-4 text-blue-500" />;
    case 'under-review':
      return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    case 'approved':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'rejected':
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const getStatusBadge = (status: string) => {
  const variants = {
    draft: 'secondary',
    'in-progress': 'default',
    'under-review': 'outline',
    approved: 'default',
    rejected: 'destructive'
  } as const;

  const colors = {
    draft: 'bg-gray-100 text-gray-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'under-review': 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <Badge className={`${colors[status as keyof typeof colors]} border-0`}>
      {status.replace('-', ' ').toUpperCase()}
    </Badge>
  );
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'border-l-red-500';
    case 'medium':
      return 'border-l-yellow-500';
    case 'low':
      return 'border-l-green-500';
    default:
      return 'border-l-gray-300';
  }
};

const Dashboard = () => {
  const stats = {
    total: dummyWorkflows.length,
    inProgress: dummyWorkflows.filter(w => w.status === 'in-progress').length,
    underReview: dummyWorkflows.filter(w => w.status === 'under-review').length,
    approved: dummyWorkflows.filter(w => w.status === 'approved').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">VisaFlow</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-blue-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Workflows</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Documents</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Reports</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Workflow
              </Button>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Workflows
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stats.total}
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      In Progress
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stats.inProgress}
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Under Review
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stats.underReview}
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approved
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stats.approved}
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workflows Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Workflows</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {dummyWorkflows.map((workflow) => (
              <Card key={workflow.id} className={`hover:shadow-lg transition-shadow border-l-4 ${getPriorityColor(workflow.priority)}`}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-medium text-gray-900">
                        {workflow.employeeName}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        {workflow.visaType} Visa
                      </p>
                    </div>
                    {getStatusBadge(workflow.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium">{workflow.completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${workflow.completionPercentage}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {workflow.assignedTo}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      Due: {new Date(workflow.dueDate).toLocaleDateString()}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center text-sm text-gray-500">
                        {getStatusIcon(workflow.status)}
                        <span className="ml-1 capitalize">{workflow.status.replace('-', ' ')}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <Plus className="w-6 h-6" />
                <span>Create New Workflow</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <FileText className="w-6 h-6" />
                <span>Generate Documents</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <Users className="w-6 h-6" />
                <span>Manage Team</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
