import {useStaticQuery, graphql} from "gatsby"

export const useAllCountries = () => {
	const result = useStaticQuery(
		graphql`
      query allCountries {
				allCountriesJson {
					totalCount
					nodes {
						name
						app_name
						code
					}
				}
			}
    `
	)
	return result.allCountriesJson
}