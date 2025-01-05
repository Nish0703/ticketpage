import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="tedx">TEDx</span>
        <span className="iitg">IITG</span>
      </div>
      <div className="links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About us</a>
        <a href="#" className="nav-link">Events</a>
        <a href="#" className="nav-link">Contact us</a>
        <a href="#" className="nav-link">Thank you</a>
      </div>
      <button className="book-now-button">
        Book Now
      </button>
    </nav>
  );
}
