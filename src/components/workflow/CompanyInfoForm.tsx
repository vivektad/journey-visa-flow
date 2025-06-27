
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, ChevronLeft, Building, MapPin, User, Upload } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CompanyInfoFormProps {
  onComplete?: (data: any) => void;
  initialData?: any;
}

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({ onComplete, initialData = {} }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Company Information
    legalBusinessName: initialData.legalBusinessName || 'TechCorp Solutions Inc.',
    dba: initialData.dba || '',
    fein: initialData.fein || '12-3456789',
    naicsCode: initialData.naicsCode || '541511',
    yearFounded: initialData.yearFounded || '2018',
    
    // Step 2: Business Details & Address
    businessAddress: initialData.businessAddress || '123 Innovation Drive, San Francisco, CA 94105',
    telephoneNumber: initialData.telephoneNumber || '+1 (555) 123-4567',
    companyEmail: initialData.companyEmail || 'info@techcorpsolutions.com',
    companyWebsite: initialData.companyWebsite || 'www.techcorpsolutions.com',
    natureOfBusiness: initialData.natureOfBusiness || 'Software development and technology consulting services',
    numberOfEmployees: initialData.numberOfEmployees || '127',
    
    // Step 3: Contact Information & Documents
    contactFirstName: initialData.contactFirstName || 'Jennifer',
    contactLastName: initialData.contactLastName || 'Davis',
    contactTitle: initialData.contactTitle || 'HR Manager',
    contactPhone: initialData.contactPhone || '+1 (555) 123-4501',
    contactEmail: initialData.contactEmail || 'jennifer.davis@techcorpsolutions.com',
    
    // Files
    incorporationDocuments: null,
    taxDocuments: null,
    businessLicense: null
  });

  const [collectedFiles] = useState([
    { name: 'Certificate of Incorporation.pdf', type: 'Incorporation Documents', uploadDate: '2024-01-15' },
    { name: 'Tax Return 2023.pdf', type: 'Tax Documents', uploadDate: '2024-01-16' },
    { name: 'Business License CA.pdf', type: 'Business License', uploadDate: '2024-01-17' }
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
      case 1: return <Building className="w-4 h-4" />;
      case 2: return <MapPin className="w-4 h-4" />;
      case 3: return <User className="w-4 h-4" />;
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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Company Information</h3>
            <div>
              <Label htmlFor="legalBusinessName">Legal Business Name *</Label>
              <Input
                id="legalBusinessName"
                value={formData.legalBusinessName}
                onChange={(e) => handleInputChange('legalBusinessName', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dba">DBA (Doing Business As)</Label>
              <Input
                id="dba"
                value={formData.dba}
                onChange={(e) => handleInputChange('dba', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fein">FEIN/EIN *</Label>
                <Input
                  id="fein"
                  value={formData.fein}
                  onChange={(e) => handleInputChange('fein', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="naicsCode">NAICS Code</Label>
                <Input
                  id="naicsCode"
                  value={formData.naicsCode}
                  onChange={(e) => handleInputChange('naicsCode', e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="yearFounded">Year Founded *</Label>
                <Input
                  id="yearFounded"
                  value={formData.yearFounded}
                  onChange={(e) => handleInputChange('yearFounded', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="numberOfEmployees">Number of Employees</Label>
                <Input
                  id="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Business Details & Contact</h3>
            <div>
              <Label htmlFor="businessAddress">Business Address *</Label>
              <Textarea
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="telephoneNumber">Telephone Number *</Label>
                <Input
                  id="telephoneNumber"
                  value={formData.telephoneNumber}
                  onChange={(e) => handleInputChange('telephoneNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="companyEmail">Company Email *</Label>
                <Input
                  id="companyEmail"
                  value={formData.companyEmail}
                  onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="companyWebsite">Company Website</Label>
              <Input
                id="companyWebsite"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="natureOfBusiness">Nature of Business *</Label>
              <Textarea
                id="natureOfBusiness"
                value={formData.natureOfBusiness}
                onChange={(e) => handleInputChange('natureOfBusiness', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Primary Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactFirstName">First Name *</Label>
                  <Input
                    id="contactFirstName"
                    value={formData.contactFirstName}
                    onChange={(e) => handleInputChange('contactFirstName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="contactLastName">Last Name *</Label>
                  <Input
                    id="contactLastName"
                    value={formData.contactLastName}
                    onChange={(e) => handleInputChange('contactLastName', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactTitle">Title</Label>
                  <Input
                    id="contactTitle"
                    value={formData.contactTitle}
                    onChange={(e) => handleInputChange('contactTitle', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="contactEmail">Email Address *</Label>
                <Input
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FileUploadField label="Incorporation Documents" field="incorporationDocuments" />
                <FileUploadField label="Tax Documents" field="taxDocuments" />
                <FileUploadField label="Business License" field="businessLicense" />
              </div>
            </div>

            {collectedFiles.length > 0 && (
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Collected Files</h4>
                <div className="space-y-2">
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
        <CardTitle className="text-xl font-semibold text-gray-900">Company Information Form</CardTitle>
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

export default CompanyInfoForm;
