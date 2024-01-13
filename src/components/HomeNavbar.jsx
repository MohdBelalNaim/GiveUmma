import React, { useState } from 'react'
import styles from '../assets/css/navbar.module.css'

const HomeNavbar = () => {
const[menu,setMenu] = useState(false)
const[search,setSearch] = useState(false)
const[signup,setSignup] = useState(false)
const[auth,setAuth] = useState(false)

function showSearch(){
setSearch(true)
document.body.style.overflow='hidden'
}

function hideSearch(){
setSearch(false)
document.body.style.overflow='unset'
}

function showAuth(){
  setAuth(true)
  document.body.style.overflow='hidden'
}
function hideAuth(){
  setAuth(false)
  document.body.style.overflow='unset'
}

return (
<>
  {
  auth?
  <div className={`${styles.searchOverlay} flex justify-center items-start`}>
    <div className='bg-white w-[36%] max-sm:w-[96%] rounded-xl p-4 shadow-xl relative top-5 animate__animated animate__bounceIn'>
      <div><i onClick={hideAuth} className="bi bi-x text-xl font-bold"></i></div>
      <div className='grid grid-cols-2'>
        <div className='font-bold border-b-2 text-center py-3 cursor-pointer' onClick={()=>setSignup(false)}>Login</div>
        <div className='font-bold border-b-2 text-center py-3 cursor-pointer' onClick={()=>setSignup(true)}>Signup</div>
      </div>
      {
      signup?
      <section className='p-4'>
        <div className='text-2xl font-bold mb-4'>Signup</div>
        <div className='flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black'>
          <i className="bi bi-google"></i>
          <div>Continue with Google</div>
        </div>
        <div className='text-center text-gray-500  py-1'>or</div>
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-2 shadow-inner rounded-lg'
          placeholder='First Name' />
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg'
          placeholder='Last Name' />
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg'
          placeholder='Email Address' />
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg'
          placeholder='Password' />
        <div className='flex gap-3 mt-3'>
          <input type="checkbox" className='w-4' name="" id="" />
          <div className='text-xs'>
            I’d like to receive awesome e-mails and updates from LaunchGood
          </div>
        </div>
        <button className='bg-black w-full text-white text-lg rounded-lg py-2 mt-3 '>Signup</button>
        <div className='text-sm text-center mt-3'>Already have an account? Login</div>
        <div className='text-sm text-center mt-3'>
          By continuing, you agree with GiveUmma's Terms of Use and Privacy Policy.
        </div>
      </section>
      :
      <section className='p-4'>
        <div className='text-2xl font-bold mb-4'>Login</div>
        <div className='flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black'>
          <i className="bi bi-google"></i>
          <div>Continue with Google</div>
        </div>
        <div className='text-center text-gray-500  py-1'>or</div>
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg'
          placeholder='Email Address' />
        <input type="text" className='bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg'
          placeholder='Password' />
        <button className='bg-black w-full text-white text-lg rounded-lg py-2 mt-3'>Login</button>
        <div className='text-sm text-center mt-3'>Don't have an account? Signup</div>
      </section>
      }


    </div>
  </div>
  :''
  }

  {
  search?
  <div className={`${styles.searchOverlay} flex items-center justify-center`} onClick={(e)=>hideSearch(e)}>
    <div className='bg-white w-[44%] rounded-xl p-4 shadow-xl'>
      <div className='border-[1px] border-gray-300 rounded-lg overflow-hidden'>
        <input className='w-[85%] shadow-inner px-3 py-2' type="text" placeholder="Search for" />
        <button className='w-[15%] p-2 text-center border-l'><i className="bi bi-search"></i></button>
      </div>
    </div>
  </div>
  :""
  }

  <div className={`${styles.navContainer} container mx-auto relative`}>
    {
    menu?
    <div className='bg-white absolute right-5 top-24 w-80 rounded-xl shadow-lg z-50'>
      <div className='px-3 pt-2'>
        <input type="text"
          className=' mt-2 w-full text-sm bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-inner'
          placeholder='I want to support...' />
        <div className='flex items-center gap-4 py-2 mt-2'>
          <i className="bi bi-globe text text-gray-400"></i>
          <div className='text-sm'>Insipiring Campaigns</div>
        </div>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-heart text text-gray-400"></i>
          <div className='text-sm'>Zakat Verified</div>
        </div>
        <div className='flex items-center gap-4 py-2 pb-4'>
          <i className="bi bi-house text text-gray-400"></i>
          <div className='text-sm'>Tax Benifits</div>
        </div>
      </div>
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-send text text-gray-400"></i>
          <div className='text-sm'>Start fundraising</div>
        </div>
      </div>
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-person text text-gray-400"></i>
          <div className='text-sm'>About Us</div>
        </div>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-phone text text-gray-400"></i>
          <div className='text-sm'>Contact Us</div>
        </div>
      </div>
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-shield text text-gray-400"></i>
          <div className='text-sm cursor-pointer' onClick={showAuth}>Login or Signup</div>
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
    <div className="nav-items">
      <button className={`${styles.startCampaignButton}`}>START A CAMPAIGN</button>
    </div>
    <div className="nav-items">
      <div className={styles.logoText}>GiveUmmah</div>
    </div>
    <div className="nav-items">
      <i className="bi bi-search cursor-pointer hover:text-green-400" onClick={showSearch} id={styles.navbarIcons}
        style={{"marginRight":20+'px'}}></i>
      {
      menu?
      <i onClick={()=>setMenu(!menu)} className="bi bi-x text-[24px] hover:text-green-400 cursor-pointer"></i>
      :
      <i onClick={()=>setMenu(!menu)} className="bi bi-list hover:text-green-400 cursor-pointer"
        id={styles.navbarIcons}></i>
      }
    </div>
  </div>
</>
)
}

export default HomeNavbar