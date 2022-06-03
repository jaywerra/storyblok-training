const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

  // querying the storyblok data from GraphQL data layer
  const { data } = await graphql(
    `query {
      allStoryblokEntry {
        edges {
          node {
            id
            full_slug
          }
        }
      }
    }`
  )

  // creating pages using createPage function like described in the documentation
  // https://www.gatsbyjs.org/docs/programmatically-create-pages-from-data/#creating-pages
  data.allStoryblokEntry.edges.forEach(edge => {
    const full_slug = edge.node.full_slug

    actions.createPage({
      path: full_slug,
      component: storyblokEntry,
      context: {
        slug: full_slug
      },
    })
  })
}