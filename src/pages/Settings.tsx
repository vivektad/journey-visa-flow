import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PersonalSettings from '@/components/settings/PersonalSettings';
import InstanceSettings from '@/components/settings/InstanceSettings';

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
    middleName: '',
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

  // User management state
  const [users, setUsers] = useState([
    { id: '1', name: 'Julia Doe', email: 'julia.doe@company.com', role: 'Employee', status: 'Active' },
    { id: '2', name: 'John Smith', email: 'john.smith@acmecorp.com', role: 'HR Team', status: 'Active' },
    { id: '3', name: 'Sarah Wilson', email: 'sarah.wilson@acmecorp.com', role: 'Lawyer', status: 'Pending' }
  ]);

  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Employee');

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
    console.log('Saving personal settings:', { personalSettings, employeeDetails });
    // Add toast notification here
  };

  const handleSaveInstance = () => {
    console.log('Saving instance settings:', { instanceSettings, companyDetails, accountManagement });
    // Add toast notification here
  };

  const handleInviteUser = () => {
    if (inviteEmail) {
      const newUser = {
        id: Date.now().toString(),
        name: inviteEmail.split('@')[0],
        email: inviteEmail,
        role: inviteRole,
        status: 'Pending'
      };
      setUsers([...users, newUser]);
      setInviteEmail('');
      setInviteRole('Employee');
      console.log('Inviting user:', newUser);
    }
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    console.log('Deleting user:', userId);
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
          <p className="text-gray-500">Manage your personal and instance settings</p>
        </div>

        <div className="space-y-8">
          {/* Personal Settings (now includes employee information and user role) */}
          <PersonalSettings
            settings={personalSettings}
            employeeDetails={employeeDetails}
            onSettingsChange={handlePersonalChange}
            onEmployeeChange={handleEmployeeChange}
            onSave={handleSavePersonal}
            personalInfoOpen={personalInfoOpen}
            setPersonalInfoOpen={setPersonalInfoOpen}
            passportInfoOpen={passportInfoOpen}
            setPassportInfoOpen={setPassportInfoOpen}
            addressInfoOpen={addressInfoOpen}
            setAddressInfoOpen={setAddressInfoOpen}
            visaInfoOpen={visaInfoOpen}
            setVisaInfoOpen={setVisaInfoOpen}
            educationOpen={educationOpen}
            setEducationOpen={setEducationOpen}
            employmentOpen={employmentOpen}
            setEmploymentOpen={setEmploymentOpen}
            addEducationEntry={addEducationEntry}
            removeEducationEntry={removeEducationEntry}
            addEmploymentEntry={addEmploymentEntry}
            removeEmploymentEntry={removeEmploymentEntry}
            accountManagement={accountManagement}
            setAccountManagement={setAccountManagement}
            users={users}
            onInviteUser={handleInviteUser}
            onDeleteUser={handleDeleteUser}
            inviteEmail={inviteEmail}
            setInviteEmail={setInviteEmail}
            inviteRole={inviteRole}
            setInviteRole={setInviteRole}
          />

          {/* Instance Settings (user role removed) */}
          <InstanceSettings
            instanceSettings={instanceSettings}
            companyDetails={companyDetails}
            onInstanceChange={handleInstanceChange}
            onCompanyChange={handleCompanyChange}
            onSave={handleSaveInstance}
            companyInfoOpen={companyInfoOpen}
            setCompanyInfoOpen={setCompanyInfoOpen}
            contactInfoOpen={contactInfoOpen}
            setContactInfoOpen={setContactInfoOpen}
          />
        </div>
      </main>
    </div>
  );
};

export default Settings;
