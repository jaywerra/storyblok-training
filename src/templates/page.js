import React from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';
import DynamicComponent from '../components/DynamicComponent';
import Layout from '../components/Layout/Layout';
import useStoryblok from "../lib/storyblok";

const Page = ({ pageContext, location }) => { 
  let story = pageContext.story;
  story = useStoryblok(story, location);

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

export default Page;
