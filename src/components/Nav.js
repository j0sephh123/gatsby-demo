import React from 'react'
import { Link } from 'gatsby'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// {/*<AniLink cover*/}
// {/*				 to="/"*/}
// {/*				 direction="left"*/}
// {/*				 duration={1}*/}
// {/*				 bg="*/}
// {/*							url(https://source.unsplash.com/random)*/}
// {/*							center / cover   /* position / size */*/}
// 	{/*							no-repeat        /* repeat */*/}
// 		{/*							fixed            /* attachment */*/}
// 			{/*							padding-box      /* origin */*/}
// 				{/*							content-box      /* clip */*/}
// 					{/*							white            /* color */*/}
// 						{/*				">Index</AniLink>*/}
// 						{/*<AniLink swipe direction="down" to="/about">About</AniLink>*/}
//						{/*<AniLink paintDrip to="/partners">Partners</AniLink>*/}

const Nav = () => {
	return (
		<div className='Nav'>


			<Link to="/">Index</Link>
			<Link to="/about">About</Link>
			<Link to="/partners">Partners</Link>
		</div>
	)
}

export default Nav