import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookDetails extends React.Component {

	static propTypes = {
		bookTitle: PropTypes.string.isRequired
	}

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