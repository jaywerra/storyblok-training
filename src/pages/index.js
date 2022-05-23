import React from 'react';
import { graphql } from 'gatsby';
import { sbEditable } from '@storyblok/storyblok-editable';
import DynamicComponent from '../components/dynamicComponent';

const IndexPage = ({
		data,
	}) => {

	const story = data.story;
	story.content = JSON.parse(story.content);
	console.log(story);

	const components = story.content.body.map(blok => {
		return (<DynamicComponent blok={blok} key={blok._uid} />)
	})

	return (
		<>
		<div {...sbEditable(story.content)}>
			<h1>{story.content.title}</h1>
			{components}
		</div>
		</>
	)
}

export default IndexPage;

export const query = graphql`
	{  
		story: storyblokEntry {
			name
			content
			full_slug
			uuid
			id
		}
	}
`;
