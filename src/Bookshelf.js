import React from 'react'
import Shelf from './Shelf'

/**

	TODO:
	- Add prototypes
	- Add dynamic data

 */


class Bookshelf extends React.Component {

	render() {
		const { shelfTitle } = this.props
		return (
		
	            <div className="list-books-content">
		              <div className="bookshelf">
              				<h2 className="bookshelf-title">{shelfTitle}</h2>
		                <Shelf />
			        </div>
	        	</div>
		)
	}

}

export default Bookshelf