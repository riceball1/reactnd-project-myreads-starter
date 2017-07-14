import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

// Import components
import Searchlibrary from './Searchlibrary'
import Bookshelf from './Bookshelf'
import BookDetails from './BookDetails'

// Import css styles
import './App.css'


class BooksApp extends React.Component {
  // setup bookshelf categories and library state
  state = {
     library: [],
     bookShelves: [ "currentlyReading","wantToRead", "read"]
  }

  // setup library when component is mounted
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({library: this.state.library.concat(books)})
    })
  }

  // function to move books between categories
  moveBook(id, newShelf) {
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
          let newLibrary
          if(index !== -1) {
            newLibrary = [
             ...library.slice(0,index),
             updatedBook,
             ...library.slice(index+1)
             ]
          } else {
            newLibrary = this.state.library.concat(updatedBook)
          }
          
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

    // render each bookshelf and pass down props to children components
    let bookshelves = bookShelves.map((bookshelf, index)=> {
      // used a reg expression - was trying to use an object, but maybe there's a better way to display the shelf names?
        let result = bookshelf.replace( /([A-Z])/g, " $1")
        let shelfTitle = result.charAt(0).toUpperCase() + result.slice(1)
        return <Bookshelf key={index} shelfTitle={shelfTitle} books={library.filter((book, index) => ( bookshelf === book.shelf))} moveBook={(bookId, shelf) => (this.moveBook(bookId, shelf))}/>
    });

    // set up routing for main page, search page and book details page
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
      
        <Route path="/details/:bookId" render={()=> (
          <BookDetails bookTitle="Book Title" />)}
        />

        </div> )



  }
}

export default BooksApp
