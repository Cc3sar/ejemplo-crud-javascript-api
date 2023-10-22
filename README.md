# express-mysql-api

This is a simple API built with Express and MySQL that allows you to create new users by sending a POST request to the `/users` endpoint.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/express-mysql-api.git`
2. Install dependencies: `npm install`
3. Create a MySQL database and update the `src/database/db.js` file with your database credentials.
4. Start the server: `npm start`

## Usage

To create a new user, send a POST request to the `/users` endpoint with the following JSON payload:

```json
{
  "name": "John",
  "surname": "Doe",
  "age": 30
}
```

The API will respond with the newly created user object:

```json
{
  "id": 1,
  "name": "John",
  "surname": "Doe",
  "age": 30
}
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.