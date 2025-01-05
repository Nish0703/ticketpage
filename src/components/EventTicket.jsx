import React from 'react';
import styles from './EventTicket.module.css'
import { Calendar, Clock, Ticket } from 'lucide-react';
// import './EventTicket.css';

function EventTicket({ title, subtitle, date, time, onBook }) {
  return (
    <div className={styles.ticket-card}>
      {/* Zigzag borders */}
      <div className={styles.zigzag-top}></div>
      <div className={styles.zigzag-bottom}></div>

      <div className={styles.ticket-content}>
        <div className={styles.ticket-header}>
          <div className={styles.presenter}>★ TEDx ACE PRESENTS ★</div>
          <div className={styles.admit-one}>⭐ ADMIT ONE ⭐</div>
        </div>

        <div className={styles.ticket-details}>
          <div>
            <h2 className={styles.ticket-title}>{title}</h2>
            <p className={styles.ticket-subtitle}>{subtitle}</p>
          </div>
          <div className={styles.ticket-date-time}>
            <div className={styles.icon-text}>
              <Calendar className={styles.icon } />
              {date}
            </div>
            <div className={styles.icon-text}>
              <Clock className={styles.icon } />
              {time}
            </div>
          </div>
        </div>

        <div className={styles.ticket-footer}>
          <div className={styles.ticket-number}>
            <Ticket className={styles.icon} />
            <div className={styles.number-box}>№{Math.floor(Math.random() * 9000 + 1000)}</div>
          </div>
          <button onClick={onBook} className={styles.book-button}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventTicket;
