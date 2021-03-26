import React from 'react';

const Country = ({ pageContext }) => {
	const {app_name, name} = pageContext;
	return (
		<div>
			<div>name: {name}</div>
			<div>app_name: {app_name}</div>
		</div>
	)
}

export default Country;