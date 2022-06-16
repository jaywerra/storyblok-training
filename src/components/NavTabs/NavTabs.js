import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavTabs = ({
    children,
    navHeadingTitle,
}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };
    
    return (
        <div className="md:flex w-full p-4 bg-slate-300 md:bg-white">
            <div className="tabsctas md:pr-8 md:w-1/4 md:border-r border-solid border-slate-200">
                <h2 className="bg-blue-100 text-blue-500 inline-block mb-6 p-3">
                    {navHeadingTitle}
                </h2>
                <ul>
                    {children.map(tab => {
                        const label = tab.props.label;
                        return (
                            <li
                                className={`${label === activeTab ? "text-blue-600" : ""} mb-4`}
                                key={label}
                            >
                                <button
                                    onClick={(e) => handleClick(e, label)}
                                    className="uppercase hover:underline text-inherit hover:text-blue-600"
                                >
                                    {label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="panels md:w-3/4 md:pl-8">
                {children.map(one => {
                    if (one.props.label === activeTab) {
                        return (
                            <motion.div
                                key={one.props.label}
                                className="tab-panel"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{ 
                                    ease: "easeInOut", 
                                    duration: 0.75 
                                }}
                            >
                                {one.props.children}
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default NavTabs