import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

// Import components
import Searchlibrary from './Searchlibrary'
import Bookshelf from './Bookshelf'
import BookDetails from './BookDetails'
import PersonalLibrary from './PersonalLibrary'

// Import css styles
import './App.css'


class BooksApp extends React.Component {
  // setup bookshelf categories and library state
  state = {
     library: [],
     bookShelves: [ "currentlyReading","wantToRead", "read"],
     currentlyReading: [],
     wantToRead: [],
     read: []
  }

  // setup library when component is mounted
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({library: this.state.library.concat(books)})
    })
  }

  // refractor to declutter render() 
  renderBookShelves(library, bookShelves) {
    // render each bookshelf and pass down props to children components
    return bookShelves.map((bookshelf, index)=> {
      // used a reg expression - was trying to use an object, but maybe there's a better way to display the shelf names?
        let result = bookshelf.replace( /([A-Z])/g, " $1")
        let shelfTitle = result.charAt(0).toUpperCase() + result.slice(1)
        return (
          <Bookshelf key={index} shelfTitle={shelfTitle} books={library.filter((book, index) => ( bookshelf === book.shelf))} moveBook={(bookId, shelf) => (this.moveBook(bookId, shelf))}/>
        )
    })
  }

  // function to move books between categories
  moveBook(id, newShelf) {
    // get current library from state
    const {library} = this.state;
      // update book information
      BooksAPI
        .update({id}, newShelf)
        .then(() => {
          /* refracatored to 
          * return the function so that when the promise 
          * resolves it also returns the book 
          */
          return BooksAPI.get(id) // get book object
          })
          // set new state with updated book
          .then(updatedBook => {
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
            return updatedBook
          })
        .catch((e) => {
          if(e) {
            console.error('Error message: ', e)
          }
        })
  }

  render() {
    const {library, bookShelves} = this.state;
    // call function to render bookShelves
    let bookshelves = this.renderBookShelves(library, bookShelves)

    // set up routing for main page, search page and book details page
    // Refractor: abstract routes into components to make it more readable for teammates
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <PersonalLibrary bookshelves={bookshelves}/>)} />

        <Route exact path="/search" render={() => ( <Searchlibrary library={library} moveBook={(bookId, shelf) => (this.moveBook(bookId, shelf))}/>)} />
      
        <Route path="/details/:bookId" component={BookDetails}/>

        </div> )



  }
}

export default BooksApp
