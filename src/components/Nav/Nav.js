import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import NavTabs from '../NavTabs/NavTabs';
import { NavData } from './NavData';

const Nav = () => {
    const [subnav, setSubnav] = useState(null);
    
    const toggleMenu = (i) => {
		if (subnav === i) {
			return setSubnav(null);
		}
		setSubnav(i);
    }

    return (
        <nav>
            <ul className="flex font-mono uppercase tracking-widest">
                {NavData.map((link, i) => {
                    return (                    
                        <li  
                            key={link.linkLabel} 
                            className="ml-10"
                        >
                            <NavLink
                                linkHref={link.linkHref}
                                linkLabel={link.linkLabel}
                                link={link}
                                toggleMenu={() => {toggleMenu(i)}}
                            />
                            {link.subNav && (
                                <div
                                    className={`${subnav === i ? 'block' : 'hidden'} flex absolute left-0 mt-8 p-10 w-full bg-white border border-solid border-slate-300 drop-shadow-xl`}
                                >
                                    <NavTabs navHeadingTitle={link.title}>
                                        {link.subNav.map(subLink => {
                                            return (
                                                <div
                                                    label={subLink.linkLabel}
                                                >
                                                    {subLink.linkLabel}
                                                </div>
                                            );
                                        })}
                                    </NavTabs>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Nav;
