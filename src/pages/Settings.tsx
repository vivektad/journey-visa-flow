
import React from 'react';
import SettingsHeader from '@/components/settings/SettingsHeader';
import SettingsContainer from '@/components/settings/SettingsContainer';

const Settings = () => {
  return (
    <div className="min-h-screen bg-warm">
      <SettingsHeader />
      <SettingsContainer />
    </div>
  );
};

export default Settings;
