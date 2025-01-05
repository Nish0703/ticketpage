import './TicketCard.css';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function TicketCard({ from, to, date, time, price, onBook }) {
  return (
    <div className="ticket-card">
      <div className="ticket-info">
        <div className="ticket-details">
          <div className="info-row">
            <MapPin className="icon" />
            <span className="text">From: {from}</span>
          </div>
          <div className="info-row">
            <MapPin className="icon" />
            <span className="text">To: {to}</span>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
      
      <div className="ticket-datetime">
        <div className="datetime">
          <Calendar className="icon" />
          <span className="text">{date}</span>
        </div>
        <div className="datetime">
          <Clock className="icon" />
          <span className="text">{time}</span>
        </div>
      </div>

      <button onClick={onBook} className="book-button">
        Book Now
      </button>
    </div>
  );
}
