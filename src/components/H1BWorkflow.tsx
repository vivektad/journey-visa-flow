
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ChevronRight,
  ChevronDown 
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  estimatedDays: number;
  documents?: string[];
  forms?: string[];
  dependencies?: string[];
  assignedTo: string;
}

const h1bTransferWorkflow: WorkflowStep[] = [
  {
    id: 'eligibility',
    title: 'Eligibility Assessment',
    description: 'Verify employee eligibility for H1B transfer and gather initial information',
    status: 'completed',
    estimatedDays: 2,
    documents: ['Current H1B approval notice', 'Passport copy', 'Current paystubs'],
    assignedTo: 'Immigration Team'
  },
  {
    id: 'job-analysis',
    title: 'Job Analysis & Classification',
    description: 'Analyze new position requirements and determine appropriate job classification',
    status: 'completed',
    estimatedDays: 3,
    documents: ['Job description', 'Organizational chart', 'Position requirements'],
    assignedTo: 'HR Department'
  },
  {
    id: 'lca-filing',
    title: 'Labor Condition Application (LCA)',
    description: 'File LCA with Department of Labor for the new position',
    status: 'in-progress',
    estimatedDays: 7,
    forms: ['Form ETA-9035/9035E'],
    documents: ['Prevailing wage determination', 'Public access file'],
    dependencies: ['job-analysis'],
    assignedTo: 'Legal Team'
  },
  {
    id: 'document-prep',
    title: 'Document Preparation',
    description: 'Gather and prepare all supporting documents for I-129 petition',
    status: 'pending',
    estimatedDays: 5,
    documents: [
      'Support letter from new employer',
      'Educational credentials evaluation',
      'Previous H1B approvals',
      'Employment verification letter',
      'Company financial documents'
    ],
    dependencies: ['lca-filing'],
    assignedTo: 'Immigration Team'
  },
  {
    id: 'i129-filing',
    title: 'I-129 Petition Filing',
    description: 'File Form I-129 petition with USCIS for H1B transfer',
    status: 'pending',
    estimatedDays: 1,
    forms: ['Form I-129', 'H-1B Data Collection Supplement'],
    dependencies: ['document-prep'],
    assignedTo: 'Legal Team'
  },
  {
    id: 'uscis-processing',
    title: 'USCIS Processing',
    description: 'Wait for USCIS adjudication of the H1B transfer petition',
    status: 'pending',
    estimatedDays: 90,
    dependencies: ['i129-filing'],
    assignedTo: 'USCIS'
  },
  {
    id: 'approval-processing',
    title: 'Approval & Work Authorization',
    description: 'Process approval notice and authorize employee to begin work',
    status: 'pending',
    estimatedDays: 2,
    documents: ['I-797 approval notice', 'Updated I-94 record'],
    dependencies: ['uscis-processing'],
    assignedTo: 'HR Department'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'in-progress':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'pending':
      return 'bg-gray-100 text-gray-600 border-gray-200';
    case 'blocked':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4" />;
    case 'in-progress':
      return <Clock className="w-4 h-4" />;
    case 'pending':
      return <Clock className="w-4 h-4" />;
    case 'blocked':
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const H1BWorkflow = () => {
  const [expandedSteps, setExpandedSteps] = useState<string[]>(['lca-filing']);

  const toggleStep = (stepId: string) => {
    setExpandedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const completedSteps = h1bTransferWorkflow.filter(step => step.status === 'completed').length;
  const totalSteps = h1bTransferWorkflow.length;
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className="space-y-6">
      {/* Workflow Header */}
      <Card className="bg-warm-card border border-gray-200">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                H1B Transfer Workflow
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Employee: Sarah Johnson • New Employer: TechCorp Inc.
              </p>
            </div>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              In Progress
            </Badge>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress: {completedSteps} of {totalSteps} steps completed</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Workflow Steps */}
      <div className="space-y-3">
        {h1bTransferWorkflow.map((step, index) => (
          <Card key={step.id} className="bg-warm-card border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : step.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="flex items-center space-x-2 text-left hover:text-blue-600 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900">{step.title}</h3>
                      {expandedSteps.includes(step.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(step.status)}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(step.status)}
                          <span className="capitalize text-xs">{step.status.replace('-', ' ')}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>

                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {step.estimatedDays} days
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {step.assignedTo}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedSteps.includes(step.id) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.forms && step.forms.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              Forms Required
                            </h4>
                            <ul className="space-y-1">
                              {step.forms.map((form, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                                  {form}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {step.documents && step.documents.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              Documents Required
                            </h4>
                            <ul className="space-y-1">
                              {step.documents.map((doc, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                                  {doc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {step.dependencies && step.dependencies.length > 0 && (
                        <div className="mt-3">
                          <h4 className="font-medium text-gray-900 mb-2">Dependencies</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.dependencies.map((dep) => {
                              const depStep = h1bTransferWorkflow.find(s => s.id === dep);
                              return (
                                <Badge key={dep} variant="outline" className="text-xs">
                                  {depStep?.title || dep}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        {step.status === 'pending' && (
                          <Button size="sm">
                            Start Step
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline Summary */}
      <Card className="bg-warm-card border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Timeline Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-sage rounded-lg">
              <div className="text-2xl font-bold text-gray-900">
                {h1bTransferWorkflow.reduce((sum, step) => sum + step.estimatedDays, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Days</div>
            </div>
            <div className="text-center p-4 bg-soft-orange rounded-lg">
              <div className="text-2xl font-bold text-gray-900">
                {h1bTransferWorkflow.filter(s => s.status === 'completed' || s.status === 'in-progress').reduce((sum, step) => sum + step.estimatedDays, 0)}
              </div>
              <div className="text-sm text-gray-600">Days Elapsed</div>
            </div>
            <div className="text-center p-4 bg-muted-blue rounded-lg">
              <div className="text-2xl font-bold text-gray-900">
                {h1bTransferWorkflow.filter(s => s.status === 'pending').reduce((sum, step) => sum + step.estimatedDays, 0)}
              </div>
              <div className="text-sm text-gray-600">Days Remaining</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default H1BWorkflow;
