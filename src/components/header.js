import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="header py-6">
      <div className="px-4 lg:px-0 lg:container lg:mx-auto">
        <Link
          to={`/`}
          className="logo px-8 py-3 bg-blue-500 text-white uppercase"
        >
          Logo
        </Link>
      </div>
    </header>
  )
}

export default Header;