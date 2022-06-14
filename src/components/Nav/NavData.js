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
                component: "",
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
                linkLabel: "Press Releases",
                linkHref: "/",
                component: "",
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
                linkLabel: "Partners",
                linkHref: "/",
                component: "",
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
                linkLabel: "Careers",
                linkHref: "/",
                component: "",
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
                component: "",
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
                component: "",
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
                linkLabel: "Glossary",
                linkHref: "/",
                component: "",
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
                linkLabel: "Guides",
                linkHref: "/",
                component: "",
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
                linkLabel: "The Nest",
                linkHref: "/",
                component: "",
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
                component: "",
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
                linkLabel: "Events",
                linkHref: "/",
                component: "",
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
                linkLabel: "Customer Success",
                linkHref: "/",
                component: "",
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
];