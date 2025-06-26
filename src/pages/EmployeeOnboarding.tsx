
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, ChevronLeft, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState({
    // Section 1: Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    
    // Section 2: Passport Information
    passportNumber: '',
    passportIssueDate: '',
    passportExpiryDate: '',
    
    // Section 3: Contact Information
    homePhoneNumber: '',
    workPhoneNumber: '',
    
    // Section 4: Location Information
    currentlyInUS: false,
    currentUSAddress: '',
    foreignAddress: '',
    
    // Section 5: Visa Information
    currentVisaType: 'None',
    visaExpirationDate: '',
    hasPreviousUSVisas: false,
    previousVisaType: '',
    previousVisaNumber: '',
    previousVisaExpirationDate: '',
    
    // Section 6: Education and Employment History
    educationHistory: [
      {
        institutionName: '',
        location: '',
        institutionAddress: '',
        major: '',
        startDate: '',
        endDate: '',
        degree: ''
      }
    ],
    employmentHistory: [
      {
        employerName: '',
        jobTitle: '',
        employerAddress: '',
        startDate: '',
        isCurrent: false,
        endDate: '',
        jobDuties: ''
      }
    ]
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addEducationEntry = () => {
    setFormData(prev => ({
      ...prev,
      educationHistory: [...prev.educationHistory, {
        institutionName: '',
        location: '',
        institutionAddress: '',
        major: '',
        startDate: '',
        endDate: '',
        degree: ''
      }]
    }));
  };

  const removeEducationEntry = (index: number) => {
    setFormData(prev => ({
      ...prev,
      educationHistory: prev.educationHistory.filter((_, i) => i !== index)
    }));
  };

  const addEmploymentEntry = () => {
    setFormData(prev => ({
      ...prev,
      employmentHistory: [...prev.employmentHistory, {
        employerName: '',
        jobTitle: '',
        employerAddress: '',
        startDate: '',
        isCurrent: false,
        endDate: '',
        jobDuties: ''
      }]
    }));
  };

  const removeEmploymentEntry = (index: number) => {
    setFormData(prev => ({
      ...prev,
      employmentHistory: prev.employmentHistory.filter((_, i) => i !== index)
    }));
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
    console.log('Employee onboarding completed:', formData);
    navigate('/dashboard');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name(s)</Label>
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
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Place of Birth *</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Passport Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="passportNumber">Passport Number *</Label>
                <Input
                  id="passportNumber"
                  value={formData.passportNumber}
                  onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="passportIssueDate">Passport Issue Date *</Label>
                <Input
                  id="passportIssueDate"
                  type="date"
                  value={formData.passportIssueDate}
                  onChange={(e) => handleInputChange('passportIssueDate', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="passportExpiryDate">Passport Expiry Date *</Label>
                <Input
                  id="passportExpiryDate"
                  type="date"
                  value={formData.passportExpiryDate}
                  onChange={(e) => handleInputChange('passportExpiryDate', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homePhoneNumber">Home Phone Number</Label>
                <Input
                  id="homePhoneNumber"
                  value={formData.homePhoneNumber}
                  onChange={(e) => handleInputChange('homePhoneNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="workPhoneNumber">Work Phone Number</Label>
                <Input
                  id="workPhoneNumber"
                  value={formData.workPhoneNumber}
                  onChange={(e) => handleInputChange('workPhoneNumber', e.target.value)}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.currentlyInUS}
                  onCheckedChange={(checked) => handleInputChange('currentlyInUS', checked)}
                />
                <Label>Are you currently in the US?</Label>
              </div>

              {formData.currentlyInUS && (
                <div>
                  <Label htmlFor="currentUSAddress">Current US Address *</Label>
                  <Input
                    id="currentUSAddress"
                    value={formData.currentUSAddress}
                    onChange={(e) => handleInputChange('currentUSAddress', e.target.value)}
                    required={formData.currentlyInUS}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="foreignAddress">Foreign Address</Label>
                <Input
                  id="foreignAddress"
                  value={formData.foreignAddress}
                  onChange={(e) => handleInputChange('foreignAddress', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Visa Information</h2>
            <div>
              <Label htmlFor="currentVisaType">Current Visa Type</Label>
              <Select value={formData.currentVisaType} onValueChange={(value) => handleInputChange('currentVisaType', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="None">None</SelectItem>
                  <SelectItem value="H-1B">H-1B</SelectItem>
                  <SelectItem value="L-1">L-1</SelectItem>
                  <SelectItem value="H-1B1">H-1B1</SelectItem>
                  <SelectItem value="O-1">O-1</SelectItem>
                  <SelectItem value="F-1">F-1</SelectItem>
                  <SelectItem value="J-1">J-1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.currentVisaType !== 'None' && (
              <>
                <div>
                  <Label htmlFor="visaExpirationDate">Visa Expiration Date *</Label>
                  <Input
                    id="visaExpirationDate"
                    type="date"
                    value={formData.visaExpirationDate}
                    onChange={(e) => handleInputChange('visaExpirationDate', e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={formData.hasPreviousUSVisas}
                    onCheckedChange={(checked) => handleInputChange('hasPreviousUSVisas', checked)}
                  />
                  <Label>Have you had previous US Visas?</Label>
                </div>

                {formData.hasPreviousUSVisas && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">Previous Visa Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="previousVisaType">Previous Visa Type *</Label>
                        <Input
                          id="previousVisaType"
                          value={formData.previousVisaType}
                          onChange={(e) => handleInputChange('previousVisaType', e.target.value)}
                          required={formData.hasPreviousUSVisas}
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousVisaNumber">Previous Visa Number *</Label>
                        <Input
                          id="previousVisaNumber"
                          value={formData.previousVisaNumber}
                          onChange={(e) => handleInputChange('previousVisaNumber', e.target.value)}
                          required={formData.hasPreviousUSVisas}
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousVisaExpirationDate">Previous Visa Expiration Date *</Label>
                        <Input
                          id="previousVisaExpirationDate"
                          type="date"
                          value={formData.previousVisaExpirationDate}
                          onChange={(e) => handleInputChange('previousVisaExpirationDate', e.target.value)}
                          required={formData.hasPreviousUSVisas}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education History</h2>
            {formData.educationHistory.map((education, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">Education Entry {index + 1}</h3>
                  {formData.educationHistory.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducationEntry(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institution Name *</Label>
                    <Input
                      value={education.institutionName}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].institutionName = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label>Location *</Label>
                    <Input
                      value={education.location}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].location = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label>Institution Address *</Label>
                  <Input
                    value={education.institutionAddress}
                    onChange={(e) => {
                      const newHistory = [...formData.educationHistory];
                      newHistory[index].institutionAddress = e.target.value;
                      handleInputChange('educationHistory', newHistory);
                    }}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Major/Specialization *</Label>
                    <Input
                      value={education.major}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].major = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label>Degree/Certification Obtained *</Label>
                    <Input
                      value={education.degree}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].degree = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date *</Label>
                    <Input
                      type="date"
                      value={education.startDate}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].startDate = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label>End Date *</Label>
                    <Input
                      type="date"
                      value={education.endDate}
                      onChange={(e) => {
                        const newHistory = [...formData.educationHistory];
                        newHistory[index].endDate = e.target.value;
                        handleInputChange('educationHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addEducationEntry} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Another Education Entry
            </Button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Employment History</h2>
            {formData.employmentHistory.map((employment, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">Employment Entry {index + 1}</h3>
                  {formData.employmentHistory.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEmploymentEntry(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Employer Name *</Label>
                    <Input
                      value={employment.employerName}
                      onChange={(e) => {
                        const newHistory = [...formData.employmentHistory];
                        newHistory[index].employerName = e.target.value;
                        handleInputChange('employmentHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label>Job Title *</Label>
                    <Input
                      value={employment.jobTitle}
                      onChange={(e) => {
                        const newHistory = [...formData.employmentHistory];
                        newHistory[index].jobTitle = e.target.value;
                        handleInputChange('employmentHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label>Employer Address *</Label>
                  <Input
                    value={employment.employerAddress}
                    onChange={(e) => {
                      const newHistory = [...formData.employmentHistory];
                      newHistory[index].employerAddress = e.target.value;
                      handleInputChange('employmentHistory', newHistory);
                    }}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date *</Label>
                    <Input
                      type="date"
                      value={employment.startDate}
                      onChange={(e) => {
                        const newHistory = [...formData.employmentHistory];
                        newHistory[index].startDate = e.target.value;
                        handleInputChange('employmentHistory', newHistory);
                      }}
                      required
                    />
                  </div>
                  {!employment.isCurrent && (
                    <div>
                      <Label>End Date *</Label>
                      <Input
                        type="date"
                        value={employment.endDate}
                        onChange={(e) => {
                          const newHistory = [...formData.employmentHistory];
                          newHistory[index].endDate = e.target.value;
                          handleInputChange('employmentHistory', newHistory);
                        }}
                        required={!employment.isCurrent}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={employment.isCurrent}
                    onCheckedChange={(checked) => {
                      const newHistory = [...formData.employmentHistory];
                      newHistory[index].isCurrent = checked;
                      if (checked) {
                        newHistory[index].endDate = '';
                      }
                      handleInputChange('employmentHistory', newHistory);
                    }}
                  />
                  <Label>This is my current position</Label>
                </div>
                <div>
                  <Label>Job Duties and Responsibilities *</Label>
                  <Input
                    value={employment.jobDuties}
                    onChange={(e) => {
                      const newHistory = [...formData.employmentHistory];
                      newHistory[index].jobDuties = e.target.value;
                      handleInputChange('employmentHistory', newHistory);
                    }}
                    required
                  />
                </div>
              </div>
            ))}
            <Button onClick={addEmploymentEntry} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Another Employment Entry
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-warm flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl bg-white">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-medium text-gray-900">VisaFlow</span>
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-900">Employee Onboarding</CardTitle>
          <p className="text-gray-500 mt-2">Step {currentStep} of {totalSteps}</p>
          
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
              <Button onClick={handleComplete} className="bg-gray-900 hover:bg-gray-800 text-white">
                Complete Onboarding
              </Button>
            ) : (
              <Button onClick={nextStep} className="bg-gray-900 hover:bg-gray-800 text-white">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeOnboarding;
