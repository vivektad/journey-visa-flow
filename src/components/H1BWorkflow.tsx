
import React from 'react';
import WorkflowHeader from '@/components/WorkflowHeader';
import WorkflowMilestones from '@/components/WorkflowMilestones';

const H1BWorkflow = () => {
  return (
    <div className="space-y-6">
      <WorkflowHeader />
      <WorkflowMilestones />
    </div>
  );
};

export default H1BWorkflow;
