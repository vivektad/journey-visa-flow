
import React from 'react';
import { User, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface EmployeeInformationProps {
  employeeDetails: any;
  onEmployeeChange: (field: string, value: any) => void;
  onSave: () => void;
  personalInfoOpen: boolean;
  setPersonalInfoOpen: (open: boolean) => void;
  passportInfoOpen: boolean;
  setPassportInfoOpen: (open: boolean) => void;
  addressInfoOpen: boolean;
  setAddressInfoOpen: (open: boolean) => void;
  visaInfoOpen: boolean;
  setVisaInfoOpen: (open: boolean) => void;
  educationOpen: boolean;
  setEducationOpen: (open: boolean) => void;
  employmentOpen: boolean;
  setEmploymentOpen: (open: boolean) => void;
  addEducationEntry: () => void;
  removeEducationEntry: (index: number) => void;
  addEmploymentEntry: () => void;
  removeEmploymentEntry: (index: number) => void;
}

const EmployeeInformation: React.FC<EmployeeInformationProps> = ({
  employeeDetails,
  onEmployeeChange,
  onSave,
  personalInfoOpen,
  setPersonalInfoOpen,
  passportInfoOpen,
  setPassportInfoOpen,
  addressInfoOpen,
  setAddressInfoOpen,
  visaInfoOpen,
  setVisaInfoOpen,
  educationOpen,
  setEducationOpen,
  employmentOpen,
  setEmploymentOpen,
  addEducationEntry,
  removeEducationEntry,
  addEmploymentEntry,
  removeEmploymentEntry
}) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          Employee Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Personal Information */}
        <Collapsible open={personalInfoOpen} onOpenChange={setPersonalInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            {personalInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="empFirstName">First Name</Label>
                <Input
                  id="empFirstName"
                  value={employeeDetails.firstName}
                  onChange={(e) => onEmployeeChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name(s)</Label>
                <Input
                  id="middleName"
                  value={employeeDetails.middleName}
                  onChange={(e) => onEmployeeChange('middleName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="empLastName">Last Name</Label>
                <Input
                  id="empLastName"
                  value={employeeDetails.lastName}
                  onChange={(e) => onEmployeeChange('lastName', e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={employeeDetails.dateOfBirth}
                  onChange={(e) => onEmployeeChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Place of Birth</Label>
                <Input
                  id="placeOfBirth"
                  value={employeeDetails.placeOfBirth}
                  onChange={(e) => onEmployeeChange('placeOfBirth', e.target.value)}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Passport Information */}
        <Collapsible open={passportInfoOpen} onOpenChange={setPassportInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Passport Information</h3>
            {passportInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="passportNumber">Passport Number</Label>
                <Input
                  id="passportNumber"
                  value={employeeDetails.passportNumber}
                  onChange={(e) => onEmployeeChange('passportNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="passportIssueDate">Issue Date</Label>
                <Input
                  id="passportIssueDate"
                  type="date"
                  value={employeeDetails.passportIssueDate}
                  onChange={(e) => onEmployeeChange('passportIssueDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="passportExpiryDate">Expiry Date</Label>
                <Input
                  id="passportExpiryDate"
                  type="date"
                  value={employeeDetails.passportExpiryDate}
                  onChange={(e) => onEmployeeChange('passportExpiryDate', e.target.value)}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Contact & Address Information */}
        <Collapsible open={addressInfoOpen} onOpenChange={setAddressInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Contact & Address Information</h3>
            {addressInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homePhoneNumber">Home Phone Number</Label>
                <Input
                  id="homePhoneNumber"
                  value={employeeDetails.homePhoneNumber}
                  onChange={(e) => onEmployeeChange('homePhoneNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="workPhoneNumber">Work Phone Number</Label>
                <Input
                  id="workPhoneNumber"
                  value={employeeDetails.workPhoneNumber}
                  onChange={(e) => onEmployeeChange('workPhoneNumber', e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={employeeDetails.currentlyInUS}
                onCheckedChange={(checked) => onEmployeeChange('currentlyInUS', checked)}
              />
              <Label>Currently in the US</Label>
            </div>

            {employeeDetails.currentlyInUS && (
              <div>
                <Label htmlFor="currentUSAddress">Current US Address</Label>
                <Input
                  id="currentUSAddress"
                  value={employeeDetails.currentUSAddress}
                  onChange={(e) => onEmployeeChange('currentUSAddress', e.target.value)}
                />
              </div>
            )}

            <div>
              <Label htmlFor="foreignAddress">Foreign Address</Label>
              <Input
                id="foreignAddress"
                value={employeeDetails.foreignAddress}
                onChange={(e) => onEmployeeChange('foreignAddress', e.target.value)}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Visa Information */}
        <Collapsible open={visaInfoOpen} onOpenChange={setVisaInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Visa Information</h3>
            {visaInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div>
              <Label htmlFor="currentVisaType">Current Visa Type</Label>
              <Select value={employeeDetails.currentVisaType} onValueChange={(value) => onEmployeeChange('currentVisaType', value)}>
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

            {employeeDetails.currentVisaType !== 'None' && (
              <>
                <div>
                  <Label htmlFor="visaExpirationDate">Visa Expiration Date</Label>
                  <Input
                    id="visaExpirationDate"
                    type="date"
                    value={employeeDetails.visaExpirationDate}
                    onChange={(e) => onEmployeeChange('visaExpirationDate', e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={employeeDetails.hasPreviousUSVisas}
                    onCheckedChange={(checked) => onEmployeeChange('hasPreviousUSVisas', checked)}
                  />
                  <Label>Have you had previous US Visas?</Label>
                </div>

                {employeeDetails.hasPreviousUSVisas && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">Previous Visa Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="previousVisaType">Previous Visa Type</Label>
                        <Input
                          id="previousVisaType"
                          value={employeeDetails.previousVisaType}
                          onChange={(e) => onEmployeeChange('previousVisaType', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousVisaNumber">Previous Visa Number</Label>
                        <Input
                          id="previousVisaNumber"
                          value={employeeDetails.previousVisaNumber}
                          onChange={(e) => onEmployeeChange('previousVisaNumber', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousVisaExpirationDate">Previous Visa Expiration Date</Label>
                        <Input
                          id="previousVisaExpirationDate"
                          type="date"
                          value={employeeDetails.previousVisaExpirationDate}
                          onChange={(e) => onEmployeeChange('previousVisaExpirationDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Education History */}
        <Collapsible open={educationOpen} onOpenChange={setEducationOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Education History</h3>
            {educationOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            {employeeDetails.educationHistory.map((education: any, index: number) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">Education Entry {index + 1}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEducationEntry(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institution Name</Label>
                    <Input
                      value={education.institutionName}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].institutionName = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={education.location}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].location = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label>Institution Address</Label>
                  <Input
                    value={education.institutionAddress}
                    onChange={(e) => {
                      const newHistory = [...employeeDetails.educationHistory];
                      newHistory[index].institutionAddress = e.target.value;
                      onEmployeeChange('educationHistory', newHistory);
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Major/Specialization</Label>
                    <Input
                      value={education.major}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].major = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Degree/Certification Obtained</Label>
                    <Input
                      value={education.degree}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].degree = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      value={education.startDate}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].startDate = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      value={education.endDate}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.educationHistory];
                        newHistory[index].endDate = e.target.value;
                        onEmployeeChange('educationHistory', newHistory);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addEducationEntry} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Education Entry
            </Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Employment History */}
        <Collapsible open={employmentOpen} onOpenChange={setEmploymentOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Employment History</h3>
            {employmentOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            {employeeDetails.employmentHistory.map((employment: any, index: number) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">Employment Entry {index + 1}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEmploymentEntry(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Employer Name</Label>
                    <Input
                      value={employment.employerName}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.employmentHistory];
                        newHistory[index].employerName = e.target.value;
                        onEmployeeChange('employmentHistory', newHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={employment.jobTitle}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.employmentHistory];
                        newHistory[index].jobTitle = e.target.value;
                        onEmployeeChange('employmentHistory', newHistory);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label>Employer Address</Label>
                  <Input
                    value={employment.employerAddress}
                    onChange={(e) => {
                      const newHistory = [...employeeDetails.employmentHistory];
                      newHistory[index].employerAddress = e.target.value;
                      onEmployeeChange('employmentHistory', newHistory);
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      value={employment.startDate}
                      onChange={(e) => {
                        const newHistory = [...employeeDetails.employmentHistory];
                        newHistory[index].startDate = e.target.value;
                        onEmployeeChange('employmentHistory', newHistory);
                      }}
                    />
                  </div>
                  {!employment.isCurrent && (
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="date"
                        value={employment.endDate}
                        onChange={(e) => {
                          const newHistory = [...employeeDetails.employmentHistory];
                          newHistory[index].endDate = e.target.value;
                          onEmployeeChange('employmentHistory', newHistory);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={employment.isCurrent}
                    onCheckedChange={(checked) => {
                      const newHistory = [...employeeDetails.employmentHistory];
                      newHistory[index].isCurrent = checked;
                      if (checked) {
                        newHistory[index].endDate = '';
                      }
                      onEmployeeChange('employmentHistory', newHistory);
                    }}
                  />
                  <Label>This is my current position</Label>
                </div>
                <div>
                  <Label>Job Duties and Responsibilities</Label>
                  <Input
                    value={employment.jobDuties}
                    onChange={(e) => {
                      const newHistory = [...employeeDetails.employmentHistory];
                      newHistory[index].jobDuties = e.target.value;
                      onEmployeeChange('employmentHistory', newHistory);
                    }}
                  />
                </div>
              </div>
            ))}
            <Button onClick={addEmploymentEntry} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Employment Entry
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex justify-end">
          <Button onClick={onSave}>Save Employee Information</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeInformation;
