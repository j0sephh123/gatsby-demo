import React from 'react'
import Layout from './src/components/Layout'
import './src/styles/styles.scss'

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}
