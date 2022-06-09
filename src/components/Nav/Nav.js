import React from 'react';
import NavLink from '../NavLink/NavLink';
import { NavData } from './NavData';

const Nav = () => {
    return (
        <nav>
           <ul className="flex font-mono uppercase tracking-widest">
               {NavData.map(link => {
                   return (                    
                        <li  
                            key={link.linkLabel} 
                            className="ml-10"
                        >
                            <NavLink
                                linkHref={link.linkHref}
                                linkLabel={link.linkLabel}
                                link={link}
                            />
                        </li>
                   );
               })}
           </ul>
        </nav>
    )
}

export default Nav;
