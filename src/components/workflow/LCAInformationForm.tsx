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
    state: '',
    area: '',
    researchDevelopment: '',
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
    lcaApplication: {
      estimatedWorkers: '',
      secondaryEntity: '',
      secondaryEntityName: '',
      address1: '',
      address2: '',
      city: '',
      stateAddress: '',
      county: '',
      postalCode: ''
    },
    additionalEmployerStatements: {
      h1bDependent: '',
      willfulViolator: '',
      exemptH1bOnly: ''
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

  const updateLCAApplication = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      lcaApplication: {
        ...prev.lcaApplication,
        [field]: value
      }
    }));
  };

  const updateAdditionalStatements = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalEmployerStatements: {
        ...prev.additionalEmployerStatements,
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  const isStep1Valid = formData.jobTitle && formData.socCode && formData.isFullTime && formData.state && formData.area && formData.researchDevelopment;
  const isStep2Valid = formData.beginDate && formData.endDate && formData.totalWorkerPositions;
  const isStep3Valid = formData.lcaApplication.estimatedWorkers && formData.lcaApplication.secondaryEntity;
  const isStep4Valid = formData.additionalEmployerStatements.h1bDependent && formData.additionalEmployerStatements.willfulViolator && formData.additionalEmployerStatements.exemptH1bOnly;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">LCA Information</h3>
        <p className="text-sm text-gray-600 mb-4">
          Please provide the required information for the Labor Condition Application.
        </p>
        
        {/* Step Indicator */}
        <div className="flex items-center space-x-4 mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === currentStep ? 'bg-blue-600 text-white' :
                step < currentStep ? 'bg-green-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step < currentStep ? <Check className="h-4 w-4" /> : step}
              </div>
              {step < 4 && (
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
            Step {currentStep} of 4: {
              currentStep === 1 ? 'Job Information' :
              currentStep === 2 ? 'Employment Dates & Visa Classification' :
              currentStep === 3 ? 'LCA Application Information' :
              'Additional Employer Labor Condition Statements'
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
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
                  <Select value={formData.area} onValueChange={(value) => updateFormData('area', value)}>
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

                <div className="space-y-3 md:col-span-2">
                  <Label>Research & Development</Label>
                  <RadioGroup value={formData.researchDevelopment} onValueChange={(value) => updateFormData('researchDevelopment', value)}>
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
              <div className="space-y-4">
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
                    value={formData.lcaApplication.estimatedWorkers}
                    onChange={(e) => updateLCAApplication('estimatedWorkers', e.target.value)}
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
                  <RadioGroup value={formData.lcaApplication.secondaryEntity} onValueChange={(value) => updateLCAApplication('secondaryEntity', value)}>
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

                {formData.lcaApplication.secondaryEntity === 'no' && (
                  <div className="space-y-2">
                    <Label htmlFor="secondaryEntityName">F.3. Legal Business name of secondary entity</Label>
                    <Input
                      id="secondaryEntityName"
                      value={formData.lcaApplication.secondaryEntityName}
                      onChange={(e) => updateLCAApplication('secondaryEntityName', e.target.value)}
                      placeholder="Enter legal business name"
                      disabled
                    />
                  </div>
                )}

                {/* F.4-F.9 always appear */}
                <div className="space-y-2">
                  <Label htmlFor="address1">F.4. Address 1</Label>
                  <Input
                    id="address1"
                    value={formData.lcaApplication.address1}
                    onChange={(e) => updateLCAApplication('address1', e.target.value)}
                    placeholder="Enter street address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address2">F.5. Address 2 (apartment/suite/floor and number)</Label>
                  <Input
                    id="address2"
                    value={formData.lcaApplication.address2}
                    onChange={(e) => updateLCAApplication('address2', e.target.value)}
                    placeholder="Apartment, suite, floor (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">F.6. City</Label>
                  <Input
                    id="city"
                    value={formData.lcaApplication.city}
                    onChange={(e) => updateLCAApplication('city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stateAddress">F.7. State/District/Territory</Label>
                  <Select value={formData.lcaApplication.stateAddress} onValueChange={(value) => updateLCAApplication('stateAddress', value)}>
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

                <div className="space-y-2">
                  <Label htmlFor="county">F.8. County</Label>
                  <Select value={formData.lcaApplication.county} onValueChange={(value) => updateLCAApplication('county', value)}>
                    <SelectTrigger id="county">
                      <SelectValue placeholder="Select county" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="riverside">Riverside</SelectItem>
                      <SelectItem value="san-bernardino">San Bernardino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">F.9. Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.lcaApplication.postalCode}
                    onChange={(e) => updateLCAApplication('postalCode', e.target.value)}
                    placeholder="Enter postal code"
                    maxLength={10}
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    In order for your H-1B application to be processed, you MUST read Section H - Subsection 1 of the Form ETA 9035CP - General Instructions for the 9035 & 9035E under the heading "Additional Employer Labor Condition Statements" and answer the questions below.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Label>H.1. At the time of filing this LCA, is the employer H-1B dependent?</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>An H-1B dependent employer is one that employs more than 15 workers and more than 15% of those workers are H-1B nonimmigrants</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <RadioGroup value={formData.additionalEmployerStatements.h1bDependent} onValueChange={(value) => updateAdditionalStatements('h1bDependent', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="h1bDependentYes" />
                      <Label htmlFor="h1bDependentYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="h1bDependentNo" />
                      <Label htmlFor="h1bDependentNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Label>H.2. At the time of filing this LCA, is the employer a willful violator?</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>A willful violator is an employer that has been found to have willfully violated H-1B requirements</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <RadioGroup value={formData.additionalEmployerStatements.willfulViolator} onValueChange={(value) => updateAdditionalStatements('willfulViolator', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="willfulViolatorYes" />
                      <Label htmlFor="willfulViolatorYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="willfulViolatorNo" />
                      <Label htmlFor="willfulViolatorNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Label>H.3. Will the employer use this application ONLY to support H-1B petitions or extensions of status for exempt H-1B nonimmigrant workers?</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This field is required</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <RadioGroup value={formData.additionalEmployerStatements.exemptH1bOnly} onValueChange={(value) => updateAdditionalStatements('exemptH1bOnly', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="exemptH1bOnlyYes" />
                      <Label htmlFor="exemptH1bOnlyYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="exemptH1bOnlyNo" />
                      <Label htmlFor="exemptH1bOnlyNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>
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

        {currentStep < 4 ? (
          <Button 
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !isStep1Valid) ||
              (currentStep === 2 && !isStep2Valid) ||
              (currentStep === 3 && !isStep3Valid)
            }
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            disabled={!isStep4Valid}
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