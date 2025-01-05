import React from 'react';
import { X } from 'lucide-react';
import './BookingModal.css'; // Import the external CSS file

function BookingModal({ isOpen, onClose, sessionTitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose} className="close-button">
          <X size={20} />
        </button>
        <h2 className="modal-title">Book Your Ticket</h2>
        <h3 className="session-title">{sessionTitle}</h3>
        <form className="modal-form">
          <div>
            <label className="label">Name</label>
            <input 
              type="text"
              className="input-field"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input 
              type="email"
              className="input-field"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="label">Student ID (if applicable)</label>
            <input 
              type="text"
              className="input-field"
              placeholder="Your student ID"
            />
          </div>
          <button type="submit" className="confirm-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
