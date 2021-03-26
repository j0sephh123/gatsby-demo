import React from "react"
import {Link} from 'gatsby'
import {useAllCountries} from '../hooks/useAllCountries'

const About = () => {
	const {totalCount, nodes} = useAllCountries()

	return (
		<main>
			<div>totalCount: {totalCount}</div>
			<div>
				{nodes.map(({name, app_name, code}) => (
					<Link key={name} to={`/countries/${code}`}>{name}</Link>
				))}
			</div>
		</main>
	)
}

export default About
