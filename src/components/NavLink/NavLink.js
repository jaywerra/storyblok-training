import React from 'react';
import { Link } from 'gatsby';
import { FiChevronDown } from "react-icons/fi";

const NavLink = ({
    linkHref,
    linkLabel,
    toggleMenu,
    activeClass,
    animateArrowClass,
}) => {
    return (
        <Link
            to={linkHref}
            onClick={toggleMenu}
            className={`${activeClass} px-4 md:pl-0 flex justify-between md:block`}
        >
            {linkLabel}
            {/* Add if has child than show check */}
            <div className={`${animateArrowClass} md:hidden`}>
                <FiChevronDown style={{height: "24px", width: "24px"}} />
            </div>
        </Link>
    )
}

export default NavLink;
