import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({
    linkHref,
    linkLabel,
    toggleMenu,
}) => {
    return (
        <Link
            to={linkHref}
            onClick={toggleMenu}
        >
            {linkLabel}
        </Link>
    )
}

export default NavLink;
