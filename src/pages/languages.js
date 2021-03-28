import React from "react"
import {Link} from 'gatsby'
import {useAllLanguages} from '../hooks/useAllLanguages'

const Languages = () => {
	const {nodes} = useAllLanguages()

	return (
		<main>
			{nodes.map(({ frontmatter: {slug,title} }) => (
				<Link key={slug} to={slug}>
					{title}
				</Link>
			))}
		</main>
	)
}

export default Languages
