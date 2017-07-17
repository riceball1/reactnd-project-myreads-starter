# React Nanodegree: Project 1 - MyReads

## Description:
	A react application that allows users to store books into three categories: currently reading, want to read, and read. Users are able to search and add more books that retrieves data from an API.

## Upcoming Features:
	- Individual details about particular books when clicked on

## Starting App:
- Regular startup without production version:
    - `npm start`
    - Check `localhost:3000`

## Using MyReads App:
- On the main page you will find 3 categories: 'currently reading', 'want to read', 'read'
- You can select the drop down menu at the right bottom corner of each book to change where on the shelf you would like to put the book, if you select 'none' the book will be removed from the shelves
- You can select the circle icon with a plus symbol ( + ) on the bottom of the main page to go to the search page, or go to `localhost:3000/search`
- On the search page you can use the search bar at the top to query for books to add to the shelves, please refer to [SEARCH_TERMS.md](SEARCH_TERMS.md) for details about search terms that will work
- You can also click on individual book covers to go a specific page that gives more details about that particular book

Other Issues:
- Currently the production version doesn't produce the correct output:
    - `npm install -g serve`
    - `serve -s build`
    - Check `localhost:5000`


## Other Details: 

This is the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
