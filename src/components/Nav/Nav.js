import React, { useState } from 'react';
import { Link } from 'gatsby';
import { 
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';
import SubNav from '../SubNav/SubNav';
import NavLink from '../NavLink/NavLink';


const Nav = () => {
    
    const links = [
        {
            linkLabel: "Product",
            linkHref: "#",
            icon: <FaChevronDown />,
            subNav: [
                {
                    linkLabel: "Features",
                    linkHref: "/features/",
                },
                {
                    linkLabel: "Industries",
                    linkHref: "/features/",
                },
            ],
        },
        {
            linkLabel: "Company",
            linkHref: "#",
            icon: <FaChevronDown />,
            subNav: [
                {
                    linkLabel: "Customer Success",
                    linkHref: "/",
                },
                {
                    linkLabel: "Partners",
                    linkHref: "/",
                },
            ],
        },
        {
            linkLabel: "Case Studies",
            linkHref: "#",
            icon: <FaChevronDown />,
        },
        {
            linkLabel: "Contact us",
            linkHref: "/contact/",
        },
    ];

    const [showMenu, setShowMenu] = useState();

    const handleClick = e => {
        e.preventDefault();
        
        setShowMenu(!showMenu);
    }

    return (
        <nav>
           <ul className="flex font-mono uppercase tracking-widest">
               {links.map(link => {
                   return (                    
                        <li 
                            key={link.linkLabel} 
                            className="ml-10"
                            onClick={() => setShowMenu(link.linkLabel)}

                        >
                            <NavLink
                                linkHref={link.linkHref}
                                linkLabel={link.linkLabel}
                                classes={`${showMenu === link.linkLabel ? 'text-pink-600' : ''} block py-1 border-b border-white border-solid hover:border-black ease-linear`}
                            />
                            {link.subNav && (
                                <ul className={`${showMenu === link.linkLabel ? 'block' : 'hidden'} absolute left-0 mt-4 w-full bg-white shadow-xl p-10 border border-solid border-gray-400`}>
                                    {link.subNav.map(subNavLink => {
                                        return (
                                            <SubNav
                                                linkLabel={subNavLink.linkLabel}
                                                linkUrl={subNavLink.linkHref}
                                            />
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                   );
               })}
           </ul>
        </nav>
    )
}

export default Nav;

/*
    Main Nav - nav
    - Parent Links - ul > li > a
        - Sub Menu - child div
            - Three Columns 
            - Parent Links
                - Two Columns
                    - Left Column
                        - Menu / Nav
                        - Promotional content, e.g., Image, Button, Headline
                    - Right Nav
                         - Promotional content, e.g., Image, Button, Headline
*/