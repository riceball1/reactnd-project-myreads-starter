import React from 'react'
// import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Searchlibrary extends React.Component {
	state = {
		library: [],
		query: ""
	}

	// static propTypes = {
	// 	// add proptypes for this.props
	// }

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({library: this.state.library.concat(books)})
		})
	}

	searchBooks(query) {
		this.setState({query: query})
	}

	clearSearch = (query) => {
		this.setState({query: ""});
	}

	render() {
		const {library, query} = this.state
		let showingBooks;
		if (query) {
			// match query
			const match = new RegExp(escapeRegExp(query), 'i');
			// filter by testing that the library.title matches the query
			showingBooks = library.filter((book) => match.test(book.title));
		} else {
			showingBooks = library;
		}

		// ABC order books
		showingBooks.sort(sortBy('title'));

		let librarycontent = showingBooks.map((book, index) => (
			<Book author={book.authors.join(',\n ')} image={""} title={book.title} key={index} />
		))
		return (
			<div className="search-books">
				 <div className="search-books-bar">
			          <Link className="close-search" to="/">Close</Link>
			          <div className="search-books-input-wrapper">
			            <input type="text" 
			              placeholder="Search by title or author" 
			              value={query}
			              onChange={(e)=> this.searchBooks(e.target.value)}/>
			          </div>
			        </div>
				<div className="search-books-results">
						{showingBooks.length !== library.length && ( <div className="showing-books"><span>Now showing <strong>{showingBooks.length}</strong> out of <strong>{library.length}</strong> total</span>
							<br/>
						<button onClick={this.clearSearch}>show entire library</button>
						</div>
					)}
					 
	                	<ol className="books-grid">
	            		{librarycontent}
	            		</ol>
            
            	</div>
			</div>
		)
	}
}

export default Searchlibrary