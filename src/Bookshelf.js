import React from 'react'
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelfTitle: PropTypes.string.isRequired
	}

	render() {
		const { shelfTitle, books, moveBook } = this.props
		return (
		
	            <div className="list-books-content">
		              <div className="bookshelf">
              				<h2 className="bookshelf-title">{shelfTitle}</h2>
		                <Shelf books={books} moveBook={moveBook}/>
			        </div>
	        	</div>
		)
	}

}

export default Bookshelf