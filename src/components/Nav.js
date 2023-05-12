import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  var styles = {
    backgroundNav: {
      backgroundColor: 'white',
      display: 'flex',
      gap: '12px',
    },
    navLink: {
      padding: '5px',
      textDecoration: 'none',
    },
  };

  return (
    <nav style={styles.backgroundNav}>
      <Link
        to="/"
        className="nav-item"
        style={styles.navLink}
        aria-label="Home"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="nav-item"
        style={styles.navLink}
        aria-label="About"
      >
        About
      </Link>
      <Link
        to="/menu"
        className="nav-item"
        style={styles.navLink}
        aria-label="Menu"
      >
        Menu
      </Link>
      <Link
        to="/reservations"
        className="nav-item"
        style={styles.navLink}
        aria-label="Reservations"
      >
        Reservations
      </Link>
      <Link
        to="/order-online"
        className="nav-item"
        style={styles.navLink}
        aria-label="Order Online"
      >
        Order Online
      </Link>
      <Link
        to="/login"
        className="nav-item"
        style={styles.navLink}
        aria-label="Login"
      >
        Login
      </Link>
    </nav>
  );
};

export default Nav;
