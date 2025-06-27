
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface OnboardingDataDisplayProps {
  taskId: string;
  taskTitle: string;
}

const OnboardingDataDisplay: React.FC<OnboardingDataDisplayProps> = ({ taskId, taskTitle }) => {
  // Company onboarding data with values
  const companyOnboardingData = {
    'Company Legal Name': 'TechCorp Solutions Inc.',
    'Company Address': '123 Innovation Drive, San Francisco, CA 94105',
    'Company Phone Number': '+1 (555) 123-4567',
    'Company Email': 'info@techcorpsolutions.com',
    'Federal Employer Identification Number (FEIN)': '12-3456789',
    'NAICS Code': '541511',
    'Year Company was Founded': '2018',  
    'Number of Employees': '127',
    'Primary Contact Name': 'Jennifer Davis',
    'Primary Contact Title': 'HR Manager',
    'Primary Contact Email': 'jennifer.davis@techcorpsolutions.com',
    'Primary Contact Phone': '+1 (555) 123-4501'
  };

  // Employee onboarding data with values
  const employeeOnboardingData = {
    'Full Legal Name': 'Sarah Chen',
    'Date of Birth': '1990-03-15',
    'Country of Birth': 'China',
    'Gender': 'Female',
    'Current Address': '456 Market Street, Apt 12B, San Francisco, CA 94102',
    'Phone Number': '+1 (555) 987-6543',
    'Email Address': 'sarah.chen@techcorpsolutions.com',
    'Passport Number': 'E12345678',
    'Passport Country of Issuance': 'China',
    'Passport Expiration Date': '2028-12-15',
    'Current Immigration Status': 'F-1 Student',
    'I-94 Number': '94567891234',
    'Educational Background': 'Master of Science in Computer Science, Stanford University (2020)',
    'Work Experience': 'Software Engineer at TechStart (2020-2022), Senior Software Engineer at DataFlow (2022-2024)',
    'Job Title': 'Senior Software Engineer',
    'Job Description': 'Design and develop scalable web applications, lead technical architecture decisions, mentor junior developers',
    'Salary Information': '$145,000 annually'
  };

  // Get onboarding data based on task
  const getOnboardingData = (taskId: string): Record<string, string> => {
    if (taskId === 'task-1-1') {
      return companyOnboardingData;
    } else if (taskId === 'task-1-2') {
      return employeeOnboardingData;
    }
    return {};
  };

  const onboardingData = getOnboardingData(taskId);

  if (Object.keys(onboardingData).length === 0) {
    return null;
  }

  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {taskId === 'task-1-1' ? 'Company Information for Verification' : 'Employee Information for Verification'}
      </h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="onboarding-data">
          <AccordionTrigger className="text-left">
            <div className="flex items-center space-x-2">
              <span>View Collected Information</span>
              <Badge variant="outline" className="text-xs">
                {Object.keys(onboardingData).length} fields
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 max-h-96 overflow-y-auto pt-4">
              {Object.entries(onboardingData).map(([field, value]) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field} className="text-sm font-medium text-gray-700">
                    {field}
                  </Label>
                  <Input
                    id={field}
                    value={String(value)}
                    readOnly
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                All information has been collected and is ready for verification. Please review the details above before proceeding.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OnboardingDataDisplay;
