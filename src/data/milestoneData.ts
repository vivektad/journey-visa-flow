
import { Milestone } from '@/hooks/useTaskStatus';

export const milestones: Milestone[] = [
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
