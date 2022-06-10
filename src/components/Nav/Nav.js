import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import NavSubMenuLink from '../NavLink/NavSubMenuLink';
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
                                    className={`${subnav === i ? 'block' : 'hidden'} absolute left-0 mt-8 p-10 w-full bg-white border border-solid border-slate-200 drop-shadow-xl`}
                                >

                                    <div className="flex w-full justify-between">
                                        <div className="w-4/12">
                                            <h2 className="bg-blue-100 text-blue-500 inline-block mb-4 p-3">
                                                {link.title}
                                            </h2>
                                            <ul>
                                                {link.subNav.map(subLink => {
                                                    return (
                                                        <NavSubMenuLink
                                                            subNavLinkLabel={subLink.linkLabel}
                                                            subNavLinkUrl={subLink.linkHref}
                                                            menuClass={subnav === i ? 'block' : 'hidden'}
                                                            key={subLink.linkLabel}
                                                        />
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div className="w-4/12 pl-8 border-l border-solid border-slate-200">
                                            Middle Col
                                        </div>
                                        <div className="w-4/12">
                                            Right Col
                                        </div>
                                    </div>
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
