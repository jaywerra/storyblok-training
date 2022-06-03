import { Link } from 'gatsby';
import React from 'react'

const Nav = () => {
    const links = [
        {
            linkLabel: "About",
            linkHref: "/about/",
        },
        {
            linkLabel: "Contact",
            linkHref: "/contact/"
        },
    ]
    return (
        <nav>
           <ul className="flex">
               {links.map(link => {
                   return (
                        <li key={link.linkLabel} className="ml-10">
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

export default Nav