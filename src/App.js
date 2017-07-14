import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

// Import components
import Searchlibrary from './Searchlibrary'
import Bookshelf from './Bookshelf'
import BookDetails from './BookDetails'

// Import css styles
import './App.css'

/**
TODO:
1) Breakdown bookshelf into 3 categories
2) Setup state function to handle moving books
3) Update CSS, add more functionality
**/


class BooksApp extends React.Component {
  state = {
     library: [],
     bookShelves: [ "currentlyReading", "wantToRead", "read"]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({library: this.state.library.concat(books)})
    })
  }

  moveBook(id, newShelf) {
    console.log(id, newShelf)
    const {library} = this.state;
    BooksAPI.get(id).then((book) => {
      return book
    })
    .then((book) => {
      BooksAPI.update(book, newShelf)
        .then((newBooks) => {
          BooksAPI.get(id).then((book) => {
            return book
        })
        // set new state with updated book
        .then((updatedBook) => {
          const index = library.findIndex((item) => {
            return item.id === updatedBook.id
          })
          // updated item
          let newLibrary = [
         ...library.slice(0,index),
         updatedBook,
         ...library.slice(index+1)
         ]
         // updates the state with the new library changes
         this.setState({library: newLibrary})
          return newBooks
        })
      })
    })
    .catch((e) => {
      if(e) {
        console.error('Error message: ', e)
      }
    })
  }

  render() {
    const {library, bookShelves} = this.state;


    let bookshelves = bookShelves.map((bookshelf, index) => (
        <Bookshelf key={index} shelfTitle={bookshelf} books={library.filter(book => (bookshelf === book.shelf))} moveBook={(bookId, shelf) => (this.moveBook(bookId, shelf))}/>
    ));

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

            {bookshelves}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route exact path="/search" render={() => ( <Searchlibrary library={library} moveBook={(bookId, shelf) => (this.moveBook(bookId, shelf))}/>)} />
      
        <Route path="/details/:id" render={() => (<BookDetails bookTitle={"Title Here"}/>
          )} />

        </div> )



  }
}

export default BooksApp
