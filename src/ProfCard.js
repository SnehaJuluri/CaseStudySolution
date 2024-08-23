
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

const ProfileCard = ({ profile, isAdmin, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    setShowMap(false); 
  };

  const handleSummaryClick = (e) => {
    e.stopPropagation(); 
    setIsExpanded(true);
    setShowMap(true);
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
    setShowMap(false);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }


    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isExpanded]);

  return (
    <>
      <div className="profile-card" onClick={handleCardClick}>
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h3>{profile.name}</h3>
        <p>{profile.role}</p>
        <button onClick={handleSummaryClick} className="summary-button">
          Summary
        </button>
        <br></br>
        {isAdmin && (
          <button onClick={(e) => { e.stopPropagation(); onDelete(); }} className="delete-button">
            Delete
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="profile-modal" onClick={handleCardClick}>
          <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseClick}>&times;</button>
            <img src={profile.image} alt={profile.name} className="profile-image-large" />
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <hr />
            {!showMap && <p>{profile.description}</p>}
            {showMap && (
              <div className="map-wrapper">
                <MapComponent address={profile.address} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;

















/*

const ProfileCard = ({ profile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setShowMap(false); // Reset map display when toggling the card
  };

  const handleSummaryClick = (e) => {
    e.stopPropagation(); // Prevent the card click event
    setIsExpanded(true);
    setShowMap(true);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup class when the component is unmounted
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isExpanded]);

  return (
    <>
      <div className="profile-card" onClick={handleClick}>
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h3>{profile.name}</h3>
        <p>{profile.role}</p>
        <button onClick={handleSummaryClick} className="summary-button">
          Summary
        </button>
      </div>

      {isExpanded && (
        <div className="profile-modal" onClick={handleClick}>
          <div className="profile-modal-content">
            <img src={profile.image} alt={profile.name} className="profile-image-large" />
            <h3>{profile.name}</h3>
            <p1>{profile.role}</p1>
            <hr></hr>
            {!showMap && <p2>{profile.description}</p2>}
            {showMap && (
              <div className="map-wrapper">
                <MapComponent address={profile.address} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;*/
