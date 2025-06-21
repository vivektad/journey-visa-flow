import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  FileText, 
  AlertTriangle, 
  ChevronDown,
  Download,
  Upload,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WorkflowDetails = () => {
  const [openSteps, setOpenSteps] = useState<number[]>([0, 1]);

  const toggleStep = (stepIndex: number) => {
    setOpenSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const workflowSteps = [
    {
      title: "Eligibility Assessment",
      status: "completed",
      description: "Verify employee eligibility for H1B transfer",
      dueDate: "2024-01-15",
      tasks: [
        { name: "Review current H1B status", completed: true },
        { name: "Verify employer sponsorship eligibility", completed: true },
        { name: "Check remaining H1B time", completed: true },
        { name: "Assess gap employment issues", completed: true }
      ],
      documents: ["Current I-94", "Previous I-129 Approval", "Pay stubs"]
    },
    {
      title: "Labor Condition Application (LCA)",
      status: "in-progress",
      description: "File LCA with Department of Labor",
      dueDate: "2024-02-01",
      tasks: [
        { name: "Determine prevailing wage", completed: true },
        { name: "Complete ETA Form 9035", completed: true },
        { name: "Submit LCA to DOL", completed: false },
        { name: "Receive LCA certification", completed: false }
      ],
      documents: ["ETA Form 9035", "Prevailing Wage Determination"]
    },
    {
      title: "H1B Petition Filing",
      status: "pending",
      description: "Prepare and submit Form I-129 to USCIS",
      dueDate: "2024-02-15",
      tasks: [
        { name: "Gather required documents from employee", completed: false },
        { name: "Complete Form I-129", completed: false },
        { name: "Submit petition to USCIS", completed: false },
        { name: "Track receipt and processing", completed: false }
      ],
      documents: ["Form I-129", "Employee credentials", "Company support letter"]
    },
    {
      title: "USCIS Decision",
      status: "pending",
      description: "Await decision from USCIS on the H1B petition",
      dueDate: "2024-03-15",
      tasks: [
        { name: "Monitor case status online", completed: false },
        { name: "Prepare for potential RFE", completed: false },
        { name: "Receive approval notice", completed: false }
      ],
      documents: ["RFE (if applicable)", "Approval Notice"]
    },
    {
      title: "H1B Visa Stamping (if applicable)",
      status: "pending",
      description: "Schedule and attend visa interview",
      dueDate: "2024-04-15",
      tasks: [
        { name: "Schedule visa appointment", completed: false },
        { name: "Prepare for interview", completed: false },
        { name: "Attend visa interview", completed: false },
        { name: "Receive visa stamp", completed: false }
      ],
      documents: ["DS-160 confirmation", "Interview letter", "Passport"]
    },
    {
      title: "Transfer Complete",
      status: "pending",
      description: "Complete the H1B transfer process",
      dueDate: "2024-05-15",
      tasks: [
        { name: "Confirm start date with new employer", completed: false },
        { name: "Update employee records", completed: false },
        { name: "Notify USCIS of any changes", completed: false }
      ],
      documents: ["Employment verification", "Updated I-9"]
    },
    {
      title: "Post-Transfer Compliance",
      status: "pending",
      description: "Ensure ongoing compliance with H1B regulations",
      dueDate: "2024-06-15",
      tasks: [
        { name: "Maintain public access file", completed: false },
        { name: "Conduct annual wage reviews", completed: false },
        { name: "Monitor employee's immigration status", completed: false }
      ],
      documents: ["Public Access File", "Wage Documentation"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />;
      case "pending":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case "in-progress":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case "pending":
        return <Badge variant="outline" className="border-yellow-300 text-yellow-700">Pending</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-amber-900">H1B Transfer - John Smith</h1>
              <p className="text-amber-700">Started January 10, 2024 • Due February 28, 2024</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>
            <span className="text-2xl font-bold text-amber-900">65%</span>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-amber-900">Overall Progress</CardTitle>
            <CardDescription className="text-amber-700">
              Track the completion status of your H1B transfer workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-amber-700">Workflow Progress</span>
                <span className="text-amber-900 font-medium">65%</span>
              </div>
              <Progress value={65} className="h-3" />
              <div className="flex justify-between text-xs text-amber-600">
                <span>4 of 7 steps completed</span>
                <span>Est. completion: Feb 28, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Workflow Steps</h2>
            
            {workflowSteps.map((step, index) => (
              <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <Collapsible 
                  open={openSteps.includes(index)} 
                  onOpenChange={() => toggleStep(index)}
                >
                  <CardHeader className="pb-3">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:bg-amber-50/50 p-2 rounded-md transition-colors">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(step.status)}
                        <div>
                          <CardTitle className="text-amber-900">{step.title}</CardTitle>
                          <CardDescription className="text-amber-700">{step.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getStatusBadge(step.status)}
                        <ChevronDown className="h-4 w-4 text-amber-600" />
                      </div>
                    </CollapsibleTrigger>
                  </CardHeader>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <Separator className="mb-4 bg-amber-200" />
                      
                      {/* Tasks */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-amber-900 mb-3">Tasks</h4>
                        <div className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center space-x-3 p-2 rounded-md hover:bg-amber-50/50">
                              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                task.completed ? 'bg-green-500 border-green-500' : 'border-amber-300'
                              }`}>
                                {task.completed && <CheckCircle className="h-3 w-3 text-white" />}
                              </div>
                              <span className={`text-sm ${task.completed ? 'text-amber-700 line-through' : 'text-amber-900'}`}>
                                {task.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Documents */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-amber-900 mb-3">Required Documents</h4>
                        <div className="space-y-2">
                          {step.documents.map((doc, docIndex) => (
                            <div key={docIndex} className="flex items-center justify-between p-2 bg-amber-50/50 rounded-md">
                              <div className="flex items-center space-x-2">
                                <FileText className="h-4 w-4 text-amber-600" />
                                <span className="text-sm text-amber-900">{doc}</span>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" className="h-7 px-2 border-amber-300 text-amber-700 hover:bg-amber-50">
                                  <Upload className="h-3 w-3 mr-1" />
                                  Upload
                                </Button>
                                <Button variant="outline" size="sm" className="h-7 px-2 border-amber-300 text-amber-700 hover:bg-amber-50">
                                  <Download className="h-3 w-3 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                        <span className="text-sm text-amber-600">Due: {step.dueDate}</span>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                          <Send className="mr-2 h-3 w-3" />
                          Mark Complete
                        </Button>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Case Information */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-900">Case Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-amber-700">Employee:</span>
                  <p className="text-amber-900">John Smith</p>
                </div>
                <Separator className="bg-amber-200" />
                <div>
                  <span className="text-sm font-medium text-amber-700">Current Status:</span>
                  <p className="text-amber-900">H1B Valid until Dec 2025</p>
                </div>
                <Separator className="bg-amber-200" />
                <div>
                  <span className="text-sm font-medium text-amber-700">New Employer:</span>
                  <p className="text-amber-900">Tech Solutions Inc.</p>
                </div>
                <Separator className="bg-amber-200" />
                <div>
                  <span className="text-sm font-medium text-amber-700">Position:</span>
                  <p className="text-amber-900">Senior Software Engineer</p>
                </div>
                <Separator className="bg-amber-200" />
                <div>
                  <span className="text-sm font-medium text-amber-700">Priority:</span>
                  <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">High</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-900">Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-amber-800">JS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-900">John Smith</p>
                    <p className="text-xs text-amber-600">Employee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-amber-800">MC</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-900">Maria Chen</p>
                    <p className="text-xs text-amber-600">Attorney</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-amber-800">DR</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-900">David Rodriguez</p>
                    <p className="text-xs text-amber-600">HR Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDetails;
