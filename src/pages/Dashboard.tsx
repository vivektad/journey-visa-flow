
import React, { useState } from 'react';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, Users, Calendar, Search, Settings, LogOut, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface VisaWorkflow {
  id: string;
  employeeName: string;
  visaType: string;
  status: 'draft' | 'in-progress' | 'under-review' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  createdDate: string;
  nextStartDate: string;
  completionPercentage: number;
}

const dummyWorkflows: VisaWorkflow[] = [
  {
    id: '1',
    employeeName: 'Sarah Johnson',
    visaType: 'H-1B',
    status: 'in-progress',
    priority: 'high',
    createdDate: '2024-01-15',
    nextStartDate: '2024-02-20',
    completionPercentage: 65
  },
  {
    id: '2',
    employeeName: 'Miguel Rodriguez',
    visaType: 'L-1A',
    status: 'under-review',
    priority: 'medium',
    createdDate: '2024-01-20',
    nextStartDate: '2024-02-25',
    completionPercentage: 80
  },
  {
    id: '3',
    employeeName: 'Priya Patel',
    visaType: 'O-1',
    status: 'approved',
    priority: 'low',
    createdDate: '2024-01-10',
    nextStartDate: '2024-02-15',
    completionPercentage: 100
  },
  {
    id: '4',
    employeeName: 'Chen Wei',
    visaType: 'E-2',
    status: 'draft',
    priority: 'medium',
    createdDate: '2024-01-25',
    nextStartDate: '2024-03-01',
    completionPercentage: 25
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

const getVisaTypeIcon = (visaType: string) => {
  const iconConfigs = {
    'H-1B': { bg: 'bg-muted-blue', shape: 'w-6 h-6 bg-blue-500 rounded' },
    'L-1A': { bg: 'bg-soft-orange', shape: 'w-6 h-6 bg-orange-500 rounded-full' },
    'O-1': { bg: 'bg-sage', shape: 'w-6 h-6 bg-green-500 rounded' },
    'E-2': { bg: 'bg-warm-purple', shape: 'w-6 h-6 bg-purple-500 rounded-full' }
  };

  const config = iconConfigs[visaType as keyof typeof iconConfigs] || iconConfigs['H-1B'];

  return (
    <div className={`w-10 h-10 ${config.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
      <div className={config.shape}></div>
    </div>
  );
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [visaTypeFilter, setVisaTypeFilter] = useState('all');

  const stats = {
    current: dummyWorkflows.filter(w => w.status === 'in-progress' || w.status === 'draft').length,
    inReview: dummyWorkflows.filter(w => w.status === 'under-review').length,
    totalSubmissions: dummyWorkflows.length * 15, // Dummy multiplier for submissions
    collaborators: 43
  };

  const filteredWorkflows = dummyWorkflows.filter(workflow => {
    const matchesSearch = workflow.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.visaType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && (workflow.status === 'in-progress' || workflow.status === 'draft')) ||
                         (statusFilter === 'inactive' && (workflow.status === 'approved' || workflow.status === 'rejected'));
    const matchesVisaType = visaTypeFilter === 'all' || workflow.visaType === visaTypeFilter;
    
    return matchesSearch && matchesStatus && matchesVisaType;
  });

  const uniqueVisaTypes = [...new Set(dummyWorkflows.map(w => w.visaType))];

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
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
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
        {/* Welcome Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back, Julia</h1>
            <p className="text-sm text-gray-500">PROJECT SUMMARIES SINCE DEC 10, 2022</p>
          </div>
          <div className="text-right">
            <Button variant="outline" className="text-sm">New Visa Workflow</Button>
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

        {/* Main Workflow Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Visa Workflows</h2>
              <p className="text-sm text-gray-500 mt-1">UPDATED: {new Date().toLocaleDateString().toUpperCase()}</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search workflows..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>

              <Select value={visaTypeFilter} onValueChange={setVisaTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Visa Type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Types</SelectItem>
                  {uniqueVisaTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Visa Workflows */}
          <div className="space-y-4">
            {filteredWorkflows.map((workflow) => (
              <Card key={workflow.id} className="bg-warm-card border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    {getVisaTypeIcon(workflow.visaType)}
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
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Next Start: {new Date(workflow.nextStartDate).toLocaleDateString()}
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
      </main>
    </div>
  );
};

export default Dashboard;
