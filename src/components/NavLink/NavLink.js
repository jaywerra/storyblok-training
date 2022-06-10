import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({
    linkHref,
    linkLabel,
    classes,
    link,
    toggleMenu,
    menuClass,
}) => {
    return (
        <>
            <Link
                to={linkHref}
                onClick={toggleMenu}
            >
                {linkLabel}
            </Link>
        </>
    )
}

export default NavLink;
