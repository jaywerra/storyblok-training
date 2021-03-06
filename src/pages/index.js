import React from 'react';
import { graphql } from 'gatsby';
import { sbEditable } from '@storyblok/storyblok-editable';
import DynamicComponent from '../components/DynamicComponent';
import Layout from '../components/Layout/Layout';
import useStoryblok from "../lib/storyblok";

const IndexPage = ({ data, location }) => {
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

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`