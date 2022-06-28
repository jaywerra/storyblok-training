import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="py-6">
      <div className="relative px-4 lg:px-0 lg:container lg:mx-auto z-10">
        <div className="flex justify-between items-center">
          <Link
            to={`/`}
            className="px-8 py-3 bg-blue-500 font-inter text-white tracking-widest uppercase"
          >
            Logo
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;