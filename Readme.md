# Task Manager Application

A simple task management application built with Node.js, Express, and MongoDB.

## Features

- Create, read, update and delete tasks
- Task status tracking
- Clean and simple web interface
- RESTful API endpoints

## Technologies

- Node.js
- Express.js
- MongoDB
- EJS templating
- Mongoose ODM

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd projectNode
```

2. Install dependencies
```bash
npm install
```

3. Start MongoDB service locally
```bash
# Windows
net start MongoDB

# Linux/MacOS
sudo service mongod start
```

4. Start the application
```bash
node app.js
```

The server will run at `http://localhost:3000`

## Project Structure

```
projectNode/
├── app.js                 # Application entry point
├── package.json          # Project dependencies
├── public/               # Static files
├── src/
│   ├── controllers/      # Route controllers
│   │   └── taskControllers.js
│   ├── models/          # Database models
│   │   └── Task.js
│   └── routes/          # Application routes
│       └── taskRoutes.js
└── views/               # EJS templates
    ├── create.ejs
    ├── delete.ejs
    ├── tasks.ejs
    ├── update.ejs
    └── welcome.ejs
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | View all tasks |
| GET | /tasks/create | Display create form |
| POST | /tasks/create | Create new task |
| GET | /tasks/:taskId | Get task by ID |
| GET | /tasks/update/:taskId | Display update form |
| PUT | /tasks/update/:taskId | Update task |
| GET | /tasks/delete/:taskId | Display delete confirmation |
| DELETE | /tasks/delete/:taskId | Delete task |

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

## Task Model Schema

```javascript
{
  title: String,       // Required
  description: String, // Required
  completed: Boolean,  // Default: false
  createdAt: Date     // Default: Current date
}
```

## Error Handling

The application includes error handling for:
- Database connection errors
- Invalid task IDs
- Missing required fields
- Server errors

## Development

To run in development mode with nodemon:

```bash
npm install nodemon --save-dev
nodemon app.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Your Name

## Acknowledgments

- Express.js documentation
- MongoDB documentation
- Mongoose documentation