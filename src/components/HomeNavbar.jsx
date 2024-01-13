import React, { useState } from 'react'
import styles from '../assets/css/navbar.module.css'

const HomeNavbar = () => {
  const[menu,setMenu] = useState(false)
  const[search,setSearch] = useState(false)

  function showSearch(){
    setSearch(true)
    document.body.style.overflow='hidden'
  }

  function hideSearch(){
    setSearch(false)
    document.body.style.overflow='unset'
  }
return (
<>

  {
    search?
    <div className={`${styles.searchOverlay} flex items-center justify-center`} onClick={hideSearch}>
      <div className='bg-white w-[44%] rounded-xl p-4 shadow-xl'>
        <div className='border-[1px] border-gray-300 rounded-lg overflow-hidden'>
          <input className='w-[85%] shadow-inner px-3 py-2' type="text" placeholder="Search for"/>
          <button className='w-[15%] p-2 text-center border-l'><i className="bi bi-search"></i></button>
        </div>
      </div>
    </div>
    :""
  }

  {
  menu?
  <div className='bg-white absolute right-5 top-24 w-80 rounded-xl shadow-lg'>
    <div className='px-3 pt-2'>
      <input type="text" className=' mt-2 w-full text-sm bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-inner'
        placeholder='I want to support...' />
      <div className='flex items-center gap-4 py-2 mt-1'>
        <i className="bi bi-globe text text-gray-400"></i>
        <div className='text-sm'>Discover insipiring campaigns</div>
      </div>
      <div className='flex items-center gap-4 py-2'>
        <i className="bi bi-heart text text-gray-400"></i>
        <div className='text-sm'>Donate safely to palestine</div>
      </div>
      <div className='flex items-center gap-4 py-2 pb-4'>
        <i className="bi bi-house text text-gray-400"></i>
        <div className='text-sm'>Friday givers</div>
      </div>
    </div>
    <div className='px-3 py-2 border-t'>
      <div className='text-xs text-gray-500 mt-2'>ACCOUNT</div>
      <div className='flex items-center gap-4 py-2 mt-3'>
        <i className="bi bi-shield text text-gray-400"></i>
        <div className='text-sm'>Login</div>
      </div>
      <div className='flex items-center gap-4 py-2 pb-4'>
        <i className="bi bi-person-plus text text-gray-400"></i>
        <div className='text-sm'>Signup</div>
      </div>
    </div>
    <div className='px-3 py-2 border-t'>
      <div className='text-xs text-gray-500 mt-2'>START</div>
      <div className='flex items-center gap-4 py-2 mt-3'>
        <i className="bi bi-send text text-gray-400"></i>
        <div className='text-sm'>Start fundraising</div>
      </div>
      <div className='flex items-center gap-4 py-2 pb-4'>
        <i className="bi bi-people text text-gray-400"></i>
        <div className='text-sm'>Start a community</div>
      </div>
    </div>
    <div className='px-3 py-2 border-t flex text-xs text-gray-500 gap-4'>
      <div>Privacy Policy</div>
      <div>Terms and Conditions</div>
    </div>
    <div className='px-3 pb-2 text-xs'>
      @GiveUmma 2024
    </div>
  </div>
  :
  ""
  }


  <div className={`${styles.navContainer} container mx-auto`}>
    <div className="nav-items">
      <button className={`${styles.startCampaignButton}`}>START A CAMPAIGN</button>
    </div>
    <div className="nav-items">
      <div className={styles.logoText}>GiveUmmah</div>
    </div>
    <div className="nav-items">
      <i className="bi bi-search cursor-pointer hover:text-green-400" onClick={showSearch} id={styles.navbarIcons} style={{"marginRight":20+'px'}}></i>
      {
        menu?
        <i onClick={()=>setMenu(!menu)} className="bi bi-x text-[24px] hover:text-green-400 cursor-pointer"></i>
        :
        <i onClick={()=>setMenu(!menu)} className="bi bi-list hover:text-green-400 cursor-pointer" id={styles.navbarIcons}></i>
      }
    </div>
  </div>
</>
)
}

export default HomeNavbar