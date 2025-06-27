import { useMemo } from 'react';

export interface Task {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending' | 'not-started' | 'blocked';
  description?: string;
  assignee: 'HR Manager' | 'Employee' | 'Lawyer';
  blockedBy: string[];
  blocks: string[];
}

export interface Milestone {
  id: string;
  title: string;
  tasks: Task[];
  status: 'completed' | 'in-progress' | 'pending';
}

export const useTaskStatus = (milestones: Milestone[]) => {
  // Create a map of all tasks for easy lookup
  const allTasks = useMemo(() => {
    const taskMap = new Map<string, Task>();
    milestones.forEach(milestone => {
      milestone.tasks.forEach(task => {
        taskMap.set(task.id, task);
      });
    });
    return taskMap;
  }, [milestones]);

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
  }, [milestones, allTasks]);

  // Get blocking task names for display
  const getBlockingTaskNames = (task: Task): string[] => {
    return task.blockedBy.map(taskId => {
      const blockingTask = allTasks.get(taskId);
      return blockingTask ? blockingTask.title : taskId;
    });
  };

  return {
    allTasks,
    milestonesWithCalculatedStatus,
    getBlockingTaskNames
  };
};
