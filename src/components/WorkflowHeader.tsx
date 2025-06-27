
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WorkflowHeader = () => {
  return (
    <Card className="bg-white mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Workflow Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Applicant</div>
            <div className="text-base font-medium text-gray-900">Sarah Chen</div>
            <div className="text-sm text-gray-600">Software Engineer</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Visa Type & Action</div>
            <div className="text-base font-medium text-gray-900">H-1B Initial Filing</div>
            <Badge variant="secondary" className="mt-1">In Progress</Badge>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Workflow Start Date</div>
            <div className="text-base font-medium text-gray-900">March 15, 2024</div>
            <div className="text-sm text-gray-600">Expected Completion: June 15, 2024</div>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Assigned Lawyer</div>
            <div className="text-base font-medium text-gray-900">Michael Rodriguez, Esq.</div>
            <div className="text-sm text-gray-600">Immigration Attorney • mrodriguez@lawfirm.com</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">HR Manager</div>
            <div className="text-base font-medium text-gray-900">Jennifer Davis</div>
            <div className="text-sm text-gray-600">Human Resources • jdavis@company.com</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowHeader;
