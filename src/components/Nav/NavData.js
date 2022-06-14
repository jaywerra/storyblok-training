import React from 'react';
import { 
    FaChevronDown,
    // FaChevronUp,
} from 'react-icons/fa';
import MenuList from '../MenuList/MenuList';
import imageOne from '../../images/menu-fpo-img.png';

export const NavData = [
    {
        linkLabel: "Platform",
        linkHref: "#",
        icon: <FaChevronDown />,
        title: 'Platform Features',
        subNav: [
            {
                linkLabel: "Scalability",
                linkHref: "#",
                component: <MenuList />,
                subNavItems: [
                    {
                        linkLabel: "C1 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    },
                    {
                        linkLabel: "C1 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C1 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    }
                ],
            },
            {
                linkLabel: "Index-Free Architecture",
                linkHref: "#",
                component: "Component 2",
                subNavItems: [
                    {
                        linkLabel: "C2 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C2 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    }
                ],
            },
            {
                linkLabel: "Integration / APIs",
                linkHref: "#",
                component: "Component 3",
                subNavItems: [
                    {
                        linkLabel: "C3 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    },
                    {
                        linkLabel: "C3 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C3 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    }
                ],
            },
            {
                linkLabel: "Sub-second Searches",
                linkHref: "#",
                component: "Component 4",
                subNavItems: [
                    {
                        linkLabel: "C4 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C4 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C4 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
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