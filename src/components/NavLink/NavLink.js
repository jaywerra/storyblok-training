import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({
    linkHref,
    linkLabel,
    classes,
}) => {
  return (
    <Link
        to={linkHref}
        className={classes}
        activeClassName="text-pink-600"
    >
        {linkLabel}
    </Link>
  )
}

export default NavLink;
