import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import CSS file for styling
import logo from './logo_inc2.png'; // Import the InC logo image
import UserProfileCard from './JudgeProfile'; // Import UserProfileCard component

const Profile = () => {
  useEffect(() => {
    Swal.fire({
      title: "WELCOME TO InC 2024 JUDGE DASHBOARD",
      text: "Get ready to assess some amazing projects!",
      icon: "success",
      customClass: {
        confirmButton: 'swal-confirm-button'
      }
    });
  }, []);

  return (
    <div className="welcome-container">
      <div className="card">
        <div className="logo-containers">
          <img src={logo} alt="InC Logo" className="logo" />
        </div>
        <UserProfileCard />

        <h2 style={{ color: '#FFD700' }}>Welcome, Judges! </h2>
        <p>
          Thank you for serving as a judge in the Impetus and Concepts (InC) 2024 project competition.
        </p>
        <p>
          Your expertise and feedback are invaluable in acknowledging and rewarding innovative projects. As a judge, your responsibility is to assess project submissions using predefined criteria and offer constructive feedback to participants. Please utilize the links below to navigate the judge dashboard and fulfill your tasks:
        </p>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ fontSize: '18px', padding: '10px 20px', backgroundColor: ' #FFD700', color: 'white', border: 'none', borderRadius: '5px' }}>
              <Link to="/judge/allocation-details" className="dashboard-link" style={{ color: 'white', textDecoration: 'none' }}>Allocation Details</Link>
            </button>
          </div>
  

         

        </div>
      </div>
    </div>
  );
}

export default Profile;
