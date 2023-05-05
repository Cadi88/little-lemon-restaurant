import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  var styles = {
    backgroundNav: {
      backgroundColor: "white",
      display: 'flex',
      gap: '12px'
    },
    navLink: {
      padding: "5px",
      textDecoration: 'none'
    },
  };

  return (
    <nav style={styles.backgroundNav}>
      {/* <ul style={styles.ul}> */}
        <Link to="/" className='nav-item' style={styles.navLink}>Home</Link>
        <Link to="/about" className='nav-item' style={styles.navLink}>About</Link>
        <Link to="/menu" className='nav-item' style={styles.navLink}>Menu</Link>
        <Link to="/reservations" className='nav-item' style={styles.navLink}>Reservations</Link>
        <Link to="/order-online" className='nav-item' style={styles.navLink}>Order Online</Link>
        <Link to="/login" className='nav-item' style={styles.navLink}>Login</Link>
      {/* </ul> */}
    </nav>
  )
}

export default Nav