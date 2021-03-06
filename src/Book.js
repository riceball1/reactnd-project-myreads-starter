import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Book = (props)=> {
  // authors was returning undefined so I used a ternary operator at book-authors
  // added Link for book image to get more details about book
    const { author, image, title, id, optionState, moveBook } = props
    return (
      <div className="book">
        <div className="book-top">
        <Link to={`/details/${id}`}>
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${image}")` }}></div>
          </Link>
          <div className="book-shelf-changer">
            <select defaultValue={optionState} onChange={(e) => moveBook(e.target.id, e.target.value)} id={id}>
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

Book.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string
  }

export default Book