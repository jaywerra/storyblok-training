import React from 'react';
import { Link } from 'gatsby';
import { BsChevronRight } from 'react-icons/bs';
import imageOne from '../../images/menu-fpo-img.png';

const MenuList = ({
    itemTitle,
    imagePath,
    imageAltText,
    linkSummary,
    readMoreLabel,
}) => {
    return (
        
        <li key={itemTitle} className="md:w-1/3 flex flex-col">
            <div className="hidden md:block thumbnail">
                <img src={imagePath} alt={imageAltText} />
            </div>
            <div>
                <Link to="#" className="block my-3 text-blue-600 md:text-center text-lg">
                    {itemTitle}
                </Link>
                <p className="text-xs mb-8">
                    {linkSummary}
                </p>
            </div>
            <Link to={`#`} className="flex mt-auto items-center text-blue-600">
                {readMoreLabel} <BsChevronRight />
            </Link>
        </li>
       
    )
}

export default MenuList;
