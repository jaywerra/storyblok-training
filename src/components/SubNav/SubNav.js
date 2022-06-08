import { Link } from 'gatsby';
import React from 'react';

const SubNav = ({
	linkLabel,
	linkUrl,
}) => {
	return (
		<li>
			<Link to={linkUrl}>
				{linkLabel}
			</Link>
		</li>
	)
}

export default SubNav;