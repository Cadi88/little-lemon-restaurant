import React from 'react'
import imgFood from '../assets/restauranfood.jpg'

const HomePage = () => {
  const styles = {
    bg1: {
      backgroundColor: '#495E57',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      gap: '132px'
    },
    legend: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    title: {
      fontFamily: 'Markazi Text',
      fontSize: '56px',
      color: '#F4CE14'
    },
    subtitle: {
      fontFamily: 'Markazi Text',
      fontSize: '32px',
      color: 'white'
    },
    desc: {
      color: 'white',
    },
    imgContainer: {
      overflow: 'hidden',
    },
    imgFood: {
      width: '300px'
    }
  }
  return (
    <>
      <section style={styles.bg1}>
        <div style={styles.legend}>
          <span style={styles.title}>Little Lemon</span>
          <span style={styles.subtitle}>Chicago</span>
          <p style={styles.desc}>
            We are a family owned a <br />Mediterranean restaurant, <br />
            focused on traditional <br /> recipes served with a modern <br /> twist.
          </p>
        </div>
        <div style={styles.imgContainer}>
          <img src={imgFood} style={styles.imgFood} alt='Chef' />
        </div>
      </section>
    </>
  )
}

export default HomePage