import React from 'react'
import Book from './Book'

class Shelf extends React.Component {


	render() {
		

		const {books} = this.props
		let booksList = books.map((book, index) => {
			console.log(book.imageLinks.thumbnail);
			return (
				<li key={book.title+index}>
					<Book author={book.authors} image={book.imageLinks.thumbnail}  key={book.author+index}/>
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