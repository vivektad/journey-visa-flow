import React from 'react';
import { Building, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface InstanceSettingsProps {
  instanceSettings: any;
  companyDetails: any;
  onInstanceChange: (field: string, value: any) => void;
  onCompanyChange: (field: string, value: any) => void;
  onSave: () => void;
  companyInfoOpen: boolean;
  setCompanyInfoOpen: (open: boolean) => void;
  contactInfoOpen: boolean;
  setContactInfoOpen: (open: boolean) => void;
}

const InstanceSettings: React.FC<InstanceSettingsProps> = ({
  instanceSettings,
  companyDetails,
  onInstanceChange,
  onCompanyChange,
  onSave,
  companyInfoOpen,
  setCompanyInfoOpen,
  contactInfoOpen,
  setContactInfoOpen
}) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Building className="w-5 h-5 mr-2" />
          Instance Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
                  onChange={(e) => onCompanyChange('legalBusinessName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dba">DBA (if any)</Label>
                <Input
                  id="dba"
                  value={companyDetails.dba}
                  onChange={(e) => onCompanyChange('dba', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fein">Federal Employer ID Number (FEIN/EIN)</Label>
                <Input
                  id="fein"
                  value={companyDetails.fein}
                  onChange={(e) => onCompanyChange('fein', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="yearOfIncorporation">Year of Incorporation</Label>
                <Input
                  id="yearOfIncorporation"
                  value={companyDetails.yearOfIncorporation}
                  onChange={(e) => onCompanyChange('yearOfIncorporation', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="businessAddress">Business Address</Label>
              <Input
                id="businessAddress"
                value={companyDetails.businessAddress}
                onChange={(e) => onCompanyChange('businessAddress', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="telephoneNumber">Telephone Number</Label>
                <Input
                  id="telephoneNumber"
                  value={companyDetails.telephoneNumber}
                  onChange={(e) => onCompanyChange('telephoneNumber', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="companyWebsite">Company Website</Label>
                <Input
                  id="companyWebsite"
                  value={companyDetails.companyWebsite}
                  onChange={(e) => onCompanyChange('companyWebsite', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="natureOfBusiness">Nature of Business</Label>
              <Input
                id="natureOfBusiness"
                value={companyDetails.natureOfBusiness}
                onChange={(e) => onCompanyChange('natureOfBusiness', e.target.value)}
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
                  onChange={(e) => onCompanyChange('contactFirstName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contactLastName">Last Name</Label>
                <Input
                  id="contactLastName"
                  value={companyDetails.contactLastName}
                  onChange={(e) => onCompanyChange('contactLastName', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactTitle">Title</Label>
                <Input
                  id="contactTitle"
                  value={companyDetails.contactTitle}
                  onChange={(e) => onCompanyChange('contactTitle', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contactPhoneNumber">Phone Number</Label>
                <Input
                  id="contactPhoneNumber"
                  value={companyDetails.contactPhoneNumber}
                  onChange={(e) => onCompanyChange('contactPhoneNumber', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="contactEmailAddress">Email Address</Label>
              <Input
                id="contactEmailAddress"
                type="email"
                value={companyDetails.contactEmailAddress}
                onChange={(e) => onCompanyChange('contactEmailAddress', e.target.value)}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="timezone">Timezone</Label>
            <Select value={instanceSettings.timezone} onValueChange={(value) => onInstanceChange('timezone', value)}>
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
            <Select value={instanceSettings.language} onValueChange={(value) => onInstanceChange('language', value)}>
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
              onCheckedChange={(checked) => onInstanceChange('twoFactor', checked)}
            />
          </div>

          <div>
            <Label htmlFor="dataRetention">Data Retention Period</Label>
            <Select value={instanceSettings.dataRetention} onValueChange={(value) => onInstanceChange('dataRetention', value)}>
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
              onCheckedChange={(checked) => onInstanceChange('apiAccess', checked)}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onSave}>Save Instance Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstanceSettings;
