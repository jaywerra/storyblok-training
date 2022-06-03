import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500">
        <div className="mt-12 py-8 lg:py-12 px-4 lg:px-0 lg:container lg:mx-auto ">
            <Link
                to="/"
                className="px-8 py-3 bg-white font-inter text-blue-500 tracking-widest uppercase"
            >
                Logo
            </Link>
        </div>
    </footer>
  )
};

export default Footer;