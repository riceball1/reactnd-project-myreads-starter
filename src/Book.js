import React from 'react'

function Book(props) {
	// destructure props:
		const { author, image, title } = props

		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${image}")` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{author}</div>
            </div>
        )
}


export default Book