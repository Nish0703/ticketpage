import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import styles from './EventCard.module.css'

function EventCard({ title, venue, date, time, price, onBook }) {
  return (
    <>
    <div className={styles.event-card}>
      <div className={styles.event-card-header}>
        <div className={styles.event-card-title}>
          <h3 className={styles.event-title}>{title}</h3>
          <div className={styles.event-location}>
            <MapPin className={styles.icon } />
            <span className={styles.event-venue}>{venue}</span>
          </div>
        </div>
        <div className={styles.event-price }>{price}</div>
      </div>

      <div className={styles.event-details}>
        <div className={styles.event-date}>
          <Calendar className={styles.icon } />
          <span>{date}</span>
        </div>
        <div className={styles.event-time}>
          <Clock className={styles.icon } />
          <span>{time}</span>
        </div>
      </div>

      <button onClick={onBook} className={styles.book-button}>
        Book Now
      </button>
    </div>
    </>
  );
}

export default EventCard;
