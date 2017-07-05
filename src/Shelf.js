import React from 'react'
import Book from './Book'

class Shelf extends React.Component {


	render() {
		var listOfBooks = [
				{author: 'Harper Lee', title: 'To Kill a Mockingbird', imageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
				{author: 'Orson Scott Card', title: "Ender's Game", imageURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"}
			]
		var books = listOfBooks.map((book, index) => {
			return (
				<li key={book.title+index}>
					<Book author={book.author} imageURL={book.imageURL}  key={book.author+index}/>
				</li>
			)
		})

		return (
			
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books}
                </ol>
              </div>
           
		)
	}
}

export default Shelf