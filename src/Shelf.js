import React from 'react'
import Book from './Book'

class Shelf extends React.Component {


	render() {
		

		const {books} = this.props
		let booksList = books.map((book, index) => {
			return (
				<li key={book.title+index}>
					<Book author={book.authors} imageURL={book.imageURL}  key={book.author+index}/>
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