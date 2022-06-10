import React, { useState } from 'react'

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
        <div className="flex w-full">
            <div className="tabsctas pr-8 w-1/4 border-r border-solid border-slate-200">
                <h2 className="bg-blue-100 text-blue-500 inline-block mb-6 p-3">
                    {navHeadingTitle}
                </h2>
                <ul>
                    {children.map(tab => {
                        const label = tab.props.label;
                        return (
                            <li
                                className={`${label === activeTab ? "text-blue-600" : ""} mb-3`}
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
            <div className="panels w-3/4 pl-12">
                {children.map(one => {
                    if (one.props.label === activeTab) {
                        return (
                            <div
                                key={one.props.label}
                                className="tab-panel"
                            >
                                {one.props.children}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default NavTabs