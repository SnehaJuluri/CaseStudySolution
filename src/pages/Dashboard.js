/*import React from 'react';
import profiles from '../ProfData';
import ProfileCard from '../ProfCard';

const Dashboard = () => {
    return (
      <div className="dashboard-container">
        <h2 className="dashboard-title">Profile Dashboard</h2>
        <div className="profile-grid">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard; */

  import React, { useState } from 'react';
  import profilesData from '../ProfData'; // Assuming ProfData is an array of profiles
  import ProfileCard from '../ProfCard';
  
  const Dashboard = ({ isAdmin }) => {
    const [profiles, setProfiles] = useState(profilesData);
  
    const handleDelete = (id) => {
      const updatedProfiles = profiles.filter(profile => profile.id !== id);
      setProfiles(updatedProfiles);
    };
  
    return (
      <div className="dashboard-container">
        <h2 className="dashboard-title">Profile Dashboard</h2>
        <div className="profile-grid">
          {profiles.map((profile) => (
            <ProfileCard 
              key={profile.id} 
              profile={profile} 
              isAdmin={isAdmin} 
              onDelete={() => handleDelete(profile.id)} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  