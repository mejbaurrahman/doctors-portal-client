import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'
import PrimaryButton from '../Button/PrimaryButton'

export default function Navigation() {

  const {user,loading, logOut} = useContext(AuthContext);
  // const location = useLocation();
  console.log(window.location.pathname);
  return (
    <div className=''>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        {
          !loading && user?.uid ? <>
          {/* <li>{user?.displayName}</li> */}
          <li><Link to='/dashbord'>Dashbord</Link></li>
          <button className='btn btn-ghost' onClick={logOut}>Logout</button>
          </>: <li><Link to='/login'>Login</Link></li>
        }
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        {
          !loading && user?.uid ? <>
          {/* <li>{user?.displayName}</li> */}
          <li><Link to='/dashbord'>Dashbord</Link></li>
          <button className='btn btn-ghost' onClick={logOut}>Logout</button>
          </>: <li><Link to='/login'>Login</Link></li>
        }
    </ul>
    
  </div>
  <label htmlFor="dashbord-drawer" tabIndex={0} className="btn btn-ghost lg:hidden ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  
</div>

    </div>
  )
}
