import React from 'react'
import logo from '../assets/Logo.svg'
import Nav from '../components/Nav'

const Header = () => {
  const styles = {
    header: {
      height: '84px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      marginRight: '56px'
    }
  }
  return (
    <header style={styles.header}>
      <img src={logo} style={styles.logo} alt="logo" />
      <Nav />
    </header>
  )
}

export default Header