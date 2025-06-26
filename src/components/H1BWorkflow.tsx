
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';

const H1BWorkflow = () => {
  return (
    <div className="space-y-6">
      {/* Workflow Information */}
      <Card className="bg-white">
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
          
          <div className="pt-2 border-t border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-1">Assigned Lawyer</div>
            <div className="text-base font-medium text-gray-900">Michael Rodriguez, Esq.</div>
            <div className="text-sm text-gray-600">Immigration Attorney • mrodriguez@lawfirm.com</div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Steps */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Workflow Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center space-x-4 p-4 border border-green-200 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Initial Consultation</div>
                <div className="text-sm text-gray-600">Completed on March 15, 2024</div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Completed</Badge>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-4 p-4 border border-green-200 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Document Collection</div>
                <div className="text-sm text-gray-600">Completed on March 22, 2024</div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Completed</Badge>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-4 p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Form Preparation</div>
                <div className="text-sm text-gray-600">In progress - Forms I-129 and supporting documents</div>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">In Progress</Badge>
            </div>

            {/* Step 4 */}
            <div className="flex items-center space-x-4 p-4 border border-gray-200 bg-gray-50 rounded-lg">
              <FileText className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Client Review</div>
                <div className="text-sm text-gray-600">Pending form preparation completion</div>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-600">Pending</Badge>
            </div>

            {/* Step 5 */}
            <div className="flex items-center space-x-4 p-4 border border-gray-200 bg-gray-50 rounded-lg">
              <FileText className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">USCIS Filing</div>
                <div className="text-sm text-gray-600">Awaiting client review and approval</div>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-600">Pending</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Status */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Required Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Passport Copy</div>
                <div className="text-sm text-gray-600">Received</div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Educational Credentials</div>
                <div className="text-sm text-gray-600">Received</div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Labor Condition Application</div>
                <div className="text-sm text-gray-600">In preparation</div>
              </div>
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Medical Examination</div>
                <div className="text-sm text-gray-600">Not started</div>
              </div>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button className="bg-gray-900 hover:bg-gray-800 text-white">
          Update Status
        </Button>
        <Button variant="outline">
          Contact Client
        </Button>
        <Button variant="outline">
          Generate Report
        </Button>
      </div>
    </div>
  );
};

export default H1BWorkflow;
