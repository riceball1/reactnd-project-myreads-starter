import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends React.Component {

	static propTypes = {
	    books: PropTypes.array.isRequired
	  }

	render() {
		const {books, moveBook} = this.props
		let booksList = books.map((book, index) => {
			return (
				<li key={book.title+index}>
					<Book author={book.authors} image={book.imageLinks.thumbnail}  key={book.id} title={book.title} id={book.id} optionState={book.shelf} moveBook={moveBook}/>
				</li>
			)
		})

		return (
			
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksList}
                </ol>
              </div>
           
		)
	}
}

export default Shelf