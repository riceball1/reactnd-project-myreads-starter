import React from 'react'
import { Link } from 'react-router-dom'



class Searchbar extends React.Component {

	render() {
		return (
			<div>
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
              </div>
            </div>
            	<div className="search-books-results">
            		<h1>Search for Books</h1>
            	</div>
            </div>

		)
	}
}


export default Searchbar