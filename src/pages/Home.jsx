import React from 'react'
import Navbar from '../components/HomeNavbar'
import styles from '../assets/css/home.module.css'
import HomeNavbar from '../components/HomeNavbar'
import CampaignCard from '../components/CampaignCard'
import OrganizationsCard from '../components/OrganizationsCard'

const Home = () => {
    let data = [1,2,3,4,5,6]
    let orgData = [1,2,3]
  return (
        <>
        <section className={styles.banner}>
        <div className='bg-white absolute right-5 top-24'>
            Hemlo
        </div>
        <HomeNavbar />
            <div className={` ${styles.heroContainer}`}>
                <div className={styles.heroText}>
                    Empower lives with your giving
                </div>
                <div className={styles.heroButtonWrapper}>
                    <button className={styles.heroButtons} >Donate to Palestine</button>
                    <button className={styles.heroButtons} >Help individuals in need</button>
                </div>
            </div>
        </section>
        <section className='py-8 px-[72px]'>
            <div className={`${styles.fundraisingTitle} text-sm md:text-[32px] mb-3 font-[700]`}>Fundraising now</div>
            <div className={`${styles.fundraisingSubTitle} mb-4`}>Sponsored</div>

            <div className="grid grid-cols-3 gap-6">
                {
                    data.map((item,index)=><CampaignCard index={index}/>)
                }
            </div>
            <div className="text-center mt-6">
                <button className='bg-green-600 text-white font-semibold text-sm px-8 py-2 rounded-full'>
                    SHOW ALL
                </button>
            </div>
        </section>

        <section className="py-8 px-[72px]">
            <div className={`${styles.fundraisingTitle} text-sm md:text-[32px] mb-3 font-[700]`}>Organizations</div>
            <div className={`${styles.fundraisingSubTitle} mb-4`}>Support your favorite organizations</div>
            <div className="grid grid-cols-3 gap-6 mt-4">
                {
                    orgData.map((items,index)=><OrganizationsCard index={index}/>)
                }
            </div>
        </section>
        
        </>
  )
}

export default Home