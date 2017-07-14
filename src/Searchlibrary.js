import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Searchlibrary extends React.Component {
	state = {
		query: "",
		results: []
	}

	// static propTypes = {
	// 	library: PropTypes.array.isRequired
	// }

	// componentWillReceiveProps(nextProps) {
	// 	console.log('Searchlibrary updated', nextProps)
	// }

	searchBooks(query) {
		
		this.setState({query: query})
		if(query === undefined || query === "") {
			return this.setState({query: "", results: []})
		}

		BooksAPI.search(query, 20).then((res) => {
			console.log('bookapi results:', res)
			if(res === undefined || res.error === 'empty query') {
				return this.setState({results: []})
			}
			this.setState({results: res})
		})
		
	}

	clearSearch = (query) => {
		this.setState({query: "", results: []})
	}
	// something happens when searching for 'app' throws an error
	// in results.map below

	render() {
		const {moveBook} = this.props
		const {query, results} = this.state
		console.log('Searchlibrary', this.props)
		console.log('Searchlibrary', this.state)
		
		let librarycontent
		if(!results) {
			librarycontent = []
		} else {
			librarycontent = results.map((book, index) => (
				<Book author={book.authors} image={book.imageLinks.thumbnail} title={book.title} key={book.id + index} optionState={book.shelf} id={book.id} moveBook={moveBook}/>
			))
		}
	
		return (
			<div className="search-books">
				 <div className="search-books-bar">
			          <Link className="close-search" to="/">Close</Link>
			          <div className="search-books-input-wrapper">
			            <input type="text" 
			              placeholder="Search by title or author" 
			              value={query}
			              onChange={(e)=> this.searchBooks(e.target.value)}
			             />
			          </div>
			        </div>
				<div className="search-books-results">
						{results.length > 0 && ( <div className="showing-books"><span>Showing <strong>{results.length}</strong> total results</span>
							<br/>
						<button onClick={this.clearSearch}>clear search results</button>
						</div>
					)}
					 
					 {results.length === 0 && (<h1 className="showing-books">Keep Calm and Read On.</h1>)}
	                	<ol className="books-grid">
	            		{librarycontent}
	            		</ol>
            
            	</div>
			</div>
		)
	}
}

export default Searchlibrary