import React from 'react'
import { NAVBAR_LIST } from '../../../../constants/names'


const Navbar = ({isMobile, activeMenu, setActiveMenu}) => {
    return (
        <div className={isMobile ? "navbarWrapper" : "navbarDesktopWrapper"}>
          <div className="navbar">
            
            {NAVBAR_LIST.map((nav) => (
              <div key={nav} 
                   className={ activeMenu === nav ? "navbarActiveItem" : "navbarItem"}
                   onClick={ ( ) => setActiveMenu(nav)} 
                   >{nav}</div>
            ))}
           
          </div>
        </div>
    )
}

export default Navbar
