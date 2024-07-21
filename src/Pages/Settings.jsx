import React, { useState } from 'react';

const SettingsPage = () => {
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacy, setPrivacy] = useState('public');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNotificationsChange = () => setNotificationsEnabled(!notificationsEnabled);
  const handlePrivacyChange = (e) => setPrivacy(e.target.value);

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Settings Page</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Change Password</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Notification Preferences</h2>
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <span className="ml-2 text-gray-700">Enable notifications</span>
          </label>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Privacy Settings</h2>
          <select
            value={privacy}
            onChange={handlePrivacyChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>
        <button
          onClick={handleSaveChanges}
          className="w-full bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
