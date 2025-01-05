import React from "react";
import { Calendar, Clock, Ticket } from "lucide-react";
import "./ArcadeTicket.css";

const ArcadeTicket = ({ type, date, time, onBook, className = "" }) => {
  const isStudent = type === "student";

  return (
    <div className={`arcade-ticket-container ${className}`}>
      {/* Geometric Pattern Background */}
      <div className="geometric-pattern"></div>

      {/* Main Ticket Container */}
      <div className="ticket-main">
        {/* Jagged Edges */}
        <div className="jagged-edges top"></div>
        <div className="jagged-edges bottom"></div>

        {/* Ticket Content */}
        <div className="ticket-content">
          <div className="header">
            <div className="header-title">★ TEDx ACE PRESENTS ★</div>
            <div className="header-subtitle">
              {isStudent ? "⭐ IITG STUDENT PASS ⭐" : "⭐ GENERAL ADMISSION ⭐"}
            </div>
          </div>

          <div className="ticket-details">
            <div className="ticket-title">
              <h2>Uncharted Archives</h2>
              <p>
                {isStudent
                  ? "Special Student Access"
                  : "General Public Access"}
              </p>
            </div>
            <div className="ticket-date-time">
              <div className="info">
                <Calendar className="icon" />
                {date}
              </div>
              <div className="info">
                <Clock className="icon" />
                {time}
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="ticket-number">
              <Ticket className="icon-large" />
              <div className="number">
                №{Math.floor(Math.random() * 9000 + 1000)}
              </div>
            </div>
            <button className="book-button" onClick={onBook}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcadeTicket;
