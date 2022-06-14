import React, { useState, useRef } from 'react';
import { FaStumbleuponCircle } from 'react-icons/fa';
import useOnClickOutside from '../../hooks/use-clickoutside';
import MenuList from '../MenuList/MenuList';
import NavLink from '../NavLink/NavLink';
import NavTabs from '../NavTabs/NavTabs';
import { NavData } from './NavData';

const Nav = () => {
    const [subnav, setSubnav] = useState(null);
    const ref = useRef();

    useOnClickOutside(ref, () => setSubnav(false));

    const toggleMenu = i => {
		if (subnav === i) {
			return setSubnav(null);
		}
		setSubnav(i);
    }

    return (
        <nav ref={ref}>
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
                                activeClass={`${subnav === i ? 'text-blue-600' : ''}`}
                            />
                            {link.subNav && (
                                <div
                                    className={`${subnav === i ? 'block' : 'hidden'} flex absolute left-0 mt-8 p-12 w-full bg-white border border-solid border-slate-300 drop-shadow-xl`}
                                >
                                    <NavTabs navHeadingTitle={link.title}>
                                        {link.subNav.map(subLink => {
                                            return (
                                                <div
                                                    label={subLink.linkLabel}
                                                    key={subLink.linkLabel}
                                                >
                                                    {subLink.subNavItems && (
                                                        <ul className="flex justify-between gap-10">
                                                            {subLink.subNavItems.map(innerSubItem => (
                                                                <>
                                                                    {subLink.component === "menuList"
                                                                        ? 
                                                                            <MenuList
                                                                                itemTitle={innerSubItem?.linkLabel}
                                                                                imagePath={innerSubItem?.imagePath}
                                                                                imageAltText={innerSubItem?.imageAltText}
                                                                                linkSummary={innerSubItem?.linkSummary}
                                                                                readMoreLabel={innerSubItem?.readMoreLabel}
                                                                            />
                                                                        :
                                                                            <p>{subLink.linkLabel}</p>
                                                                    }
                                                                    
                                                                </>
                                                            ))}
                                                        </ul>
                                                    )}
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
