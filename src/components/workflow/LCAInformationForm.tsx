import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
      newEmployment: '',
      continuation: '',
      changeInEmployment: '',
      newConcurrent: '',
      changeInEmployer: '',
      amendedPetition: ''
    },
    prevailingWage: {
      state: '',
      area: '',
      socCodeDropdown: '',
      researchDevelopment: '',
      estimatedWorkers: '',
      secondaryEntity: '',
      secondaryEntityName: '',
      address1: '',
      address2: '',
      city: '',
      stateAddress: ''
    }
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateVisaBasis = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      visaClassificationBasis: {
        ...prev.visaClassificationBasis,
        [field]: value
      }
    }));
  };

  const updatePrevailingWage = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      prevailingWage: {
        ...prev.prevailingWage,
        [field]: value
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
  const isStep3Valid = formData.prevailingWage.state && formData.prevailingWage.area && formData.prevailingWage.socCodeDropdown && formData.prevailingWage.researchDevelopment;

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
              currentStep === 2 ? 'Employment Dates & Visa Classification' :
              'Prevailing Wage Section'
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
                  <Label htmlFor="totalWorkerPositions">B.7. Total Worker Positions Being Requested for Certification</Label>
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

              <div className="space-y-4 mt-6">
                <div>
                  <Label className="text-base font-medium">B.7a-f. Basis for the visa classification supported by this application</Label>
                  <p className="text-sm text-gray-600 mt-1">(indicate total workers in each applicable category)</p>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'newEmployment', label: 'a. New Employment' },
                    { key: 'continuation', label: 'b. Continuation of previously approved employment without change with the same employer' },
                    { key: 'changeInEmployment', label: 'c. Change in previously approved employment' },
                    { key: 'newConcurrent', label: 'd. New concurrent employment' },
                    { key: 'changeInEmployer', label: 'e. Change in employer' },
                    { key: 'amendedPetition', label: 'f. Amended petition' }
                  ].map((option) => (
                    <div key={option.key} className="space-y-2">
                      <Label htmlFor={option.key} className="text-sm font-medium">
                        {option.label}
                      </Label>
                      <Input
                        id={option.key}
                        type="number"
                        min="0"
                        value={formData.visaClassificationBasis[option.key as keyof typeof formData.visaClassificationBasis]}
                        onChange={(e) => updateVisaBasis(option.key, e.target.value)}
                        placeholder="0"
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.prevailingWage.state} onValueChange={(value) => updatePrevailingWage('state', value)}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Area</Label>
                  <Select value={formData.prevailingWage.area} onValueChange={(value) => updatePrevailingWage('area', value)}>
                    <SelectTrigger id="area">
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metropolitan">Metropolitan Area</SelectItem>
                      <SelectItem value="rural">Rural Area</SelectItem>
                      <SelectItem value="urban">Urban Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="socCodeDropdown">SOC Code</Label>
                  <Select value={formData.prevailingWage.socCodeDropdown} onValueChange={(value) => updatePrevailingWage('socCodeDropdown', value)}>
                    <SelectTrigger id="socCodeDropdown">
                      <SelectValue placeholder="Select SOC code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15-1132">15-1132 - Software Developers</SelectItem>
                      <SelectItem value="15-1133">15-1133 - Software QA Analysts</SelectItem>
                      <SelectItem value="15-1134">15-1134 - Web Developers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Research & Development</Label>
                  <RadioGroup value={formData.prevailingWage.researchDevelopment} onValueChange={(value) => updatePrevailingWage('researchDevelopment', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="rdYes" />
                      <Label htmlFor="rdYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="rdNo" />
                      <Label htmlFor="rdNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="estimatedWorkers">F.1. Enter the estimated number of workers that will perform work at this place of employment under the LCA</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Total number of workers who will work at this location</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="estimatedWorkers"
                    type="number"
                    min="1"
                    value={formData.prevailingWage.estimatedWorkers}
                    onChange={(e) => updatePrevailingWage('estimatedWorkers', e.target.value)}
                    placeholder="1"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Label>F.2. Indicate whether the worker(s) subject to this LCA will be placed with a secondary entity at this place of employment</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Whether workers will be contracted to work at another company's location</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <RadioGroup value={formData.prevailingWage.secondaryEntity} onValueChange={(value) => updatePrevailingWage('secondaryEntity', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="secondaryYes" />
                      <Label htmlFor="secondaryYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="secondaryNo" />
                      <Label htmlFor="secondaryNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.prevailingWage.secondaryEntity === 'yes' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryEntityName">F.3. Legal Business name of secondary entity</Label>
                      <Input
                        id="secondaryEntityName"
                        value={formData.prevailingWage.secondaryEntityName}
                        onChange={(e) => updatePrevailingWage('secondaryEntityName', e.target.value)}
                        placeholder="Enter legal business name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address1">F.4. Address 1</Label>
                      <Input
                        id="address1"
                        value={formData.prevailingWage.address1}
                        onChange={(e) => updatePrevailingWage('address1', e.target.value)}
                        placeholder="Enter street address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address2">F.5. Address 2 (apartment/suite/floor and number)</Label>
                      <Input
                        id="address2"
                        value={formData.prevailingWage.address2}
                        onChange={(e) => updatePrevailingWage('address2', e.target.value)}
                        placeholder="Apartment, suite, floor (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">F.6. City</Label>
                      <Input
                        id="city"
                        value={formData.prevailingWage.city}
                        onChange={(e) => updatePrevailingWage('city', e.target.value)}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stateAddress">F.7. State/District/Territory</Label>
                      <Select value={formData.prevailingWage.stateAddress} onValueChange={(value) => updatePrevailingWage('stateAddress', value)}>
                        <SelectTrigger id="stateAddress">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>
            </>
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