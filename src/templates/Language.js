import React from "react"

const Language = ({pageContext}) => {
	const {title, html} = pageContext;

	return (
		<div>
			<h3>Title {title}</h3>
			<div dangerouslySetInnerHTML={{__html:html}}></div>
		</div>
	)
}

export default Language