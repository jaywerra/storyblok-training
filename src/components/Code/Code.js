import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Code = ({ blok }) => {
	useEffect(() => {
		Prism.highlightAll();
	})

	return (
		<div className="px-4 lg:px-0 lg:container lg:mx-auto py-4">
			<h2>{blok.language_selector}</h2>
			<pre className={`language-${blok.language_selector}`}>
				<code className={`language-${blok.language_selector}`}>
					{blok.code_block}
				</code>
			</pre>
		</div>
	)
}

export default Code;
