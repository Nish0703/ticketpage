import React from 'react';
import Navbar from './components/Navbar';
import ArcadeTicket from './components/ArcadeTicket';
import ExclusiveBenefits from './components/ExclusiveBenefits';
import './App.css';

function App() {
  const handleBook = () => {
    alert('Booking functionality will be implemented here!');
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title">Uncharted Archives</h1>
          <p className="hero-description">
            Explore groundbreaking ideas and inspiring talks at TEDx ACE
          </p>
        </div>

        <div className="content-grid">
          <div className="ticket-container">
            <div className="ticket-wrapper">
              <ArcadeTicket
                type="student"
                date="Mar 15, 2024"
                time="11:00 AM"
                onBook={handleBook}
                className="ticket student-ticket"
              />
              <ArcadeTicket
                type="general"
                date="Mar 15, 2024"
                time="2:00 PM"
                onBook={handleBook}
                className="ticket general-ticket"
              />
            </div>
          </div>
          <div className="benefits-container">
            <ExclusiveBenefits />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
