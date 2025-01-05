import React from "react";
import "./BookingInstructions.css";

function InstructionSection({ title, steps }) {
  return (
    <div className="instruction-section">
      <h3 className="instruction-title">{title}</h3>
      <ul className="instruction-steps">
        {steps.map((step, index) => (
          <li key={index} className="instruction-step">
            <span className="bullet-point">•</span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BookingInstructions() {
  const iitgSteps = [
    "Use your IITG email ID for registration",
    "Show your valid student ID at entry",
    "Early bird discount of 20% available",
    "Maximum 2 tickets per student",
  ];

  const nonIitgSteps = [
    "Valid government ID required for entry",
    "Regular pricing applies",
    "Limited seats available",
    "Maximum 4 tickets per person",
  ];

  return (
    <div className="booking-instructions-container">
      <h2 className="instructions-heading">Booking Instructions</h2>
      <InstructionSection title="For IITG Students" steps={iitgSteps} />
      <InstructionSection title="For Non-IITG Attendees" steps={nonIitgSteps} />

      <div className="important-note">
        <p className="note-title">Important Note</p>
        <p className="note-description">
          Tickets are non-transferable and will be verified at entry. Please carry your ID proof.
        </p>
      </div>
    </div>
  );
}
