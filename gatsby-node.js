const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Przekształca ścieżki /img/*.jpg w polach frontmatter na powiązania
// z węzłami File (klucz ___NODE), dzięki czemu dostępne są childImageSharp
// oraz gatsbyImageData z gatsby-plugin-image.
function remapFrontmatterImages(frontmatter, files) {
  if (!frontmatter || typeof frontmatter !== 'object') return

  const walk = value => {
    if (Array.isArray(value)) {
      value.forEach(walk)
      return
    }
    if (value && typeof value === 'object') {
      Object.keys(value).forEach(key => {
        const v = value[key]
        if (typeof v === 'string' && v.startsWith('/img/')) {
          const target = v.replace(/^\/img\//, '')
          const file = files.find(f => f.relativePath === target)
          if (file) {
            value[`${key}___NODE`] = file.id
            delete value[key]
          }
        } else {
          walk(v)
        }
      })
    }
  }

  walk(frontmatter)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    throw new Error('Error while creating pages')
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      context: {
        id
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const files = getNodes().filter(n => n.internal.type === `File`)
    remapFrontmatterImages(node.frontmatter, files)
    if (process.env.DEBUG_NODE) console.log("FM after remap:", JSON.stringify(node.frontmatter).slice(0, 200))

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
