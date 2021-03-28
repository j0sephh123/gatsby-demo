const countries = require('./src/data/countries.json');

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions

	// Pages from a local json file
	countries.forEach(({ name, app_name, code }) => {
		createPage({
			path: `/countries/${code}`,
			component: require.resolve('./src/templates/Country.js'),
			context: {
				app_name,
				name,
				code,
			}
		})
	})

	// Pages from markdown files
	const LanguageTemplate = require.resolve(`./src/templates/Language.js`)

	const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
					frontmatter {
						slug
						title
          }
          html
        }
      }
    }
  `)

	result.data.allMarkdownRemark.nodes.forEach((node) => {
		createPage({
			path: node.frontmatter.slug,
			component: LanguageTemplate,
			context: {
				title: node.frontmatter.title,
				html: node.html,
			},
		})
	})
}

