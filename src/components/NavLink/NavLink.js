import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({
    linkHref,
    linkLabel,
    toggleMenu,
    activeClass,
}) => {
    return (
        <Link
            to={linkHref}
            onClick={toggleMenu}
            className={activeClass}
        >
            {linkLabel}
        </Link>
    )
}

export default NavLink;
