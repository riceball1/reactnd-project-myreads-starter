import React from 'react'
import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {


  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.array.isRequired
  }

// authors was returning undefined so I used a ternary operator to check

  render() {
    const { author, image, title, id, optionState, moveBook } = this.props

      return (
        <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${image}")` }}></div>
                  <div className="book-shelf-changer">
                    <select value={optionState} onChange={(e) => moveBook(e.target.id, e.target.value)} id={id}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author? author.map((name, index) => (<p key={index}>{name}</p>)) : ""}</div>
              </div>
          )
  }
		
}


export default Book