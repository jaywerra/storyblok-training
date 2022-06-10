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
        title: 'Platform Features',
        subNav: [
            {
                linkLabel: "Scalability",
                linkHref: "#",
            },
            {
                linkLabel: "Index-Free Architecture",
                linkHref: "#",
            },
            {
                linkLabel: "Integration / APIs",
                linkHref: "#",
            },
            {
                linkLabel: "Sub-second Searches",
                linkHref: "#",
            },
        ],
    },
    {
        linkLabel: "Company",
        linkHref: "#",
        icon: <FaChevronDown />,
        title: 'About Us',
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