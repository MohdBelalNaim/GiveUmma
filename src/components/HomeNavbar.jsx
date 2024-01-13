import React from 'react'
import styles from '../assets/css/navbar.module.css'

const HomeNavbar = () => {
  return (
    <div className={`${styles.navContainer} container mx-auto`}>
      <div className="nav-items">
        <button className={styles.startCampaignButton}>START A CAMPAIGN</button>
      </div>
      <div className="nav-items">
        <div className={styles.logoText}>GiveUmmah</div>
      </div>
      <div className="nav-items">
        <i className="bi bi-search" id={styles.navbarIcons} style={{"marginRight":20+'px'}}></i>
        <i className="bi bi-list" id={styles.navbarIcons}></i>
      </div>
    </div>
  )
}

export default HomeNavbar