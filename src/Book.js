import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {


  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.array.isRequired
  }

  render() {
    const { author, image, title } = this.props
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
                <div className="book-authors">{author.map((name, index) => (<p key={index}>{name}</p>))}</div>
              </div>
          )
  }
		
}


export default Book