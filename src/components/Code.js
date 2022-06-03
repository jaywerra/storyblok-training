import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Code = ({ blok }) => {
	console.log(blok);
	
	useEffect(() => {
		Prism.highlightAll();
	})

	return (
		<div className="px-4 lg:px-0 lg:container lg:mx-auto py-4">
			<pre>
				<code className={`language-${blok.language_selector}`}>
					{blok.code_block}
				</code>
			</pre>
		</div>
	)
}

export default Code;
