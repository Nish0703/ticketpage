import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ExclusiveBenefits.css';

export default function ExclusiveBenefits() {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const nonIitgBenefits = [
    "Access to all sessions in-person event in Main Hall",
    "Early access: get admitted early to the theatre for best seats",
    "Exclusive Access to meet & network with speakers",
    "Faster Registration process",
    "Networking with other attendees",
    "Access to Special Programming and Additional events",
    "Q & A opportunities with speakers",
    "Quick access to main stage seats from priority gates"
  ];

  const extraBenefits = [
    "Exclusive TEDx merchandise",
    "Priority access to future TEDx events",
    "Special workshop participation",
    "Digital access to recorded sessions",
    "VIP lounge access during breaks"
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Exclusive Benefits</h2>
      
      <div className="section">
        <h3 className="section-title">Non-IITG Attendees Pass Benefits</h3>
        <ul className="benefit-list">
          {nonIitgBenefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <span className="bullet-point">•</span>
              {benefit}
            </li>
          ))}
        </ul>
        
        {showMoreBenefits && (
          <ul className="benefit-list extra-benefits">
            {extraBenefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <span className="bullet-point">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        )}
        
        <button
          onClick={() => setShowMoreBenefits(!showMoreBenefits)}
          className="toggle-button"
        >
          {showMoreBenefits ? (
            <>Show Less <ChevronUp size={20} /></>
          ) : (
            <>Learn More <ChevronDown size={20} /></>
          )}
        </button>
      </div>

      <div className="section">
        <h3 className="section-title">IITG Students</h3>
        <div className="student-benefits">
          <h4 className="student-heading">Who can purchase a student ticket:</h4>
          <ul className="benefit-list">
            <li className="benefit-item">
              <span className="bullet-point">•</span>
              Students who have valid College ID Card of IITG
            </li>
            <li className="benefit-item">
              <span className="bullet-point">•</span>
              Students from the age of 8 to 12 years should be accompanied by an adult attendee
            </li>
            <li className="benefit-item highlight">
              <span className="bullet-point">*</span>
              This conference is not open for children below 8 years
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
