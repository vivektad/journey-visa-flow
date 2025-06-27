
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Milestone, Task } from '@/hooks/useTaskStatus';

interface MilestoneListProps {
  filteredMilestones: Milestone[];
  selectedTask: string;
  onTaskSelect: (taskId: string) => void;
  showAll: boolean;
  onToggleShowAll: () => void;
}

const MilestoneList: React.FC<MilestoneListProps> = ({
  filteredMilestones,
  selectedTask,
  onTaskSelect,
  showAll,
  onToggleShowAll
}) => {
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

  // Helper function to convert task index to letter
  const getTaskLetter = (index: number) => String.fromCharCode(65 + index);

  return (
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
                    onClick={() => onTaskSelect(task.id)}
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
            onClick={onToggleShowAll}
            className="w-full text-sm text-gray-600 hover:text-gray-900"
          >
            {showAll ? 'Show In Progress Only' : 'Show All Steps'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneList;
