
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { FileText, Users, Clock, CheckCircle, AlertCircle, Plus, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const workflows = [
    {
      id: 1,
      name: "H1B Transfer - John Smith",
      type: "H1B Transfer",
      status: "In Progress",
      progress: 65,
      dueDate: "2024-02-15",
      priority: "High"
    },
    {
      id: 2,
      name: "Green Card - Sarah Johnson",
      type: "Green Card",
      status: "Pending Review",
      progress: 40,
      dueDate: "2024-03-01",
      priority: "Medium"
    },
    {
      id: 3,
      name: "L1 Visa - Michael Chen",
      type: "L1 Visa",
      status: "Completed",
      progress: 100,
      dueDate: "2024-01-30",
      priority: "Low"
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default";
      case "In Progress":
        return "secondary";
      case "Pending Review":
        return "outline";
      default:
        return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="h-8 w-8 text-amber-600" />
              <h1 className="text-3xl font-bold text-amber-900">LegalFlow Dashboard</h1>
            </div>
            <p className="text-amber-700">Manage your immigration workflows efficiently</p>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Workflow
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Active Cases</CardTitle>
              <FileText className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">12</div>
              <p className="text-xs text-amber-600">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Team Members</CardTitle>
              <Users className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">8</div>
              <p className="text-xs text-amber-600">2 pending invites</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Avg Processing Time</CardTitle>
              <Clock className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">45</div>
              <p className="text-xs text-amber-600">days</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">94%</div>
              <p className="text-xs text-amber-600">+3% from last quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Workflows */}
          <div className="lg:col-span-2">
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-900">Active Workflows</CardTitle>
                <CardDescription className="text-amber-700">
                  Track progress on your current immigration cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {workflows.map((workflow) => (
                  <div key={workflow.id} className="border border-amber-100 rounded-lg p-4 bg-white/50">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <Link 
                          to={`/workflow/${workflow.id}`} 
                          className="text-lg font-semibold text-amber-900 hover:text-amber-700 transition-colors"
                        >
                          {workflow.name}
                        </Link>
                        <p className="text-sm text-amber-600">{workflow.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusBadgeVariant(workflow.status)} className="text-xs">
                          {workflow.status}
                        </Badge>
                        <span className={`text-xs font-medium ${getPriorityColor(workflow.priority)}`}>
                          {workflow.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-amber-700">Progress</span>
                        <span className="text-amber-900 font-medium">{workflow.progress}%</span>
                      </div>
                      <Progress value={workflow.progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-amber-100">
                      <span className="text-xs text-amber-600">Due: {workflow.dueDate}</span>
                      <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-900">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-amber-900">LCA approved for John Smith</p>
                    <p className="text-xs text-amber-600">2 hours ago</p>
                  </div>
                </div>
                <Separator className="bg-amber-200" />
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-amber-900">Documents submitted for Sarah Johnson</p>
                    <p className="text-xs text-amber-600">1 day ago</p>
                  </div>
                </div>
                <Separator className="bg-amber-200" />
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-amber-900">New team member added</p>
                    <p className="text-xs text-amber-600">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-amber-300 text-amber-700 hover:bg-amber-50">
                  <FileText className="mr-2 h-4 w-4" />
                  Create H1B Workflow
                </Button>
                <Button variant="outline" className="w-full justify-start border-amber-300 text-amber-700 hover:bg-amber-50">
                  <Users className="mr-2 h-4 w-4" />
                  Invite Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start border-amber-300 text-amber-700 hover:bg-amber-50">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  View Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
