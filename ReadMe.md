# Crud-Http-Express

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Irenaeus-XVI/Crud-Http-Express/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012-brightgreen)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/express-%5E4.17.1-yellow)](https://www.npmjs.com/package/express)

Crud-Http-Express is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and Express.js. It provides a basic HTTP interface to interact with a simple database and perform CRUD operations on the data.

## Features

- Create new items
- Read existing items
- Update existing items
- Delete items
- RESTful API design
- Easy to use and extend

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Clone this repository: `git clone https://github.com/Irenaeus-XVI/Crud-Http-Express.git`
3. Navigate to the project directory: `cd Crud-Http-Express`
4. Install the dependencies: `npm install`

## Usage


1. Start the server: `npm start`
2. The API will be accessible at: `http://localhost:3000`

## API Endpoints
- `GET /` - Get all items
- `GET /searchById` - Get a specific item
- `POST /addUser` - Create a new item (JSON payload required)
- `PUT /updateUser` - Update an existing item (JSON payload required)
- `DELETE /deleteUser` - Delete an item

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://github.com/Irenaeus-XVI/Crud-Http-Express/blob/master/LICENSE).
