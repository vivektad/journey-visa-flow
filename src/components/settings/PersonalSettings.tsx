import React from 'react';
import { User, ChevronDown, ChevronUp, Users, Trash2, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';

interface PersonalSettingsProps {
  settings: any;
  employeeDetails: any;
  onSettingsChange: (field: string, value: any) => void;
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
  accountManagement: any;
  setAccountManagement: (value: any) => void;
  users: any[];
  onInviteUser: () => void;
  onDeleteUser: (userId: string) => void;
  inviteEmail: string;
  setInviteEmail: (email: string) => void;
  inviteRole: string;
  setInviteRole: (role: string) => void;
}

const PersonalSettings: React.FC<PersonalSettingsProps> = ({
  settings,
  employeeDetails,
  onSettingsChange,
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
  removeEmploymentEntry,
  accountManagement,
  setAccountManagement,
  users,
  onInviteUser,
  onDeleteUser,
  inviteEmail,
  setInviteEmail,
  inviteRole,
  setInviteRole
}) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          Personal Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User Role */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
          <div>
            <Label htmlFor="userRole">User Role</Label>
            <Select value={accountManagement.userRole} onValueChange={(value) => setAccountManagement(prev => ({ ...prev, userRole: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Lawyer">Lawyer</SelectItem>
                <SelectItem value="Employee">Employee</SelectItem>
                <SelectItem value="HR Team">HR Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={settings.firstName}
              onChange={(e) => onSettingsChange('firstName', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={settings.lastName}
              onChange={(e) => onSettingsChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) => onSettingsChange('email', e.target.value)}
          />
        </div>

        <Separator />

        {/* User Management Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            User Management
          </h3>
          
          {/* Invite User */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h4 className="font-medium text-gray-900">Invite New User</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <Label htmlFor="inviteEmail">Email Address</Label>
                <Input
                  id="inviteEmail"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <Label htmlFor="inviteRole">Role</Label>
                <Select value={inviteRole} onValueChange={setInviteRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Lawyer">Lawyer</SelectItem>
                    <SelectItem value="Employee">Employee</SelectItem>
                    <SelectItem value="HR Team">HR Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={onInviteUser} disabled={!inviteEmail}>
                <Plus className="w-4 h-4 mr-2" />
                Invite User
              </Button>
            </div>
          </div>

          {/* Users List */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Current Users</h4>
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Badge variant="outline">
                      {user.role}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDeleteUser(user.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Personal Information */}
        <Collapsible open={personalInfoOpen} onOpenChange={setPersonalInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            {personalInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={employeeDetails.middleName}
                  onChange={(e) => onEmployeeChange('middleName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={employeeDetails.dateOfBirth}
                  onChange={(e) => onEmployeeChange('dateOfBirth', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="placeOfBirth">Place of Birth</Label>
              <Input
                id="placeOfBirth"
                value={employeeDetails.placeOfBirth}
                onChange={(e) => onEmployeeChange('placeOfBirth', e.target.value)}
              />
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
            <div>
              <Label htmlFor="passportNumber">Passport Number</Label>
              <Input
                id="passportNumber"
                value={employeeDetails.passportNumber}
                onChange={(e) => onEmployeeChange('passportNumber', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="passportIssueDate">Passport Issue Date</Label>
                <Input
                  id="passportIssueDate"
                  type="date"
                  value={employeeDetails.passportIssueDate}
                  onChange={(e) => onEmployeeChange('passportIssueDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="passportExpiryDate">Passport Expiry Date</Label>
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

        {/* Address Information */}
        <Collapsible open={addressInfoOpen} onOpenChange={setAddressInfoOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Address Information</h3>
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

            <div className="flex items-center space-x-4">
              <Label htmlFor="currentlyInUS">Currently in the US?</Label>
              <Switch
                id="currentlyInUS"
                checked={employeeDetails.currentlyInUS}
                onCheckedChange={(checked) => onEmployeeChange('currentlyInUS', checked)}
              />
            </div>

            {employeeDetails.currentlyInUS ? (
              <div>
                <Label htmlFor="currentUSAddress">Current US Address</Label>
                <Input
                  id="currentUSAddress"
                  value={employeeDetails.currentUSAddress}
                  onChange={(e) => onEmployeeChange('currentUSAddress', e.target.value)}
                />
              </div>
            ) : (
              <div>
                <Label htmlFor="foreignAddress">Foreign Address</Label>
                <Input
                  id="foreignAddress"
                  value={employeeDetails.foreignAddress}
                  onChange={(e) => onEmployeeChange('foreignAddress', e.target.value)}
                />
              </div>
            )}
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
              <Input
                id="currentVisaType"
                value={employeeDetails.currentVisaType}
                onChange={(e) => onEmployeeChange('currentVisaType', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="visaExpirationDate">Visa Expiration Date</Label>
              <Input
                id="visaExpirationDate"
                type="date"
                value={employeeDetails.visaExpirationDate}
                onChange={(e) => onEmployeeChange('visaExpirationDate', e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="hasPreviousUSVisas">Has Previous US Visas?</Label>
              <Switch
                id="hasPreviousUSVisas"
                checked={employeeDetails.hasPreviousUSVisas}
                onCheckedChange={(checked) => onEmployeeChange('hasPreviousUSVisas', checked)}
              />
            </div>

            {employeeDetails.hasPreviousUSVisas && (
              <div className="space-y-4">
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
            {employeeDetails.educationHistory.map((education, index) => (
              <div key={index} className="space-y-2 border p-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`institutionName-${index}`}>Institution Name</Label>
                    <Input
                      id={`institutionName-${index}`}
                      value={education.institutionName}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, institutionName: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`location-${index}`}>Location</Label>
                    <Input
                      id={`location-${index}`}
                      value={education.location}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, location: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor={`institutionAddress-${index}`}>Institution Address</Label>
                  <Input
                    id={`institutionAddress-${index}`}
                    value={education.institutionAddress}
                    onChange={(e) => {
                      const updatedEducationHistory = [...employeeDetails.educationHistory];
                      updatedEducationHistory[index] = { ...education, institutionAddress: e.target.value };
                      onEmployeeChange('educationHistory', updatedEducationHistory);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`major-${index}`}>Major</Label>
                    <Input
                      id={`major-${index}`}
                      value={education.major}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, major: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`degree-${index}`}>Degree</Label>
                    <Input
                      id={`degree-${index}`}
                      value={education.degree}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, degree: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                    <Input
                      type="date"
                      id={`startDate-${index}`}
                      value={education.startDate}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, startDate: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <Input
                      type="date"
                      id={`endDate-${index}`}
                      value={education.endDate}
                      onChange={(e) => {
                        const updatedEducationHistory = [...employeeDetails.educationHistory];
                        updatedEducationHistory[index] = { ...education, endDate: e.target.value };
                        onEmployeeChange('educationHistory', updatedEducationHistory);
                      }}
                    />
                  </div>
                </div>

                <Button variant="destructive" size="sm" onClick={() => removeEducationEntry(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button onClick={addEducationEntry}>Add Education Entry</Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Employment History */}
        <Collapsible open={employmentOpen} onOpenChange={setEmploymentOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium text-gray-900">Employment History</h3>
            {employmentOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            {employeeDetails.employmentHistory.map((employment, index) => (
              <div key={index} className="space-y-2 border p-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`employerName-${index}`}>Employer Name</Label>
                    <Input
                      id={`employerName-${index}`}
                      value={employment.employerName}
                      onChange={(e) => {
                        const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                        updatedEmploymentHistory[index] = { ...employment, employerName: e.target.value };
                        onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
                    <Input
                      id={`jobTitle-${index}`}
                      value={employment.jobTitle}
                      onChange={(e) => {
                        const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                        updatedEmploymentHistory[index] = { ...employment, jobTitle: e.target.value };
                        onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor={`employerAddress-${index}`}>Employer Address</Label>
                  <Input
                    id={`employerAddress-${index}`}
                    value={employment.employerAddress}
                    onChange={(e) => {
                      const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                      updatedEmploymentHistory[index] = { ...employment, employerAddress: e.target.value };
                      onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                    <Input
                      type="date"
                      id={`startDate-${index}`}
                      value={employment.startDate}
                      onChange={(e) => {
                        const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                        updatedEmploymentHistory[index] = { ...employment, startDate: e.target.value };
                        onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <Input
                      type="date"
                      id={`endDate-${index}`}
                      value={employment.endDate}
                      onChange={(e) => {
                        const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                        updatedEmploymentHistory[index] = { ...employment, endDate: e.target.value };
                        onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor={`jobDuties-${index}`}>Job Duties</Label>
                  <Input
                    id={`jobDuties-${index}`}
                    value={employment.jobDuties}
                    onChange={(e) => {
                      const updatedEmploymentHistory = [...employeeDetails.employmentHistory];
                      updatedEmploymentHistory[index] = { ...employment, jobDuties: e.target.value };
                      onEmployeeChange('employmentHistory', updatedEmploymentHistory);
                    }}
                  />
                </div>

                <Button variant="destructive" size="sm" onClick={() => removeEmploymentEntry(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button onClick={addEmploymentEntry}>Add Employment Entry</Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label>Notifications</Label>
              <p className="text-sm text-gray-500">Receive notifications about your workflows</p>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) => onSettingsChange('notifications', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Email Updates</Label>
              <p className="text-sm text-gray-500">Receive email updates about system changes</p>
            </div>
            <Switch
              checked={settings.emailUpdates}
              onCheckedChange={(checked) => onSettingsChange('emailUpdates', checked)}
            />
          </div>

          <div>
            <Label htmlFor="theme">Theme</Label>
            <Select value={settings.theme} onValueChange={(value) => onSettingsChange('theme', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onSave}>Save Personal Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalSettings;
