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

	searchBooks(query, resultLimit=40, library) {
		this.setState({query: query})
		if(query === undefined || query === "") {
			return this.setState({query: "", results: []})
		}
		setTimeout(() => {
				// send a resultLimit for specific # of results returned
				BooksAPI.search(query, resultLimit)
					.then((results) => {
						
						// filtered results
						let filteredResults
						for(let i = 0; i < library.length; i++) {
							filteredResults =  results.filter((book) => {
								return book.id !== library[i].id
							})
						}
						console.log(filteredResults.map((book) => (book.id)))
						// handles empty query or undefined response
						if(results === undefined || results.error === 'empty query') {
							return this.setState({results: []})
						}
						// set the results in state to the response
						// console.log(filteredResults)
						return this.setState({results: filteredResults})
					})
			}, 800)
	}

	clearSearch = (query) => {
		this.setState({query: "", results: []})
	}
	
	render() {
		// get variables from props and state
		const {moveBook, library} = this.props
		const {query, results} = this.state
		// console.log(library)
		// filter out results
		// let filteredResults
		let librarycontent
		if(!results || !query) {
			librarycontent = []
		} else {
			// filter results so it doesn't contain library books already on shelf
			// filteredResults = results.filter((book) => {
			// 	for(let i = 0; i < library.length; i++) {
			// 		if(book.id !== library[i].id) {
			// 			return book
			// 		}
			// 	}
			// })
			librarycontent = results.map((book, index) => {
				// image handles undefined values return
				return <Book author={book.authors} image={book.imageLinks === undefined ? "" : book.imageLinks.thumbnail} title={book.title} key={book.id + index} optionState={book.shelf} id={book.id} moveBook={moveBook}/>
			})
		}
		
		return (
			<div className="search-books">
				 <div className="search-books-bar">
			          <Link className="close-search" to="/">Close</Link>
			          <div className="search-books-input-wrapper">
			            <input type="text" 
			              placeholder="search for books" 
			              value={query}
			              onChange={(e)=> this.searchBooks(e.target.value, 30, library)}
			             />
			          </div>
			        </div>
				<div className="search-books-results">
						{librarycontent.length > 0 && ( <div className="showing-books"><span>Showing <strong>{results.length}</strong> total results</span>
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