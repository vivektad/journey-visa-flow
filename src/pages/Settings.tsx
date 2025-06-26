
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Building, Bell, Shield, Globe, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

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

  const handlePersonalChange = (field: string, value: any) => {
    setPersonalSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleInstanceChange = (field: string, value: any) => {
    setInstanceSettings(prev => ({ ...prev, [field]: value }));
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
            </CardContent>
          </Card>

          {/* Instance Settings */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Instance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={instanceSettings.companyName}
                  onChange={(e) => handleInstanceChange('companyName', e.target.value)}
                />
              </div>

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
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
