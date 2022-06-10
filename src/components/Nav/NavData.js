import React from 'react';
import { 
    FaChevronDown,
    // FaChevronUp,
} from 'react-icons/fa';
import MenuList from '../MenuList/MenuList';

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
                component: <MenuList />,
            },
            {
                linkLabel: "Index-Free Architecture",
                linkHref: "#",
                component: "Component 2",
            },
            {
                linkLabel: "Integration / APIs",
                linkHref: "#",
                component: "Component 3",
            },
            {
                linkLabel: "Sub-second Searches",
                linkHref: "#",
                component: "Component 4",
            },
        ],
    },
    {
        linkLabel: "Pricing",
        linkHref: "#",
        icon: <FaChevronDown />,
    },
    {
        linkLabel: "Solutions",
        linkHref: "#",
        icon: <FaChevronDown />,
        title: 'Solutions',
        subNav: [
            {
                linkLabel: "For DevOps",
                linkHref: "/",
            },
            {
                linkLabel: "For ITOps",
                linkHref: "/",
            },
            {
                linkLabel: "For SecOps",
                linkHref: "/",
            },
            {
                linkLabel: "By Industry",
                linkHref: "/",
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
                linkLabel: "News",
                linkHref: "/",
            },
            {
                linkLabel: "Press Releases",
                linkHref: "/",
            },
            {
                linkLabel: "Partners",
                linkHref: "/",
            },
            {
                linkLabel: "Careers",
                linkHref: "/",
            },
            {
                linkLabel: "FAQs",
                linkHref: "/",
            },
        ],
    },
    {
        linkLabel: "Customers",
        linkHref: "#",
        icon: <FaChevronDown />,
    },
    {
        linkLabel: "Learn",
        linkHref: "#",
        title: 'Learn',
        subNav: [
            {
                linkLabel: "Blogs",
                linkHref: "/",
            },
            {
                linkLabel: "Glossary",
                linkHref: "/",
            },
            {
                linkLabel: "Guides",
                linkHref: "/",
            },
            {
                linkLabel: "The Nest",
                linkHref: "/",
            },
            {
                linkLabel: "Resources",
                linkHref: "/",
            },
            {
                linkLabel: "Events",
                linkHref: "/",
            },
            {
                linkLabel: "Customer Success",
                linkHref: "/",
            },
        ],
    },
];