import React, { useState, useRef } from 'react';
import { FaStumbleuponCircle } from 'react-icons/fa';
import useOnClickOutside from '../../hooks/use-clickoutside';
import MenuList from '../MenuList/MenuList';
import MenuWithImage from '../MenuWithImage/MenuWithImage';
import NavLink from '../NavLink/NavLink';
import NavTabs from '../NavTabs/NavTabs';
import { NavData } from './NavData';

const Nav = () => {
    const [subnav, setSubnav] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () => setSubnav(false));

    const toggleMenu = i => {
		if (subnav === i) {
			return setSubnav(null);
		}
		setSubnav(i);
    }

    const burgerClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <button
                onClick={burgerClick}
                className="md:hidden py-2 px-6 border border-solid border-blue-700"
            >
                Menu
            </button>
            <nav
                ref={ref}
                className={`${showMenu ? 'block' : 'hidden'} md:block absolute md:static left-0 top-24 md:top-0 w-screen md:w-auto bg-white h-auto md:h-auto py-4 md:py-0`}
            >
                <ul className="md:flex font-mono uppercase tracking-widest">
                    {NavData.map((link, i) => {
                        return (                    
                            <li  
                                key={link.linkLabel} 
                                className="mb-4 md:ml-10 md:mb-0"
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
                                        className={`${subnav === i ? 'block' : 'hidden'} flex md:absolute left-0 mt-4 md:mt-8 md:p-12 w-full bg-slate-100 md:bg-white md:border md:border-solid md:border-slate-300 drop-shadow-xl`}
                                    >
                                        <NavTabs navHeadingTitle={link.title}>
                                            {link.subNav.map(subLink => {
                                                return (
                                                    <div
                                                        label={subLink.linkLabel}
                                                        key={subLink.linkLabel}
                                                    >
                                                        {subLink.subNavItems && (
                                                            <>
                                                                {subLink.component === "menuList" && (
                                                                    <ul className="md:flex justify-between gap-10">
                                                                        {subLink.subNavItems.map(innerSubItem => (
                                                                            <MenuList
                                                                                itemTitle={innerSubItem?.linkLabel}
                                                                                imagePath={innerSubItem?.imagePath}
                                                                                imageAltText={innerSubItem?.imageAltText}
                                                                                linkSummary={innerSubItem?.linkSummary}
                                                                                readMoreLabel={innerSubItem?.readMoreLabel}
                                                                            />
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                                {subLink.component === "menuWithImage" && (
                                                                    <div className="flex">
                                                                        <div className="w-1/2">
                                                                            <ul>
                                                                                {subLink.subNavItems.map(innerSubItem => (
                                                                                    <MenuWithImage
                                                                                        linkLabel={innerSubItem?.linkLabel}
                                                                                        linkHref={innerSubItem?.linkHref}
                                                                                    />
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                        <div className="w-1/2">
                                                                            {/* Make Img Component */}
                                                                            <img src={subLink.imagePath} alt="" />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </>
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
        </>
    )
}

export default Nav;
