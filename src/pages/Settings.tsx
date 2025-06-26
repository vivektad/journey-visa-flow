
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Building, Bell, Shield, Globe, Palette, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Settings = () => {
  const [personalSettings, setPersonalSettings] = useState({
    firstName: 'Julia',
    lastName: 'Doe',
    email: 'julia.doe@company.com',
    notifications: true,
    emailUpdates: false,
    theme: 'light'
  });

  const [instanceSettings, setInstanceSettings] = useState({
    companyName: 'Acme Corp',
    timezone: 'America/New_York',
    language: 'English',
    twoFactor: true,
    dataRetention: '7 years',
    apiAccess: false
  });

  // Company onboarding fields
  const [companyDetails, setCompanyDetails] = useState({
    legalBusinessName: 'Acme Corp',
    dba: '',
    fein: '12-3456789',
    yearOfIncorporation: '2010',
    businessAddress: '123 Main St, New York, NY 10001',
    telephoneNumber: '(555) 123-4567',
    companyWebsite: 'https://acmecorp.com',
    natureOfBusiness: 'Technology Services',
    contactFirstName: 'John',
    contactLastName: 'Smith',
    contactTitle: 'HR Director',
    contactPhoneNumber: '(555) 123-4568',
    contactEmailAddress: 'john.smith@acmecorp.com'
  });

  // Employee specific fields (if user is an employee)
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: 'Julia',
    middleName: '',
    lastName: 'Doe',
    dateOfBirth: '1990-01-15',
    placeOfBirth: 'New York, USA',
    passportNumber: 'A12345678',
    passportIssueDate: '2020-01-01',
    passportExpiryDate: '2030-01-01',
    homePhoneNumber: '(555) 987-6543',
    workPhoneNumber: '(555) 123-4567',
    currentlyInUS: true,
    currentUSAddress: '456 Oak St, New York, NY 10002',
    foreignAddress: '',
    currentVisaType: 'H-1B',
    visaExpirationDate: '2026-08-15',
    hasPreviousUSVisas: true,
    previousVisaType: 'F-1',
    previousVisaNumber: 'F123456789',
    previousVisaExpirationDate: '2022-05-30',
    educationHistory: [
      {
        institutionName: 'Stanford University',
        location: 'Stanford, CA',
        institutionAddress: '450 Serra Mall, Stanford, CA 94305',
        major: 'Computer Science',
        startDate: '2008-09-01',
        endDate: '2012-06-15',
        degree: 'Bachelor of Science'
      }
    ],
    employmentHistory: [
      {
        employerName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        employerAddress: '123 Main St, New York, NY 10001',
        startDate: '2022-07-01',
        isCurrent: true,
        endDate: '',
        jobDuties: 'Develop and maintain web applications using React and Node.js'
      }
    ]
  });

  const [accountManagement, setAccountManagement] = useState({
    userRole: 'Employee' // Lawyer, Employee, HR Team
  });

  // Collapsible states
  const [companyInfoOpen, setCompanyInfoOpen] = useState(false);
  const [contactInfoOpen, setContactInfoOpen] = useState(false);
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [passportInfoOpen, setPassportInfoOpen] = useState(false);
  const [addressInfoOpen, setAddressInfoOpen] = useState(false);
  const [visaInfoOpen, setVisaInfoOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [employmentOpen, setEmploymentOpen] = useState(false);

  const handlePersonalChange = (field: string, value: any) => {
    setPersonalSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleInstanceChange = (field: string, value: any) => {
    setInstanceSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleCompanyChange = (field: string, value: any) => {
    setCompanyDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleEmployeeChange = (field: string, value: any) => {
    setEmployeeDetails(prev => ({ ...prev, [field]: value }));
  };

  const addEducationEntry = () => {
    setEmployeeDetails(prev => ({
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
    setEmployeeDetails(prev => ({
      ...prev,
      educationHistory: prev.educationHistory.filter((_, i) => i !== index)
    }));
  };

  const addEmploymentEntry = () => {
    setEmployeeDetails(prev => ({
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
    setEmployeeDetails(prev => ({
      ...prev,
      employmentHistory: prev.employmentHistory.filter((_, i) => i !== index)
    }));
  };

  const handleSavePersonal = () => {
    console.log('Saving personal settings:', personalSettings);
    // Add toast notification here
  };

  const handleSaveInstance = () => {
    console.log('Saving instance settings:', { instanceSettings, companyDetails, accountManagement });
    // Add toast notification here
  };

  const handleSaveEmployee = () => {
    console.log('Saving employee details:', employeeDetails);
    // Add toast notification here
  };

  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <header className="bg-warm-card border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg font-medium text-gray-900">VisaFlow</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your personal, employee, and instance settings</p>
        </div>

        <div className="space-y-8">
          {/* Personal Settings */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={personalSettings.firstName}
                    onChange={(e) => handlePersonalChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={personalSettings.lastName}
                    onChange={(e) => handlePersonalChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalSettings.email}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="theme">Theme</Label>
                <Select value={personalSettings.theme} onValueChange={(value) => handlePersonalChange('theme', value)}>
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

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications in your browser</p>
                  </div>
                  <Switch
                    checked={personalSettings.notifications}
                    onCheckedChange={(checked) => handlePersonalChange('notifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Updates</Label>
                    <p className="text-sm text-gray-500">Receive workflow updates via email</p>
                  </div>
                  <Switch
                    checked={personalSettings.emailUpdates}
                    onCheckedChange={(checked) => handlePersonalChange('emailUpdates', checked)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSavePersonal}>Save Personal Settings</Button>
              </div>
            </CardContent>
          </Card>

          {/* Employee Details (only show if user is an employee) */}
          {accountManagement.userRole === 'Employee' && (
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
                          onChange={(e) => handleEmployeeChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="middleName">Middle Name(s)</Label>
                        <Input
                          id="middleName"
                          value={employeeDetails.middleName}
                          onChange={(e) => handleEmployeeChange('middleName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="empLastName">Last Name</Label>
                        <Input
                          id="empLastName"
                          value={employeeDetails.lastName}
                          onChange={(e) => handleEmployeeChange('lastName', e.target.value)}
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
                          onChange={(e) => handleEmployeeChange('dateOfBirth', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="placeOfBirth">Place of Birth</Label>
                        <Input
                          id="placeOfBirth"
                          value={employeeDetails.placeOfBirth}
                          onChange={(e) => handleEmployeeChange('placeOfBirth', e.target.value)}
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
                          onChange={(e) => handleEmployeeChange('passportNumber', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="passportIssueDate">Issue Date</Label>
                        <Input
                          id="passportIssueDate"
                          type="date"
                          value={employeeDetails.passportIssueDate}
                          onChange={(e) => handleEmployeeChange('passportIssueDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="passportExpiryDate">Expiry Date</Label>
                        <Input
                          id="passportExpiryDate"
                          type="date"
                          value={employeeDetails.passportExpiryDate}
                          onChange={(e) => handleEmployeeChange('passportExpiryDate', e.target.value)}
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
                          onChange={(e) => handleEmployeeChange('homePhoneNumber', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="workPhoneNumber">Work Phone Number</Label>
                        <Input
                          id="workPhoneNumber"
                          value={employeeDetails.workPhoneNumber}
                          onChange={(e) => handleEmployeeChange('workPhoneNumber', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={employeeDetails.currentlyInUS}
                        onCheckedChange={(checked) => handleEmployeeChange('currentlyInUS', checked)}
                      />
                      <Label>Currently in the US</Label>
                    </div>

                    {employeeDetails.currentlyInUS && (
                      <div>
                        <Label htmlFor="currentUSAddress">Current US Address</Label>
                        <Input
                          id="currentUSAddress"
                          value={employeeDetails.currentUSAddress}
                          onChange={(e) => handleEmployeeChange('currentUSAddress', e.target.value)}
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="foreignAddress">Foreign Address</Label>
                      <Input
                        id="foreignAddress"
                        value={employeeDetails.foreignAddress}
                        onChange={(e) => handleEmployeeChange('foreignAddress', e.target.value)}
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
                      <Select value={employeeDetails.currentVisaType} onValueChange={(value) => handleEmployeeChange('currentVisaType', value)}>
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
                            onChange={(e) => handleEmployeeChange('visaExpirationDate', e.target.value)}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={employeeDetails.hasPreviousUSVisas}
                            onCheckedChange={(checked) => handleEmployeeChange('hasPreviousUSVisas', checked)}
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
                                  onChange={(e) => handleEmployeeChange('previousVisaType', e.target.value)}
                                />
                              </div>
                              <div>
                                <Label htmlFor="previousVisaNumber">Previous Visa Number</Label>
                                <Input
                                  id="previousVisaNumber"
                                  value={employeeDetails.previousVisaNumber}
                                  onChange={(e) => handleEmployeeChange('previousVisaNumber', e.target.value)}
                                />
                              </div>
                              <div>
                                <Label htmlFor="previousVisaExpirationDate">Previous Visa Expiration Date</Label>
                                <Input
                                  id="previousVisaExpirationDate"
                                  type="date"
                                  value={employeeDetails.previousVisaExpirationDate}
                                  onChange={(e) => handleEmployeeChange('previousVisaExpirationDate', e.target.value)}
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
                    {employeeDetails.educationHistory.map((education, index) => (
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                              handleEmployeeChange('educationHistory', newHistory);
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                                handleEmployeeChange('educationHistory', newHistory);
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
                    {employeeDetails.employmentHistory.map((employment, index) => (
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
                                handleEmployeeChange('employmentHistory', newHistory);
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
                                handleEmployeeChange('employmentHistory', newHistory);
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
                              handleEmployeeChange('employmentHistory', newHistory);
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
                                handleEmployeeChange('employmentHistory', newHistory);
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
                                  handleEmployeeChange('employmentHistory', newHistory);
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
                              handleEmployeeChange('employmentHistory', newHistory);
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
                              handleEmployeeChange('employmentHistory', newHistory);
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
                  <Button onClick={handleSaveEmployee}>Save Employee Information</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instance Settings */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Instance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Account Management */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Account Management</h3>
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

              {/* Company Information */}
              <Collapsible open={companyInfoOpen} onOpenChange={setCompanyInfoOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h3 className="text-lg font-medium text-gray-900">Company Information</h3>
                  {companyInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="legalBusinessName">Legal Business Name</Label>
                      <Input
                        id="legalBusinessName"
                        value={companyDetails.legalBusinessName}
                        onChange={(e) => handleCompanyChange('legalBusinessName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dba">DBA (if any)</Label>
                      <Input
                        id="dba"
                        value={companyDetails.dba}
                        onChange={(e) => handleCompanyChange('dba', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fein">Federal Employer ID Number (FEIN/EIN)</Label>
                      <Input
                        id="fein"
                        value={companyDetails.fein}
                        onChange={(e) => handleCompanyChange('fein', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="yearOfIncorporation">Year of Incorporation</Label>
                      <Input
                        id="yearOfIncorporation"
                        value={companyDetails.yearOfIncorporation}
                        onChange={(e) => handleCompanyChange('yearOfIncorporation', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Input
                      id="businessAddress"
                      value={companyDetails.businessAddress}
                      onChange={(e) => handleCompanyChange('businessAddress', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telephoneNumber">Telephone Number</Label>
                      <Input
                        id="telephoneNumber"
                        value={companyDetails.telephoneNumber}
                        onChange={(e) => handleCompanyChange('telephoneNumber', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyWebsite">Company Website</Label>
                      <Input
                        id="companyWebsite"
                        value={companyDetails.companyWebsite}
                        onChange={(e) => handleCompanyChange('companyWebsite', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="natureOfBusiness">Nature of Business</Label>
                    <Input
                      id="natureOfBusiness"
                      value={companyDetails.natureOfBusiness}
                      onChange={(e) => handleCompanyChange('natureOfBusiness', e.target.value)}
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Contact Information */}
              <Collapsible open={contactInfoOpen} onOpenChange={setContactInfoOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h3 className="text-lg font-medium text-gray-900">Employer Point of Contact</h3>
                  {contactInfoOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactFirstName">First Name</Label>
                      <Input
                        id="contactFirstName"
                        value={companyDetails.contactFirstName}
                        onChange={(e) => handleCompanyChange('contactFirstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactLastName">Last Name</Label>
                      <Input
                        id="contactLastName"
                        value={companyDetails.contactLastName}
                        onChange={(e) => handleCompanyChange('contactLastName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactTitle">Title</Label>
                      <Input
                        id="contactTitle"
                        value={companyDetails.contactTitle}
                        onChange={(e) => handleCompanyChange('contactTitle', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPhoneNumber">Phone Number</Label>
                      <Input
                        id="contactPhoneNumber"
                        value={companyDetails.contactPhoneNumber}
                        onChange={(e) => handleCompanyChange('contactPhoneNumber', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactEmailAddress">Email Address</Label>
                    <Input
                      id="contactEmailAddress"
                      type="email"
                      value={companyDetails.contactEmailAddress}
                      onChange={(e) => handleCompanyChange('contactEmailAddress', e.target.value)}
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={instanceSettings.timezone} onValueChange={(value) => handleInstanceChange('timezone', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={instanceSettings.language} onValueChange={(value) => handleInstanceChange('language', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security & Compliance
                </h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={instanceSettings.twoFactor}
                    onCheckedChange={(checked) => handleInstanceChange('twoFactor', checked)}
                  />
                </div>

                <div>
                  <Label htmlFor="dataRetention">Data Retention Period</Label>
                  <Select value={instanceSettings.dataRetention} onValueChange={(value) => handleInstanceChange('dataRetention', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="1 year">1 Year</SelectItem>
                      <SelectItem value="3 years">3 Years</SelectItem>
                      <SelectItem value="5 years">5 Years</SelectItem>
                      <SelectItem value="7 years">7 Years</SelectItem>
                      <SelectItem value="indefinite">Indefinite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>API Access</Label>
                    <p className="text-sm text-gray-500">Allow third-party applications to access your data</p>
                  </div>
                  <Switch
                    checked={instanceSettings.apiAccess}
                    onCheckedChange={(checked) => handleInstanceChange('apiAccess', checked)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveInstance}>Save Instance Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
