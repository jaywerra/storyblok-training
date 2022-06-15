import { Link } from 'gatsby'
import React from 'react'

const MenuWithImage = ({
    linkLabel,
    linkHref,
}) => {
  return (
    <li className="mb-3">
        <Link
            to={linkHref}
            className="uppercase hover:underline text-inherit hover:text-blue-600"
        >
            {linkLabel}
        </Link>
    </li>
  )
}

export default MenuWithImage