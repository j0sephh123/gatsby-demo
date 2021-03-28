module.exports = {
	siteMetadata: {
		title: "My Gatsby Site",
		description: "Some description",
		something_from_me: "This is from me"
	},
	plugins: [
		"gatsby-transformer-json",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: 'countriesList',
				path: "./src/data/",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: 'mdxPages',
				path: "./src/data/md",
			},
		},
		"gatsby-plugin-transition-link",
		{
			resolve: "gatsby-plugin-sass",
		}
	],
};
