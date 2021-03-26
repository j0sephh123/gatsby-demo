# Gatsby

## Installation
`npm install -g gatsby-cli`  
`npm init gatsby`  
`npm run develop`

`npm i gatsby-transformer-json`
`npm i gatsby-source-filesystem`

Copy this in index.js to reset all
```jsx
import * as React from "react"

const Index = () => {
	return (
			<main>
				Hello World
			</main>
	)
}

export default Index

```

[http://localhost:8000/](http://localhost:8000/)

## Layout

Create a standard layout component as one would do in **creact-react-app**

`components/layout.js`
```jsx
import React from "react"

const Layout = ({ children }) => {
	return (
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`, backgroundColor: 'gainsboro' }}>
			{children}
		</div>
	)
}

export default Layout
```
This approach is not optimal, since it will unmount on every page change
Gatsby does not, by default, automatically wrap pages in a layout component. The “top level” component is the page itself. As a result, when the “top level” component changes between pages, React will re-render all children. This means that shared components like navigations will unmount and remount.

Then what is the suggested approach?

Use gatsby api's, create  
`gatsby-browser.js`
```js
import React from 'react'
import Layout from './src/components/Layout'

export const WrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}
```

Now, the result is the same, but it doesn't unmount..

## Navigation
Using gatsby link component, nothing interesting here, we can notice that the layout component doesn't unmount here.  
`components/Nav.js`
```js
import React from 'react'
import {Link} from 'gatsby'

const Nav = () => {
	return (
		<div>
			<Link to="/">Index</Link>{" "}
			<Link to="/about">about</Link>
		</div>
	)
}

export default Nav
```

`components/Layout.js`
```jsx
import React from "react"
import Nav from './Nav'

const Layout = ({ children }) => {
	return (
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`, backgroundColor: 'gainsboro' }}>
			<Nav />
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout
```

### Adding Page Transitions
[Anilink](https://transitionlink.tylerbarnes.ca/docs/anilink/)  
`npm install gatsby-plugin-transition-link --force`  
`npm install gsap`

`gatsby-config.js`
```js
module.exports = {
    plugins: [
      `gatsby-plugin-transition-link`
    ]
];
```
Also, create a third page `pages/partners.js` to demonstrate different transitions
```jsx
import React from 'react';

const Partners = () => {
	return (
		<div>
			Partners
		</div>
	)
}

export default Partners
```

`components/Nav.js`
```jsx
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = () => {
	return (
		<div className='Nav'>
			<AniLink cover
							 to="/"
							 direction="left"
							 duration={3}
							 bg="
										url(https://source.unsplash.com/random)
										center / cover   /* position / size */
										no-repeat        /* repeat */
										fixed            /* attachment */
										padding-box      /* origin */
										content-box      /* clip */
										white            /* color */
  						">Index</AniLink>
			<AniLink swipe direction="up" to="/about">About</AniLink>
			<AniLink paintDrip to="/partners">Partners</AniLink>
		</div>
	)
}

export default Nav
```

## Adding Sass
`npm install sass gatsby-plugin-sass`   
add to plugins `gatsby-plugin-sass`

`src/styles/styles.scss`
```scss
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system;
}

.Button {
  color: purple;
  background-color: lightskyblue;
  padding: 16px;
  border-radius: 8px;
  width: 120px;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
}
```  

`gatsby-browser.js` don't forget to import it there

`Layout.scss`
```scss
.Layout {
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  background-color: #fefefe;
  .Nav {
    margin: 8px 0;
    padding: 8px 0;
    background-color: lightblue;
    a {
      padding: 0 16px;
    }
  }
}
```

also, import in `Layout.js`


## GraphqQL basic query
[http://localhost:8000/___graphql](http://localhost:8000/___graphql)

- display sitemetadata
- list all files lets say

add this to `gatsby-config.js`
```js  
siteMetadata: {
    title: "My Gatsby Site",
    description: "Some description",
    something_from_me: "This is from me"
},
```

This is the graphql query, nothing interesting
```gql
query siteMetadata {
  site {
    siteMetadata {
      title
      description
      something_from_me
    }
  }
}
```

`src/hooks/useSiteMetadata.js`
```js
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
```

`src/pages/partners.js`
```js
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
```

## create a few pages programatically from an array


## Markdown stuff