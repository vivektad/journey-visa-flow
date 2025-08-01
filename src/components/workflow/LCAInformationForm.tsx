import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, Check, ArrowRight, ArrowLeft } from 'lucide-react';

interface LCAInformationFormProps {
  onComplete: (data: any) => void;
}

const LCAInformationForm: React.FC<LCAInformationFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: '',
    socCode: '',
    isFullTime: '',
    beginDate: '',
    endDate: '',
    totalWorkerPositions: '',
    visaClassificationBasis: {
      newEmployment: false,
      continuation: false,
      changeInEmployment: false,
      newConcurrent: false,
      changeInEmployer: false,
      amendedPetition: false
    }
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateVisaBasis = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      visaClassificationBasis: {
        ...prev.visaClassificationBasis,
        [field]: checked
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  const isStep1Valid = formData.jobTitle && formData.socCode && formData.isFullTime;
  const isStep2Valid = formData.beginDate && formData.endDate && formData.totalWorkerPositions;
  const isStep3Valid = Object.values(formData.visaClassificationBasis).some(Boolean);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">LCA Information</h3>
        <p className="text-sm text-gray-600 mb-4">
          Please provide the required information for the Labor Condition Application.
        </p>
        
        {/* Step Indicator */}
        <div className="flex items-center space-x-4 mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === currentStep ? 'bg-blue-600 text-white' :
                step < currentStep ? 'bg-green-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step < currentStep ? <Check className="h-4 w-4" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Step {currentStep} of 3: {
              currentStep === 1 ? 'Job Information' :
              currentStep === 2 ? 'Employment Dates & Positions' :
              'Visa Classification Basis'
            }
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => updateFormData('jobTitle', e.target.value)}
                  placeholder="e.g., Software Engineer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socCode">SOC Code</Label>
                <Input
                  id="socCode"
                  value={formData.socCode}
                  onChange={(e) => updateFormData('socCode', e.target.value)}
                  placeholder="e.g., 15-1132"
                />
              </div>

              <div className="space-y-3">
                <Label>Is it a full-time position?</Label>
                <RadioGroup value={formData.isFullTime} onValueChange={(value) => updateFormData('isFullTime', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="fullTimeYes" />
                    <Label htmlFor="fullTimeYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="fullTimeNo" />
                    <Label htmlFor="fullTimeNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="beginDate">Begin Date</Label>
                <Input
                  id="beginDate"
                  type="date"
                  value={formData.beginDate}
                  onChange={(e) => updateFormData('beginDate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => updateFormData('endDate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="totalWorkerPositions">Total Worker Positions Being Requested for Certification</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The number of workers being requested for this specific job classification</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="totalWorkerPositions"
                  type="number"
                  min="1"
                  value={formData.totalWorkerPositions}
                  onChange={(e) => updateFormData('totalWorkerPositions', e.target.value)}
                  placeholder="1"
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Basis for the visa classification supported by this application</Label>
                <p className="text-sm text-gray-600 mt-1">(indicate total workers in each applicable category)</p>
              </div>

              <div className="space-y-3">
                {[
                  { key: 'newEmployment', label: 'New Employment' },
                  { key: 'continuation', label: 'Continuation of previously approved employment without change with the same employer' },
                  { key: 'changeInEmployment', label: 'Change in previously approved employment' },
                  { key: 'newConcurrent', label: 'New concurrent employment' },
                  { key: 'changeInEmployer', label: 'Change in employer' },
                  { key: 'amendedPetition', label: 'Amended petition' }
                ].map((option) => (
                  <div key={option.key} className="flex items-start space-x-3">
                    <Checkbox
                      id={option.key}
                      checked={formData.visaClassificationBasis[option.key as keyof typeof formData.visaClassificationBasis]}
                      onCheckedChange={(checked) => updateVisaBasis(option.key, checked as boolean)}
                    />
                    <Label htmlFor={option.key} className="text-sm leading-relaxed cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {currentStep < 3 ? (
          <Button 
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !isStep1Valid) ||
              (currentStep === 2 && !isStep2Valid)
            }
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            disabled={!isStep3Valid}
          >
            <Check className="h-4 w-4 mr-2" />
            Complete LCA Information
          </Button>
        )}
      </div>
    </div>
  );
};

export default LCAInformationForm;