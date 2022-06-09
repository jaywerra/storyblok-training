import React from 'react';
import { 
    FaChevronDown,
    // FaChevronUp,
} from 'react-icons/fa';

export const NavData = [
    {
        linkLabel: "Product",
        linkHref: "#",
        icon: <FaChevronDown />,
        subNav: [
            {
                linkLabel: "Features",
                linkHref: "/features/",
            },
            {
                linkLabel: "Industries",
                linkHref: "/features/",
            },
        ],
    },
    {
        linkLabel: "Company",
        linkHref: "#",
        icon: <FaChevronDown />,
        subNav: [
            {
                linkLabel: "Customer Success",
                linkHref: "/",
            },
            {
                linkLabel: "Partners",
                linkHref: "/",
            },
        ],
    },
    {
        linkLabel: "Case Studies",
        linkHref: "#",
        icon: <FaChevronDown />,
    },
    {
        linkLabel: "Contact us",
        linkHref: "/contact/",
    },
];