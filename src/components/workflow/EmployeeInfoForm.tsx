
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, ChevronLeft, User, FileText, Briefcase, Upload } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EmployeeInfoFormProps {
  onComplete?: (data: any) => void;
  initialData?: any;
}

const EmployeeInfoForm: React.FC<EmployeeInfoFormProps> = ({ onComplete, initialData = {} }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: initialData.firstName || 'Sarah',
    middleName: initialData.middleName || '',
    lastName: initialData.lastName || 'Chen',
    dateOfBirth: initialData.dateOfBirth || '1990-03-15',
    countryOfBirth: initialData.countryOfBirth || 'China',
    gender: initialData.gender || 'Female',
    currentAddress: initialData.currentAddress || '456 Market Street, Apt 12B, San Francisco, CA 94102',
    phoneNumber: initialData.phoneNumber || '+1 (555) 987-6543',
    emailAddress: initialData.emailAddress || 'sarah.chen@techcorpsolutions.com',
    
    // Step 2: Immigration & Documentation
    passportNumber: initialData.passportNumber || 'E12345678',
    passportCountry: initialData.passportCountry || 'China',
    passportExpirationDate: initialData.passportExpirationDate || '2028-12-15',
    currentImmigrationStatus: initialData.currentImmigrationStatus || 'F-1 Student',
    i94Number: initialData.i94Number || '94567891234',
    
    // Step 3: Professional Information
    jobTitle: initialData.jobTitle || 'Senior Software Engineer',
    jobDescription: initialData.jobDescription || 'Design and develop scalable web applications, lead technical architecture decisions, mentor junior developers',
    salaryInformation: initialData.salaryInformation || '$145,000 annually',
    educationalBackground: initialData.educationalBackground || 'Master of Science in Computer Science, Stanford University (2020)',
    workExperience: initialData.workExperience || 'Software Engineer at TechStart (2020-2022), Senior Software Engineer at DataFlow (2022-2024)'
  });

  const [collectedFiles] = useState([
    { name: 'Sarah_Chen_Passport.pdf', type: 'Passport Copy', uploadDate: '2024-01-15' },
    { name: 'Sarah_Chen_Resume_2024.pdf', type: 'Resume', uploadDate: '2024-01-16' },
    { name: 'I94_Travel_Record.pdf', type: 'I-94 Record', uploadDate: '2024-01-17' },
    { name: 'F1_Visa_Copy.pdf', type: 'Current Visa', uploadDate: '2024-01-18' },
    { name: 'Stanford_Degree_Certificate.pdf', type: 'Education Certificate', uploadDate: '2024-01-19' }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete?.(formData);
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <User className="w-4 h-4" />;
      case 2: return <FileText className="w-4 h-4" />;
      case 3: return <Briefcase className="w-4 h-4" />;
      default: return null;
    }
  };

  const FileUploadField = ({ label, field }: { label: string, field: string }) => (
    <div>
      <Label>{label}</Label>
      <div className="mt-1 flex justify-center px-4 pt-3 pb-3 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-8 w-8 text-gray-400" />
          <div className="text-sm text-gray-600">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
              <span>Upload file</span>
              <input type="file" className="sr-only" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange('middleName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="countryOfBirth">Country of Birth *</Label>
                <Input
                  id="countryOfBirth"
                  value={formData.countryOfBirth}
                  onChange={(e) => handleInputChange('countryOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="currentAddress">Current Address *</Label>
              <Textarea
                id="currentAddress"
                value={formData.currentAddress}
                onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                rows={2}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="emailAddress">Email Address *</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Immigration & Documentation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="passportNumber">Passport Number *</Label>
                  <Input
                    id="passportNumber"
                    value={formData.passportNumber}
                    onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="passportCountry">Passport Country *</Label>
                  <Input
                    id="passportCountry"
                    value={formData.passportCountry}
                    onChange={(e) => handleInputChange('passportCountry', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="passportExpirationDate">Passport Expiration *</Label>
                  <Input
                    id="passportExpirationDate"
                    type="date"
                    value={formData.passportExpirationDate}
                    onChange={(e) => handleInputChange('passportExpirationDate', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentImmigrationStatus">Current Immigration Status *</Label>
                  <Select value={formData.currentImmigrationStatus} onValueChange={(value) => handleInputChange('currentImmigrationStatus', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="F-1 Student">F-1 Student</SelectItem>
                      <SelectItem value="H-1B">H-1B</SelectItem>
                      <SelectItem value="L-1">L-1</SelectItem>
                      <SelectItem value="O-1">O-1</SelectItem>
                      <SelectItem value="J-1">J-1</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="i94Number">I-94 Number</Label>
                  <Input
                    id="i94Number"
                    value={formData.i94Number}
                    onChange={(e) => handleInputChange('i94Number', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUploadField label="Passport Copy" field="passportCopy" />
                <FileUploadField label="Current Visa" field="currentVisa" />
                <FileUploadField label="I-94 Record" field="i94Record" />
                <FileUploadField label="Resume" field="resume" />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Information</h3>
              <div>
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="jobDescription">Job Description *</Label>
                <Textarea
                  id="jobDescription"
                  value={formData.jobDescription}
                  onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="salaryInformation">Salary Information *</Label>
                <Input
                  id="salaryInformation"
                  value={formData.salaryInformation}
                  onChange={(e) => handleInputChange('salaryInformation', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="educationalBackground">Educational Background *</Label>
                <Textarea
                  id="educationalBackground"
                  value={formData.educationalBackground}
                  onChange={(e) => handleInputChange('educationalBackground', e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="workExperience">Work Experience *</Label>
                <Textarea
                  id="workExperience"
                  value={formData.workExperience}
                  onChange={(e) => handleInputChange('workExperience', e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {collectedFiles.length > 0 && (
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Collected Files</h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {collectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.type} • Uploaded {file.uploadDate}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Collected</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Employee Information Form</CardTitle>
        <p className="text-gray-500">Step {currentStep} of {totalSteps}</p>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === currentStep 
                    ? 'bg-gray-900 text-white' 
                    : step < currentStep 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  {getStepIcon(step)}
                </div>
                {step < 3 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div 
            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {renderStepContent()}
        
        <div className="flex justify-between pt-6">
          <Button
            onClick={prevStep}
            variant="outline"
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          {currentStep === totalSteps ? (
            <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
              Complete Form
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeInfoForm;
