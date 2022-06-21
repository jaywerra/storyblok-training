import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import useOnClickOutside from '../../hooks/use-clickoutside';
import NavLink from '../NavLink/NavLink';

const NavTab = ({
    tabLabel,
}) => {
    return (
        <li
            key={tabLabel}
            className=" mb-4"
        >
            {/* 
                If page link render a link 
                otherwise render tab button 
            */}
            <button className="uppercase hover:underline text-inherit hover:text-blue-600 cursor-pointer tracking-widest">
                {tabLabel}
            </button>
        </li>
    )
}

const NavMain = ({ blok }) => {
    const [subnav, setSubnav] = useState(null);
    const ref = useRef();

    const toggleMenu = i => {
		if (subnav === i) {
			return setSubnav(null);
		}
		setSubnav(i);
    }

    useOnClickOutside(ref, () => setSubnav(false));

    console.log(blok)

	return (
        <div className="relative px-4 lg:px-0 lg:container lg:mx-auto z-10">
            <div className="px-4 lg:px-0 lg:container lg:mx-auto py-4 mt-12">
                <nav
                    className={`md:block absolute md:static left-0 top-16 md:top-0 w-screen md:w-auto bg-white h-auto md:h-auto py-4 md:py-0`}
                    ref={ref}
                >
                    <ul className="md:flex uppercase tracking-widest">
                        {blok.children.map((item, i) => {
                            return (
                                <li
                                    key={item.nav_tab}
                                    className="mb-2 mr-6"
                                >
                                    {/* 
                                        Check for dropdown - if it has a dropdown render button 
                                        with dropdown markup otherwise render as link 
                                    */}
                                    {item.has_child_menu === true ?
                                        <>
                                            <button
                                                className="uppercase tracking-widest"
                                                onClick={() => {toggleMenu(i)}}
                                            >
                                                {item.nav_tab}
                                            </button>
                                            <div 
                                                className={`${subnav === i ? 'block' : 'hidden'} flex md:absolute left-0 mt-4 md:mt-8 md:p-12 w-full bg-slate-100 md:bg-white md:border md:border-solid md:border-slate-300 drop-shadow-xl`}
                                            >
                                                
                                                {/* 
                                                    Get Child component with options here 
                                                    Left column links/buttons - Can be
                                                    direct page links or toggle mega menu 
                                                    blocks to right
                                                */}
                                                <div className="w-1/2">
                                                    <p
                                                        className="bg-blue-100 text-blue-500 inline-block mb-6 p-3"
                                                    >
                                                        {item.nav_tab}
                                                    </p>
                                                   
                                                   {/* 
                                                        Loop through tab tab_content and 
                                                        populate list if it exists
                                                    */}
                                                    {item?.tab_content && (
                                                        <ul>
                                                            {item?.tab_content?.map(el => (
                                                                <NavTab tabLabel={el?.child_nav_tab} />
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                                <div className="w-1/2">
                                                    Tab Panel Content
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <Link
                                            to={`/${item?.link_url?.cached_url}`}
                                            style={{color: 'red'}}
                                            
                                        >
                                            {item.nav_tab}
                                        </Link>
                                    }
                                    
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
	)
}

export default NavMain;
