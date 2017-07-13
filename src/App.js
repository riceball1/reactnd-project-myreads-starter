import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

// Import components
import Searchlibrary from './Searchlibrary'
import Bookshelf from './Bookshelf'

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

  render() {
    const {library, bookShelves} = this.state;


    let bookshelves = bookShelves.map((bookshelf, index) => (
        <Bookshelf key={index} shelfTitle={bookshelf} books={library.filter(book => (bookshelf === book.shelf))}/>
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

        <Route exact path="/search" render={() => ( <Searchlibrary library={library}/>)} />
      
        </div> )
  }
}

export default BooksApp
