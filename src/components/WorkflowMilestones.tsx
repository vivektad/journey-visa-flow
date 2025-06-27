
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending' | 'not-started' | 'blocked';
  description?: string;
  assignee: 'HR Manager' | 'Employee' | 'Lawyer';
  blockedBy: string[]; // Array of task IDs that must be completed before this task can start
  blocks: string[]; // Array of task IDs that this task blocks
}

interface Milestone {
  id: string;
  title: string;
  tasks: Task[];
  status: 'completed' | 'in-progress' | 'pending';
}

const WorkflowMilestones = () => {
  const [selectedTask, setSelectedTask] = useState<string>('task-1-1');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Mock user data for assignees
  const users = {
    'HR Manager': 'Jennifer Davis',
    'Employee': 'Sarah Chen',
    'Lawyer': 'Michael Rodriguez'
  };

  // Company onboarding fields
  const companyOnboardingFields = [
    'Company Legal Name',
    'Company Address',
    'Company Phone Number',
    'Company Email',
    'Federal Employer Identification Number (FEIN)',
    'NAICS Code',
    'Year Company was Founded',
    'Number of Employees',
    'Primary Contact Name',
    'Primary Contact Title',
    'Primary Contact Email',
    'Primary Contact Phone'
  ];

  // Employee onboarding fields
  const employeeOnboardingFields = [
    'Full Legal Name',
    'Date of Birth',
    'Country of Birth',
    'Gender',
    'Current Address',
    'Phone Number',
    'Email Address',
    'Passport Number',
    'Passport Country of Issuance',
    'Passport Expiration Date',
    'Current Immigration Status',
    'I-94 Number',
    'Educational Background',
    'Work Experience',
    'Job Title',
    'Job Description',
    'Salary Information'
  ];

  const milestones: Milestone[] = [
    {
      id: 'milestone-1',
      title: 'Collect Information',
      status: 'completed',
      tasks: [
        { 
          id: 'task-1-1', 
          title: 'Company Info Form Complete', 
          status: 'completed', 
          description: 'All company information has been collected and verified.', 
          assignee: 'HR Manager',
          blockedBy: [],
          blocks: ['task-2-1']
        },
        { 
          id: 'task-1-2', 
          title: 'Employee\'s Info Form Complete', 
          status: 'completed', 
          description: 'Employee personal information and documentation collected.', 
          assignee: 'Employee',
          blockedBy: [],
          blocks: ['task-4-2']
        }
      ]
    },
    {
      id: 'milestone-2',
      title: 'Company Payment',
      status: 'in-progress',
      tasks: [
        { 
          id: 'task-2-1', 
          title: 'Determine Premium Processing', 
          status: 'completed', 
          description: 'Premium processing requirements determined.', 
          assignee: 'HR Manager',
          blockedBy: ['task-1-1'],
          blocks: ['task-2-2']
        },
        { 
          id: 'task-2-2', 
          title: 'Payment', 
          status: 'in-progress', 
          description: 'Processing payment for application fees.', 
          assignee: 'HR Manager',
          blockedBy: ['task-2-1'],
          blocks: ['task-3-1', 'task-4-1']
        }
      ]
    },
    {
      id: 'milestone-3',
      title: 'LCA Preparation',
      status: 'pending',
      tasks: [
        { 
          id: 'task-3-1', 
          title: 'Collect LCA Information', 
          status: 'not-started', 
          description: 'Gather all necessary information for LCA preparation.', 
          assignee: 'HR Manager',
          blockedBy: ['task-2-2'],
          blocks: ['task-3-2']
        },
        { 
          id: 'task-3-2', 
          title: 'Check Prevailing Wage', 
          status: 'not-started', 
          description: 'Verify prevailing wage requirements for the position.', 
          assignee: 'Lawyer',
          blockedBy: ['task-3-1'],
          blocks: ['task-3-3']
        },
        { 
          id: 'task-3-3', 
          title: 'Complete LCA Draft Filing', 
          status: 'not-started', 
          description: 'Prepare and complete Labor Condition Application draft.', 
          assignee: 'Lawyer',
          blockedBy: ['task-3-2'],
          blocks: ['task-5-1']
        }
      ]
    },
    {
      id: 'milestone-4',
      title: 'I-129 Preparation',
      status: 'pending',
      tasks: [
        { 
          id: 'task-4-1', 
          title: 'Collect I-129 Information (Employer)', 
          status: 'not-started', 
          description: 'Gather employer-specific information for I-129 petition.', 
          assignee: 'HR Manager',
          blockedBy: ['task-2-2', 'task-5-1'],
          blocks: ['task-4-3']
        },
        { 
          id: 'task-4-2', 
          title: 'Collect I-129 Information (Employee)', 
          status: 'not-started', 
          description: 'Gather employee-specific information for I-129 petition.', 
          assignee: 'Employee',
          blockedBy: ['task-1-2'],
          blocks: ['task-4-3']
        },
        { 
          id: 'task-4-3', 
          title: 'Complete I-129 Draft Filing', 
          status: 'not-started', 
          description: 'Prepare and complete Form I-129 petition draft.', 
          assignee: 'Lawyer',
          blockedBy: ['task-4-1', 'task-4-2'],
          blocks: ['task-5-2']
        }
      ]
    },
    {
      id: 'milestone-5',
      title: 'Lawyer\'s Review',
      status: 'pending',
      tasks: [
        { 
          id: 'task-5-1', 
          title: 'LCA Review Complete', 
          status: 'not-started', 
          description: 'Attorney review of Labor Condition Application.', 
          assignee: 'Lawyer',
          blockedBy: ['task-3-3'],
          blocks: ['task-6-1', 'task-4-1']
        },
        { 
          id: 'task-5-2', 
          title: 'I-129 Review Complete', 
          status: 'not-started', 
          description: 'Attorney review of I-129 petition.', 
          assignee: 'Lawyer',
          blockedBy: ['task-4-3'],
          blocks: ['task-6-3']
        }
      ]
    },
    {
      id: 'milestone-6',
      title: 'Submit Filings and Payment',
      status: 'pending',
      tasks: [
        { 
          id: 'task-6-1', 
          title: 'Submit LCA', 
          status: 'not-started', 
          description: 'Submit Labor Condition Application to DOL.', 
          assignee: 'Lawyer',
          blockedBy: ['task-5-1'],
          blocks: ['task-6-2']
        },
        { 
          id: 'task-6-2', 
          title: 'Confirm LCA Acceptance', 
          status: 'not-started', 
          description: 'Confirm DOL acceptance of LCA.', 
          assignee: 'Lawyer',
          blockedBy: ['task-6-1'],
          blocks: ['task-6-3']
        },
        { 
          id: 'task-6-3', 
          title: 'Submit I-129', 
          status: 'not-started', 
          description: 'Submit I-129 petition to USCIS.', 
          assignee: 'Lawyer',
          blockedBy: ['task-6-2', 'task-5-2'],
          blocks: ['task-6-4']
        },
        { 
          id: 'task-6-4', 
          title: 'Confirm Receipt of I-797', 
          status: 'not-started', 
          description: 'Confirm receipt of I-797 notice from USCIS.', 
          assignee: 'Lawyer',
          blockedBy: ['task-6-3'],
          blocks: []
        }
      ]
    }
  ];

  // Create a map of all tasks for easy lookup
  const allTasks = useMemo(() => {
    const taskMap = new Map<string, Task>();
    milestones.forEach(milestone => {
      milestone.tasks.forEach(task => {
        taskMap.set(task.id, task);
      });
    });
    return taskMap;
  }, []);

  // Calculate task status based on dependencies
  const getCalculatedTaskStatus = (task: Task): Task['status'] => {
    // If task is already completed or in-progress, keep that status
    if (task.status === 'completed' || task.status === 'in-progress') {
      return task.status;
    }

    // Check if all blocking tasks are completed
    const isBlocked = task.blockedBy.some(blockingTaskId => {
      const blockingTask = allTasks.get(blockingTaskId);
      return !blockingTask || blockingTask.status !== 'completed';
    });

    return isBlocked ? 'blocked' : 'pending';
  };

  // Update milestones with calculated task statuses
  const milestonesWithCalculatedStatus = useMemo(() => {
    return milestones.map(milestone => ({
      ...milestone,
      tasks: milestone.tasks.map(task => ({
        ...task,
        status: getCalculatedTaskStatus(task)
      }))
    }));
  }, [allTasks]);

  // Filter milestones based on showAll state
  const filteredMilestones = showAll 
    ? milestonesWithCalculatedStatus 
    : milestonesWithCalculatedStatus.filter(milestone => milestone.status === 'in-progress');

  const getStatusDot = (status: string) => {
    const tooltipText = status === 'completed' ? 'Completed' : 
                       status === 'in-progress' ? 'In Progress' : 
                       status === 'blocked' ? 'Blocked' :
                       'Available';
    
    const dotColor = status === 'completed' ? 'bg-green-500' : 
                     status === 'in-progress' ? 'bg-blue-500' : 
                     status === 'blocked' ? 'bg-red-500' :
                     'bg-gray-400';

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className={`w-3 h-3 rounded-full ${dotColor}`} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const handleAssigneeChange = (taskId: string, newAssignee: string) => {
    // In a real app, this would update the backend
    console.log(`Task ${taskId} reassigned to ${newAssignee}`);
  };

  const selectedTaskData = milestonesWithCalculatedStatus
    .flatMap(m => m.tasks)
    .find(task => task.id === selectedTask);

  // Helper function to convert task index to letter
  const getTaskLetter = (index: number) => String.fromCharCode(65 + index); // A, B, C, etc.

  // Get blocking task names for display
  const getBlockingTaskNames = (task: Task): string[] => {
    return task.blockedBy.map(taskId => {
      const blockingTask = allTasks.get(taskId);
      return blockingTask ? blockingTask.title : taskId;
    });
  };

  // Get onboarding fields based on task
  const getOnboardingFields = (taskId: string) => {
    if (taskId === 'task-1-1') {
      return companyOnboardingFields;
    } else if (taskId === 'task-1-2') {
      return employeeOnboardingFields;
    }
    return [];
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Milestones and Tasks */}
      <div className="lg:col-span-1">
        <Card className="bg-white">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Workflow Milestones</h2>
            
            <div className="space-y-3">
              {filteredMilestones.map((milestone, milestoneIndex) => (
                <div key={milestone.id}>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-gray-400 font-semibold text-base">{milestoneIndex + 1}</span>
                    <h3 className="text-base font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                  
                  <div className="space-y-1">
                    {milestone.tasks.map((task, taskIndex) => (
                      <div
                        key={task.id}
                        className={`cursor-pointer border rounded-lg p-3 transition-all hover:border-gray-300 ${
                          selectedTask === task.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-white'
                        }`}
                        onClick={() => setSelectedTask(task.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm font-medium">{getTaskLetter(taskIndex)}</span>
                            <span 
                              className={`text-sm font-medium ${
                                task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'
                              }`}
                            >
                              {task.title}
                            </span>
                          </div>
                          {getStatusDot(task.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add separator line between milestones */}
                  {milestoneIndex < filteredMilestones.length - 1 && (
                    <div className="border-t border-gray-200 mt-3"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Show All / Show Less Toggle */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <Button
                variant="ghost"
                onClick={() => setShowAll(!showAll)}
                className="w-full text-sm text-gray-600 hover:text-gray-900"
              >
                {showAll ? 'Show In Progress Only' : 'Show All Steps'}
              </Button>
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
                        selectedTaskData.status === 'blocked' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-600'
                      }
                    >
                      {selectedTaskData.status === 'completed' ? 'Completed' :
                       selectedTaskData.status === 'in-progress' ? 'In Progress' :
                       selectedTaskData.status === 'blocked' ? 'Blocked' :
                       selectedTaskData.status === 'pending' ? 'Available' :
                       'Not Started'}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{selectedTaskData.description}</p>
                  
                  {/* Show blocking information if task is blocked */}
                  {selectedTaskData.status === 'blocked' && selectedTaskData.blockedBy.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-medium text-red-800 mb-1">Blocked by:</h4>
                      <ul className="text-sm text-red-700">
                        {getBlockingTaskNames(selectedTaskData).map((taskName, index) => (
                          <li key={index}>• {taskName}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      <strong>Assigned to:</strong>
                    </div>
                    <Select
                      defaultValue={selectedTaskData.assignee}
                      onValueChange={(value) => handleAssigneeChange(selectedTaskData.id, value)}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HR Manager">{users['HR Manager']} (HR Manager)</SelectItem>
                        <SelectItem value="Employee">{users['Employee']} (Employee)</SelectItem>
                        <SelectItem value="Lawyer">{users['Lawyer']} (Lawyer)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Onboarding Fields for Company and Employee Info tasks */}
                {(selectedTaskData.id === 'task-1-1' || selectedTaskData.id === 'task-1-2') && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      {selectedTaskData.id === 'task-1-1' ? 'Company Information Collected' : 'Employee Information Collected'}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="fields">
                        <AccordionTrigger>
                          View Collected Fields ({getOnboardingFields(selectedTaskData.id).length} items)
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {getOnboardingFields(selectedTaskData.id).map((field, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{field}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}

                {/* Default Task-specific content for other tasks */}
                {selectedTaskData.id !== 'task-1-1' && selectedTaskData.id !== 'task-1-2' && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Task Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Detailed information and forms for this task will be displayed here. 
                        This section will be customized based on the specific requirements of each task.
                      </p>
                    </div>
                  </div>
                )}
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
