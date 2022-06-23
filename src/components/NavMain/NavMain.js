import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import useOnClickOutside from '../../hooks/use-clickoutside';
import NavTabs from '../NavTabs/NavTabs';

const NavMain = ({ blok }) => {
    const [subnav, setSubnav] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();

    useOnClickOutside(ref, () => setSubnav(false));

    const toggleMenu = i => {
		if (subnav === i) {
			return setSubnav(null);
		}
		setSubnav(i);
    }

    const burgerClick = () => {
        setShowMenu(!showMenu);
    }

	return (
        <div className="relative px-4 lg:px-0 lg:container lg:mx-auto z-10">
            <div className="px-4 lg:px-0 lg:container lg:mx-auto py-4 mt-12">
                <button
                    onClick={burgerClick}
                    className="md:hidden py-2 px-6 border border-solid border-blue-700"
                >
                    Menu
                </button>
                <nav
                    className={`${showMenu ? 'block' : 'hidden'} md:block absolute md:static left-0 top-16 md:top-0 w-screen md:w-auto bg-white h-auto md:h-auto py-4 md:py-0`}
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
                                    {item?.tab_content ?
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
                                                {/* Dropdown content */}
                                                {item?.tab_content && (
                                                    <NavTabs navHeadingTitle={item?.section_title}>
                                                        {item?.tab_content?.map(linkEl => {
                                                            return (
                                                                <div
                                                                    key={linkEl?.link_label} 
                                                                    label={linkEl?.link_label}
                                                                    pageLink={linkEl?.link_url?.cached_url}
                                                                    content={linkEl?.nav_card?.map(card => (
                                                                        <div className="w-1/3 mr-10 last:mr-0">
                                                                            <div className="mb-4">
                                                                                <Link to={card.card_link}>
                                                                                    <img src={card.thumbnail.filename} alt="" />
                                                                                </Link>
                                                                            </div>
                                                                            <h2 className="text-center">
                                                                                <Link to={card.card_link}>
                                                                                    {card.card_title}
                                                                                </Link>
                                                                            </h2>
                                                                        </div>
                                                                    ))}
                                                                />
                                                            )
                                                        })}                                               
                                                    </NavTabs>
                                                )}
                                            </div>
                                        </>
                                        :
                                        <Link to={item?.link_url?.cached_url}>
                                            {item?.nav_tab}
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
