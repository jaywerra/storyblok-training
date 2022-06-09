import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = ({
    linkHref,
    linkLabel,
    classes,
    link,
}) => {

    const [subnav, setSubnav] = useState(link);

    const showSubnav = () => {
        setSubnav(!subnav);
    }

    const handleClick = (e, newActiveTab) => {
        setSubnav(newActiveTab);
        e.preventDefault();
    }

    return (
        <>
            <Link
                to={linkHref}
                // onClick={showSubnav}
                onClick={(e) => handleClick(e, link.linkLabel)}
            >
                {linkLabel}
            </Link>
            {subnav && 
            //className={tab.tabName === activeTab ? 'active' : ''}
                <div
                    className={`${link.linkLabel === subnav ? 'block' : 'hidden'} absolute left-0 mt-8 p-12 w-full bg-white border border-solid border-slate-700 drop-shadow-lg`}
                >
                    <ul className="tabs">
                        {link.subNav.map(subNavItem => {
                            return (
                                <li key={subNavItem.linkLabel}>
                                    <Link to={subNavItem.linkHref}>
                                        {subNavItem.linkLabel}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            }
        </>
    )
}

export default NavLink;
