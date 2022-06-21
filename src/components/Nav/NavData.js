import React from 'react';
import { 
    FaChevronDown,
    // FaChevronUp,
} from 'react-icons/fa';
import MenuList from '../MenuList/MenuList';
import imageOne from '../../images/menu-fpo-img.png';
import imageTwo from '../../images/menu-fpo-blue-img.png';

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
                component: 'menuList',
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
                component: 'menuWithImage',
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C2 - XXXX",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C2 - Observability",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C2 - XXXX",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C2 - Observability",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        linkHref: "#",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    }
                ],
            },
            {
                linkLabel: "Integration / APIs",
                linkHref: "#",
                component: 'menuList',
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
                        imagePath: imageTwo,
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
                component: 'menuList',
                subNavItems: [
                    {
                        linkLabel: "C4 - XXXX",
                        imagePath: imageTwo,
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
                        imagePath: imageTwo,
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
        linkHref: "/pricing",
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
                component: 'menuList',
                subNavItems: [
                    {
                        linkLabel: "C1 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C1 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C1 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "For ITOps",
                linkHref: "/",
                component: 'menuList',
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
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "For SecOps",
                linkHref: "/",
                component: 'menuList',
                subNavItems: [
                    {
                        linkLabel: "C3 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
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
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "By Industry",
                linkHref: "/",
                component: 'menuList',
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
        linkLabel: "Company",
        linkHref: "#",
        icon: <FaChevronDown />,
        title: 'About Us',
        subNav: [
            {
                linkLabel: "News",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C1 - XXXX",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C1 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C1 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Press Releases",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageOne,
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
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Partners",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C3 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
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
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Careers",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageOne,
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
            {
                linkLabel: "FAQs",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C5 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C5 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C5 - Enterprise",
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
                component: "menuWithImage",
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C1 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C1 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C1 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Glossary",
                linkHref: "/",
                component: "menuList",
                subNavItems: [
                    {
                        linkLabel: "C2 - XXXX",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C2 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C2 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Guides",
                linkHref: "/",
                component: "menuList",
                subNavItems: [
                    {
                        linkLabel: "C3 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
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
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "The Nest",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageOne,
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
            {
                linkLabel: "Resources",
                linkHref: "/",
                component: "menuWithImage",
                imagePath: imageTwo,
                subNavItems: [
                    {
                        linkLabel: "C5 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C5 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C5 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Events",
                linkHref: "/",
                component: "menuList",
                subNavItems: [
                    {
                        linkLabel: "C6 - XXXX",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C6 - Observability",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C6 - Enterprise",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
            {
                linkLabel: "Customer Success",
                linkHref: "/",
                component: "menuList",
                subNavItems: [
                    {
                        linkLabel: "C7 - XXXX",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
                        readMoreLabel: "Start for free",
                    },
                    {
                        linkLabel: "C7 - Observability",
                        imagePath: imageTwo,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "Download now",
                    },
                    {
                        linkLabel: "C7 - Enterprise",
                        imagePath: imageOne,
                        imageAltText: "Alt text",
                        linkSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        readMoreLabel: "View all",
                    }
                ],
            },
        ],
    },
];

