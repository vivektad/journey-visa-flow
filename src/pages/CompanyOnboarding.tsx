
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, ChevronLeft, Building, MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CompanyData {
  legalBusinessName: string;
  dba: string;
  fein: string;
  yearOfIncorporation: string;
  businessAddress: string;
  telephoneNumber: string;
  companyWebsite: string;
  natureOfBusiness: string;
  contactFirstName: string;
  contactLastName: string;
  contactTitle: string;
  contactPhoneNumber: string;
  contactEmailAddress: string;
}

const CompanyOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState<CompanyData>({
    legalBusinessName: '',
    dba: '',
    fein: '',
    yearOfIncorporation: '',
    businessAddress: '',
    telephoneNumber: '',
    companyWebsite: '',
    natureOfBusiness: '',
    contactFirstName: '',
    contactLastName: '',
    contactTitle: '',
    contactPhoneNumber: '',
    contactEmailAddress: ''
  });

  const handleInputChange = (field: keyof CompanyData, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log('Company onboarding completed:', companyData);
    navigate('/dashboard');
  };

  const isStep1Valid = companyData.legalBusinessName && companyData.fein && companyData.yearOfIncorporation;
  const isStep2Valid = companyData.businessAddress && companyData.telephoneNumber && companyData.natureOfBusiness;
  const isStep3Valid = companyData.contactFirstName && companyData.contactLastName && companyData.contactEmailAddress;

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <Building className="w-5 h-5" />;
      case 2: return <MapPin className="w-5 h-5" />;
      case 3: return <User className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-warm flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-medium text-gray-900">VisaFlow</span>
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-900">Company Setup</CardTitle>
          <p className="text-gray-500 mt-2">Let's set up your company information to get started</p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
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
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
              
              <div>
                <Label htmlFor="legalBusinessName">Legal Business Name *</Label>
                <Input
                  id="legalBusinessName"
                  value={companyData.legalBusinessName}
                  onChange={(e) => handleInputChange('legalBusinessName', e.target.value)}
                  placeholder="Enter legal business name"
                />
              </div>

              <div>
                <Label htmlFor="dba">DBA (Doing Business As)</Label>
                <Input
                  id="dba"
                  value={companyData.dba}
                  onChange={(e) => handleInputChange('dba', e.target.value)}
                  placeholder="Enter DBA if applicable"
                />
              </div>

              <div>
                <Label htmlFor="fein">Federal Employer ID Number (FEIN/EIN) *</Label>
                <Input
                  id="fein"
                  value={companyData.fein}
                  onChange={(e) => handleInputChange('fein', e.target.value)}
                  placeholder="XX-XXXXXXX"
                />
              </div>

              <div>
                <Label htmlFor="yearOfIncorporation">Year of Incorporation *</Label>
                <Input
                  id="yearOfIncorporation"
                  value={companyData.yearOfIncorporation}
                  onChange={(e) => handleInputChange('yearOfIncorporation', e.target.value)}
                  placeholder="YYYY"
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Details</h3>
              
              <div>
                <Label htmlFor="businessAddress">Business Address *</Label>
                <Textarea
                  id="businessAddress"
                  value={companyData.businessAddress}
                  onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                  placeholder="Enter complete business address"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="telephoneNumber">Telephone Number *</Label>
                <Input
                  id="telephoneNumber"
                  value={companyData.telephoneNumber}
                  onChange={(e) => handleInputChange('telephoneNumber', e.target.value)}
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>

              <div>
                <Label htmlFor="companyWebsite">Company Website</Label>
                <Input
                  id="companyWebsite"
                  value={companyData.companyWebsite}
                  onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                  placeholder="https://www.company.com"
                />
              </div>

              <div>
                <Label htmlFor="natureOfBusiness">Nature of Business *</Label>
                <Textarea
                  id="natureOfBusiness"
                  value={companyData.natureOfBusiness}
                  onChange={(e) => handleInputChange('natureOfBusiness', e.target.value)}
                  placeholder="Describe the nature of your business"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Step 3: Point of Contact */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Employer Point of Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactFirstName">First Name *</Label>
                  <Input
                    id="contactFirstName"
                    value={companyData.contactFirstName}
                    onChange={(e) => handleInputChange('contactFirstName', e.target.value)}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <Label htmlFor="contactLastName">Last Name *</Label>
                  <Input
                    id="contactLastName"
                    value={companyData.contactLastName}
                    onChange={(e) => handleInputChange('contactLastName', e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contactTitle">Title</Label>
                <Input
                  id="contactTitle"
                  value={companyData.contactTitle}
                  onChange={(e) => handleInputChange('contactTitle', e.target.value)}
                  placeholder="Job title"
                />
              </div>

              <div>
                <Label htmlFor="contactPhoneNumber">Phone Number</Label>
                <Input
                  id="contactPhoneNumber"
                  value={companyData.contactPhoneNumber}
                  onChange={(e) => handleInputChange('contactPhoneNumber', e.target.value)}
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>

              <div>
                <Label htmlFor="contactEmailAddress">Email Address *</Label>
                <Input
                  id="contactEmailAddress"
                  type="email"
                  value={companyData.contactEmailAddress}
                  onChange={(e) => handleInputChange('contactEmailAddress', e.target.value)}
                  placeholder="contact@company.com"
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !isStep1Valid) ||
                  (currentStep === 2 && !isStep2Valid)
                }
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleComplete}
                disabled={!isStep3Valid}
                className="bg-green-600 hover:bg-green-700"
              >
                Complete Setup
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyOnboarding;
