import React from "react"
import Nav from './Nav'
import './Layout.scss'

const Layout = ({ children }) => {
	return (
		<div className='Layout'>
			<Nav />
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout