import React from 'react'
import Shelf from './Shelf'

/**

	TODO:
	- Add prototypes
	- Add dynamic data

 */


class Bookshelf extends React.Component {

	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>

	            <div className="list-books-content">
		              <div>
		                <Shelf />
			        </div>
	        	</div>
            </div>


		)
	}

}

export default Bookshelf