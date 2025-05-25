import React from 'react';
import ProfileSettings from '../components/ProfileSettings';
import '../assets/styles/profileSettings.css';

const ProfileSettingsPage = () => {
  const currentUser = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    profileImage: null,
  };

  const handleUpdateProfile = (updatedData) => {
    console.log('Updating profile:', updatedData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-settings-page">
      <ProfileSettings user={currentUser} onUpdate={handleUpdateProfile} />
    </div>
  );
};

export default ProfileSettingsPage;