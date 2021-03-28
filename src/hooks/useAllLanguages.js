import {useStaticQuery, graphql} from "gatsby"

export const useAllLanguages = () => {
	const result = useStaticQuery(
		graphql`
      query allLanguages {
				allMarkdownRemark {
					nodes {
						frontmatter {
							slug
							title
						}
					}
				}
			}
    `
	)
	return result.allMarkdownRemark
}