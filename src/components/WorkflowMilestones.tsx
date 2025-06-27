
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending' | 'not-started';
  description?: string;
}

interface Milestone {
  id: string;
  title: string;
  tasks: Task[];
  status: 'completed' | 'in-progress' | 'pending';
}

const WorkflowMilestones = () => {
  const [selectedTask, setSelectedTask] = useState<string>('task-1-1');

  const milestones: Milestone[] = [
    {
      id: 'milestone-1',
      title: 'Collect Information',
      status: 'completed',
      tasks: [
        { id: 'task-1-1', title: 'Company Info Form Complete', status: 'completed', description: 'All company information has been collected and verified.' },
        { id: 'task-1-2', title: 'Employee\'s Info Form Complete', status: 'completed', description: 'Employee personal information and documentation collected.' }
      ]
    },
    {
      id: 'milestone-2',
      title: 'Company Payment',
      status: 'in-progress',
      tasks: [
        { id: 'task-2-1', title: 'Determine Premium Processing', status: 'completed', description: 'Premium processing requirements determined.' },
        { id: 'task-2-2', title: 'Payment', status: 'in-progress', description: 'Processing payment for application fees.' }
      ]
    },
    {
      id: 'milestone-3',
      title: 'LCA Preparation',
      status: 'pending',
      tasks: [
        { id: 'task-3-1', title: 'Check Prevailing Wage', status: 'not-started', description: 'Verify prevailing wage requirements for the position.' },
        { id: 'task-3-2', title: 'Complete LCA Filing', status: 'not-started', description: 'Prepare and complete Labor Condition Application.' }
      ]
    },
    {
      id: 'milestone-4',
      title: 'I-129 Preparation',
      status: 'pending',
      tasks: [
        { id: 'task-4-1', title: 'Complete I-129 Filing', status: 'not-started', description: 'Prepare and complete Form I-129 petition.' }
      ]
    },
    {
      id: 'milestone-5',
      title: 'Lawyer\'s Review',
      status: 'pending',
      tasks: [
        { id: 'task-5-1', title: 'LCA Review Complete', status: 'not-started', description: 'Attorney review of Labor Condition Application.' },
        { id: 'task-5-2', title: 'I-129 Review Complete', status: 'not-started', description: 'Attorney review of I-129 petition.' }
      ]
    },
    {
      id: 'milestone-6',
      title: 'Submit Filings and Payment',
      status: 'pending',
      tasks: [
        { id: 'task-6-1', title: 'Submit LCA', status: 'not-started', description: 'Submit Labor Condition Application to DOL.' },
        { id: 'task-6-2', title: 'Confirm LCA Acceptance', status: 'not-started', description: 'Confirm DOL acceptance of LCA.' },
        { id: 'task-6-3', title: 'Submit I-129', status: 'not-started', description: 'Submit I-129 petition to USCIS.' },
        { id: 'task-6-4', title: 'Confirm Receipt of I-797', status: 'not-started', description: 'Confirm receipt of I-797 notice from USCIS.' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'pending':
      case 'not-started':
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'in-progress':
        return 'text-blue-600';
      case 'pending':
      case 'not-started':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const selectedTaskData = milestones
    .flatMap(m => m.tasks)
    .find(task => task.id === selectedTask);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Milestones and Tasks */}
      <div className="lg:col-span-1">
        <Card className="bg-white">
          <CardContent className="p-0">
            <div className="space-y-4 p-6">
              <h2 className="text-lg font-semibold text-gray-900">Workflow Milestones</h2>
              
              {milestones.map((milestone, milestoneIndex) => (
                <div key={milestone.id} className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <span className="text-gray-400">{milestoneIndex + 1}</span>
                    <span>{milestone.title}</span>
                    {getStatusIcon(milestone.status)}
                  </div>
                  
                  <div className="ml-4 space-y-1">
                    {milestone.tasks.map((task, taskIndex) => (
                      <div
                        key={task.id}
                        className={`cursor-pointer p-2 rounded text-sm transition-colors ${
                          selectedTask === task.id
                            ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-500'
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedTask(task.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className={getStatusColor(task.status)}>{task.title}</span>
                          {getStatusIcon(task.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Task Details */}
      <div className="lg:col-span-2">
        <Card className="bg-white">
          <CardContent className="p-6">
            {selectedTaskData ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{selectedTaskData.title}</h2>
                    <Badge 
                      variant="secondary" 
                      className={
                        selectedTaskData.status === 'completed' ? 'bg-green-100 text-green-800' :
                        selectedTaskData.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-600'
                      }
                    >
                      {selectedTaskData.status === 'completed' ? 'Completed' :
                       selectedTaskData.status === 'in-progress' ? 'In Progress' :
                       selectedTaskData.status === 'pending' ? 'Pending' :
                       'Not Started'}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{selectedTaskData.description}</p>
                </div>

                {/* Task-specific content would go here */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Task Details</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Detailed information and forms for this task will be displayed here. 
                      This section will be customized based on the specific requirements of each task.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Select a task to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkflowMilestones;
