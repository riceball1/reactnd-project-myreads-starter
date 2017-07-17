import React from 'react'
import Shelf from './Shelf'
import PropTypes from 'prop-types';


// turned this into a stateless function 

const Bookshelf = (props) => {
	const { shelfTitle, books, moveBook } = props
	return (
	
            <div className="list-books-content">
	              <div className="bookshelf">
          				<h2 className="bookshelf-title">{shelfTitle}</h2>
	                <Shelf books={books} moveBook={moveBook}/>
		        </div>
        	</div>
	)
}

// check proptypes
Bookshelf.propTypes = {
	books: PropTypes.array.isRequired,
	shelfTitle: PropTypes.string.isRequired,
	moveBook: PropTypes.func.isRequired
}

export default Bookshelf