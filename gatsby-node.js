
const countries = require('./src/data/countries.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions

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
}

