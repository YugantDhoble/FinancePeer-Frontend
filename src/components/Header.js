import React from 'react';
import { useLocation } from 'react-router-dom'
// import {isLogin} from '../utils/isLogin';
import {deleteLocalStorage} from '../utils/localStorage';
import { useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const {pathname} = location;
  const includedRoutes = ['/upload', '/display'];
  const history = useHistory();
  const callRoute = () => {
    pathname === '/display' ? history.push('/upload') : history.push('/display')
  }
  const logout = () => {
    deleteLocalStorage();
    history.push("/");
  }
  return (
    <div className='row' style={{marginTop:'25px'}}>
      <div className='col s12 l5 m5'><h3
        style={{
          color: '#374EA1',
          fontWeight: 'bold',
          marginLeft: '55px',
          paddingTop:'0px',
          marginTop:'-12px'
        }}
      >
        FINANCE<span style={{ color: '#0DAF55' }}>PEER</span>
      </h3> 
      </div>
      {pathname !== '/' &&
      <div className='col s6 offset-l3 l2 offset-m3 m2 '>
      <button class="btn waves-effect waves-light navBtnn right" onClick={callRoute}> {pathname === '/display' ? 'Upload': 'Display'}
    <i class="material-icons right">event_note</i>
  </button>
      </div>}
      {includedRoutes.includes(pathname) && <div className='col s6 l2 m2'>
      <button class="btn waves-effect waves-light navBtnn" onClick={logout}>LogOut
    <i class="material-icons right">directions_run</i>
  </button>
      </div>}
    </div>
  );
};

export default Header;
