import React from 'react';
import { Link } from 'gatsby';
import { BsChevronRight } from 'react-icons/bs';
import imageOne from '../../images/menu-fpo-img.png';

const MenuList = () => {
    const menuItems = [
        {
            imagePath: imageOne,
            imageAlt: "Alt text",
            linkLabel: "Link One",
            linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            ctaLabel: "Start for free",
        },
        {
            imagePath: imageOne,
            imageAlt: "Alt text",
            linkLabel: "Link Two",
            linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            ctaLabel: "Start for free",
        },
        {
            imagePath: imageOne,
            imageAlt: "Alt text",
            linkLabel: "Link Three",
            linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            ctaLabel: "Start for free",
        },
    ]
    return (
        <div>
            <ul className="flex justify-between gap-10">
                {menuItems.map(item => {
                    return (
                        <li key={item.linkLabel} className="w-1/3">
                            <div className="thumbnail">
                                <img src={item.imagePath} alt={item.imageAlt} />
                            </div>
                            <Link to="#" className="block my-3 text-blue-600 text-center text-lg">
                                {item.linkLabel}
                            </Link>
                            <p className="text-xs mb-8">
                                {item.linkSummary}
                            </p>
                            <Link to={`#`} className="flex items-center text-blue-600">
                                {item.ctaLabel} <BsChevronRight />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default MenuList