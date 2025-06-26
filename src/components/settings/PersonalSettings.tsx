
import React from 'react';
import { User, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface PersonalSettingsProps {
  settings: {
    firstName: string;
    lastName: string;
    email: string;
    notifications: boolean;
    emailUpdates: boolean;
    theme: string;
  };
  onSettingsChange: (field: string, value: any) => void;
  onSave: () => void;
}

const PersonalSettings: React.FC<PersonalSettingsProps> = ({ settings, onSettingsChange, onSave }) => {
  return (
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
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) => onSettingsChange('email', e.target.value)}
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
              checked={settings.notifications}
              onCheckedChange={(checked) => onSettingsChange('notifications', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Email Updates</Label>
              <p className="text-sm text-gray-500">Receive workflow updates via email</p>
            </div>
            <Switch
              checked={settings.emailUpdates}
              onCheckedChange={(checked) => onSettingsChange('emailUpdates', checked)}
            />
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
