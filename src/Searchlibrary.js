import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class Searchlibrary extends React.Component {
	state = {
		query: "",
		results: []
	}

	static propTypes = {
		moveBook: PropTypes.func.isRequired
	}

	searchBooks(query) {
		/** 
			1) issue after clearing or searching for an item that cannot be found:
				example: bekey
				Uncaught (in promise) TypeError: Cannot read property 'thumbnail' of undefined
			    at http://localhost:3000/static/js/bundle.js:37184:106
			    at Array.map (native)
			    at Searchlibrary.render 
			2) Cannot search for names like 'Game On' sends back empty query error

		**/
		this.setState({query: query})
		if(query === undefined || query === "") {
			return this.setState({query: "", results: []})
		}

		BooksAPI.search(query, 20).then((res) => {
			if(res === undefined || res.error === 'empty query') {
				return this.setState({results: []})
			}
			return this.setState({results: res})
		})
		
	}

	clearSearch = (query) => {
		this.setState({query: "", results: []})
	}
	
	render() {
		const {moveBook} = this.props
		const {query, results} = this.state
		
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
			              placeholder="search for books" 
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