import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata'

const Partners = () => {
	const {title, description, something_from_me} = useSiteMetadata()

	return (
		<div>
			<div>
				<h2>Site metadata</h2>
				<div>title: {title}</div>
				<div>description: {description}</div>
				<div>something_from_me: {something_from_me}</div>
			</div>

		</div>
	)
}

export default Partners