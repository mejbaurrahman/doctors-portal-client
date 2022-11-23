import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
export default function DashboardLayout() {

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
        <Navigation></Navigation>
        
        <div className="drawer drawer-mobile">
  <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      <li><Link to='/dashbord'>My Appointments</Link></li>
      {
        
        isAdmin && <>
        <li>
        <Link to='/dashbord/allusers'>All Users</Link>
      </li>
        <li>
        <Link to='/dashbord/adddoctor'>Add Doctor</Link>
      </li>
        <li>
        <Link to='/dashbord/managedoctor'>Manage Doctor</Link>
      </li>
      </>
        }
    </ul>
  
  </div>
</div>
    </div>
  )
}
