import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'



class BookDetails extends React.Component {
	 render() {
	 	const {bookTitle} = this.props
	 	return (
	 		 <div className="list-books-content">
	 		 <Link className="close-search" to="/">Home</Link>
		              <div className="bookshelf">
              				<h1 className="bookshelf-title">{bookTitle}</h1>
			        </div>
	        	</div>
	 	)
	 }
}


export default BookDetails