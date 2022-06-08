import React from 'react';
import { graphql } from 'gatsby';
import { sbEditable } from '@storyblok/storyblok-editable';
import DynamicComponent from '../components/DynamicComponent';
import Layout from '../components/Layout/Layout';
import useStoryblok from "../lib/storyblok";

const StoryblokEntry = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        <h1>{story.content.title}</h1>
        {components}
      </div>
    </Layout>
  )
}

export default StoryblokEntry;

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      id
      name
      full_slug
      content
    }
  }
`