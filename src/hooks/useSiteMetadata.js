import {useStaticQuery, graphql} from "gatsby"

export const useSiteMetadata = () => {
	const result = useStaticQuery(
		graphql`
      query siteMetadata {
				site {
					siteMetadata {
						title
						description
						something_from_me
					}
				}
			}
    `
	)
	return result.site.siteMetadata
}