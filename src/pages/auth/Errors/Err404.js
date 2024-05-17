import React from 'react'
import { Link } from 'react-router-dom'

export default function Err404() {
  return (
	<section className="page_404">
	<div className="container">
	  <div className="row">
		<div className="col-sm-12 text-center">
		  <div className="four_zero_four_bg"/>
		  <div className="content_box_404">
			<h3>Oops! Page not found 404</h3>
			<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
			<Link to="/" className="link_404">GO TO HOME PAGE</Link>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  )
}
