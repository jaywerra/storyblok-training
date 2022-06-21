import { Link } from 'gatsby';
import React from 'react';
import NavLink from '../NavLink/NavLink';

const NavMain = ({ blok }) => {
    console.log(blok)
	return (
		<div className="mainnavclass">
            <ul>
                {blok.children.map(item => {
                    return (
                        <li key={item.nav_tab}>
                            {item.has_child_menu === true ?
                                <p>
                                    {item.nav_tab}
                                </p>
                                :
                                <Link
                                    to={`/${item.link_url.cached_url}`}
                                    style={{color: 'red'}}
                                >
                                    {item.nav_tab}
                                </Link>
                            }
                            
                        </li>
                    );
                })}
            </ul>
		</div>
	)
}

export default NavMain;
