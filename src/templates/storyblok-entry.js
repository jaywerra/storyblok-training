// import React from 'react'
// import { graphql } from 'gatsby'

// export default function StoryblokEntry({ data }) {
//   let story = data.storyblokEntry

//   return <div>{story.name}</div>
// }

// export const query = graphql`
//   query ($full_slug: String!) {
//     storyblokEntry(full_slug: { eq: $full_slug }) {
//       id
//       name
//       full_slug
//     }
//   }
// `