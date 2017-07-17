/** User's Personal Library **/
import React from 'react'
import { Link } from 'react-router-dom'


const PersonalLibrary = (props) => {
	return (
		<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {props.bookshelves}
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
	)
}

export default PersonalLibrary