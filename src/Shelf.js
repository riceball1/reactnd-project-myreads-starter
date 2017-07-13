import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends React.Component {

	static propTypes = {
	    books: PropTypes.array.isRequired
	  }


	render() {
		const {books} = this.props
		let booksList = books.map((book, index) => {
			return (
				<li key={book.title+index}>
					<Book author={book.authors} image={book.imageLinks.thumbnail}  key={book.author+index} title={book.title}/>
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