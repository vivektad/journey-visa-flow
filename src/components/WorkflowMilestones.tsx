
import React, { useState } from 'react';
import { useTaskStatus } from '@/hooks/useTaskStatus';
import { milestones } from '@/data/milestoneData';
import MilestoneList from '@/components/workflow/MilestoneList';
import TaskDetails from '@/components/workflow/TaskDetails';

const WorkflowMilestones = () => {
  const [selectedTask, setSelectedTask] = useState<string>('task-1-1');
  const [showAll, setShowAll] = useState<boolean>(false);

  const { milestonesWithCalculatedStatus, getBlockingTaskNames } = useTaskStatus(milestones);

  // Filter milestones based on showAll state
  const filteredMilestones = showAll 
    ? milestonesWithCalculatedStatus 
    : milestonesWithCalculatedStatus.filter(milestone => milestone.status === 'in-progress');

  const handleAssigneeChange = (taskId: string, newAssignee: string) => {
    // In a real app, this would update the backend
    console.log(`Task ${taskId} reassigned to ${newAssignee}`);
  };

  const selectedTaskData = milestonesWithCalculatedStatus
    .flatMap(m => m.tasks)
    .find(task => task.id === selectedTask);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Milestones and Tasks */}
      <div className="lg:col-span-1">
        <MilestoneList
          filteredMilestones={filteredMilestones}
          selectedTask={selectedTask}
          onTaskSelect={setSelectedTask}
          showAll={showAll}
          onToggleShowAll={() => setShowAll(!showAll)}
        />
      </div>

      {/* Right Column - Task Details */}
      <div className="lg:col-span-2">
        <TaskDetails
          selectedTaskData={selectedTaskData}
          getBlockingTaskNames={getBlockingTaskNames}
          onAssigneeChange={handleAssigneeChange}
        />
      </div>
    </div>
  );
};

export default WorkflowMilestones;
