import React from 'react'
// import * as BooksAPI from './BooksAPI'

import { Route, Link } from 'react-router-dom'

// Import components
import Searchbar from './Searchbar'
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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     bookShelves: ["Currently Reading", "Wanted to Read", "Read"]
  }

  render() {
    var bookshelves = this.state.bookShelves.map((bookshelf) => (
      <Bookshelf shelfTitle={bookshelf} /> ));

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

        <Route exact path="/search" render={() => ( <Searchbar />)} />
      
        </div> )
  }
}

export default BooksApp
