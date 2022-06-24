import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const NavTabs = ({
    children,
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
            className="md:flex w-full py-8 px-4 md:py-4 md:px-0 bg-slate-300 md:bg-white"
        >
            <div
                className="tabs-controls md:pr-8 md:w-1/4 md:border-r border-solid border-slate-200"
            >
                <ul>
                    {children.map(tab => {
                     
                        if (!tab.props.pageLink) {
                            return (
                                <li
                                    className={`${tab.props.label === activeTab ? "text-blue-600" : ""} mb-4 first:bg-blue-100 first-of-type:inline-block first:p-4 hover:underline first:hover:no-underline`}
                                    key={tab.props.label}
                                >
                                    <button
                                        onClick={(e) => handleClick(e, tab.props.label)}
                                        className="uppercase text-inherit tracking-widest"
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
                                    className={`hover:underline text-inherit hover:text-blue-600`}
                                >
                                    {tab.props.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <>
                {children.map(one => {
                    if (one.props.label === activeTab && one.props.pageLink.length === 0) {
                        return (
                            <motion.div
                                key={one.props.label}
                                className="tab-panel md:flex md:px-8 md:w-3/4"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{ 
                                    ease: "easeInOut", 
                                    duration: 0.35 
                                }}
                            >
                                {one.props.content}
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </>
        </div>
    )
}

export default NavTabs;
