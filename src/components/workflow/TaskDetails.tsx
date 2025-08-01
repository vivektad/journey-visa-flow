import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Task } from '@/hooks/useTaskStatus';
import CompanyInfoForm from './CompanyInfoForm';
import EmployeeInfoForm from './EmployeeInfoForm';
import ProcessingPriorityForm from './ProcessingPriorityForm';
import PaymentForm from './PaymentForm';
import LCAInformationForm from './LCAInformationForm';

interface TaskDetailsProps {
  selectedTaskData: Task | undefined;
  getBlockingTaskNames: (task: Task) => string[];
  onAssigneeChange: (taskId: string, newAssignee: string) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  selectedTaskData,
  getBlockingTaskNames,
  onAssigneeChange
}) => {
  // Mock user data for assignees
  const users = {
    'HR Manager': 'Jennifer Davis',
    'Employee': 'Sarah Chen',
    'Lawyer': 'Michael Rodriguez'
  };

  if (!selectedTaskData) {
    return (
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="text-center py-8">
            <p className="text-gray-500">Select a task to view details</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const handleFormComplete = (data: any) => {
    console.log('Form completed:', data);
    // In a real app, this would save the data and update task status
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
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
                onValueChange={(value) => onAssigneeChange(selectedTaskData.id, value)}
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

          {/* Step-based forms for specific tasks */}
          <div className="border-t pt-6">
            {selectedTaskData.id === 'task-1-1' ? (
              <CompanyInfoForm onComplete={handleFormComplete} />
            ) : selectedTaskData.id === 'task-1-2' ? (
              <EmployeeInfoForm onComplete={handleFormComplete} />
            ) : selectedTaskData.id === 'task-2-1' ? (
              <ProcessingPriorityForm onComplete={handleFormComplete} />
            ) : selectedTaskData.id === 'task-2-2' ? (
              <PaymentForm onComplete={handleFormComplete} />
            ) : selectedTaskData.id === 'task-3-1' ? (
              <LCAInformationForm onComplete={handleFormComplete} />
            ) : (
              <div>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
