import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const NavTabs = ({
    children,
    navHeadingTitle,
    label,
    pageLink,
    content,
}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };
    
    return (
        <div
            className="md:flex w-full p-4 bg-slate-300 md:bg-white"
        >
            <div className="tabsctas md:pr-8 md:w-1/4 md:border-r border-solid border-slate-200">
                <h2 className="bg-blue-100 text-blue-500 inline-block mb-6 p-3">
                    {navHeadingTitle}
                </h2>
                <ul>
                    {children.map(tab => {
                        {console.log('Tab Link', tab.props.pageLink)}
                        if (!tab.props.pageLink) {
                            return (
                                <li
                                    className={`${tab.props.label === activeTab ? "text-blue-600" : ""} mb-4`}
                                    key={tab.props.label}
                                >
                                    <button
                                        onClick={(e) => handleClick(e, tab.props.label)}
                                        className="uppercase hover:underline text-inherit hover:text-blue-600 tracking-widest"
                                    >
                                        {tab.props.label}
                                    </button>
                                </li>
                            )
                        }
                        return (
                            <li
                                className="mb-4"
                                key={tab.props.label}
                            >
                                <Link
                                    to={tab.props.pageLink}
                                    className="hover:underline text-inherit hover:text-blue-600"
                                >
                                    {tab.props.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="panels md:w-3/4 md:pl-8">
                {children.map(one => {
                    if (one.props.label === activeTab && one.props.pageLink.length === 0) {
                        return (
                            <div
                                key={one.props.label}
                                className="tab-panel"
                            >
                                <div className="flex">
                                    {one.props.content}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default NavTabs;
