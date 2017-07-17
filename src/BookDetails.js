import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookDetails extends React.Component {
	// store the book information in state
	state = {
		bookId: this.props.match.params.bookId,
		bookObj: {}
	}

	// get the information for the book
	componentDidMount() {
		// get book info here
		BooksAPI.get(this.state.bookId)
			.then((book) => {
				return this.setState({bookObj: book})
			})
			.catch(error => {
				console.log(error)
			})
	}
	

	render() {
		const { bookObj } = this.state
		let image = ""
		let authors = ""
		// assign variables once the bookObj is no longer empty
		if(Object.keys(bookObj).length !== 0) {
			image = bookObj.imageLinks? bookObj.imageLinks.thumbnail : ""
			authors = bookObj.authors.map((author, index) => {
				return (<li key={index}>{author}</li>)
			})
		}
		
		return (
			<div className="bookdetail-content">
	 		 <Link className="close-search" to="/">Home</Link>
	 		 	<div className="bookshelf">
					<h1 className="bookdetail-title">{bookObj.title}</h1>
					<h3>{bookObj.subtitle}</h3>
					<div className="book-details">
					<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${image}")` }}></div>
					<p> <strong>Authors:</strong> </p>	
					<ul>{authors}</ul>
					<p><strong>Description:</strong> {bookObj.description}</p>
					<p><strong>Page Count:</strong> {bookObj.pageCount}</p>
					<p><strong>Publisher:</strong> {bookObj.publisher}</p>
					<p> <strong>Published Date:</strong> {bookObj.publishedDate}</p>
				</div>
				</div>
				
			 </div>
		 )
	}
}


export default BookDetails