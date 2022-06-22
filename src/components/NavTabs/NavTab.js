import React from 'react';
import uniqueId from 'uniqid';

const NavTab = ({ label }) => {
  return (
    <li className="navtab" key={uniqueId('sb')}>
        {label}
    </li>
  )
}

export default NavTab;
