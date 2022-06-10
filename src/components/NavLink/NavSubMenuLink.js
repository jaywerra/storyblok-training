import React from 'react';
import { Link } from 'gatsby';

const NavSubMenuLink = ({
    subNavLinkLabel,
    subNavLinkUrl,
}) => {
    return (         
        <li className="mb-3">
            <Link to={subNavLinkUrl} className="underline">
                {subNavLinkLabel}
            </Link>
        </li>
    )
}

export default NavSubMenuLink;
