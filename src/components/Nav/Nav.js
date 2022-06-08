import { Link } from 'gatsby';
import React from 'react'

const Nav = () => {
    const links = [
        {
            linkLabel: "Product",
            linkHref: "/",
        },
        {
            linkLabel: "Company",
            linkHref: "/",
        },
        {
            linkLabel: "Case Studies",
            linkHref: "/",
        },
        {
            linkLabel: "Contact us",
            linkHref: "/contact/"
        },
    ]
    return (
        <nav>
           <ul className="flex">
               {links.map(link => {
                   return (
                        <li 
                            key={link.linkLabel} 
                            className="ml-10"
                        >
                            <Link
                                to={link.linkHref}
                                className="block py-1 font-mono border-b border-white border-solid hover:border-black ease-linear uppercase"
                            >
                                {link.linkLabel}
                            </Link>
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