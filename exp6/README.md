# Experiment 6: Task Management API with MongoDB

A full-featured RESTful API for managing tasks using Node.js, Express.js, and MongoDB with Mongoose ODM.

## Description

This experiment demonstrates a complete CRUD (Create, Read, Update, Delete) API with MongoDB database integration. The application follows the MVC (Model-View-Controller) architecture pattern with separate layers for routes, controllers, models, and database configuration.

## Features

- RESTful API design
- MongoDB database integration with Mongoose
- Environment variable configuration
- MVC architecture
- CRUD operations for tasks
- Task status management (Pending, In Progress, Completed)
- Input validation
- Error handling
- Async/await patterns

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account (free tier available) OR local MongoDB installation

## Setup Instructions

1. **Create project directory structure**:

   ```bash
   mkdir exp6
   cd exp6
   mkdir config controllers models routes
   ```

2. **Initialize npm project**:

   ```bash
   npm init -y
   ```

3. **Install dependencies**:

   ```bash
   npm install express mongoose dotenv
   npm install --save-dev nodemon
   ```

4. **Create all project files**:

   - `app.js` - Main application file
   - `config/dbConnect.js` - Database connection
   - `controllers/taskController.js` - Controller functions
   - `models/taskModel.js` - Mongoose model
   - `routes/taskRoutes.js` - Route definitions
   - `.env.example` - Environment template
   - `.env` - Your environment variables

   (Copy the code from your lab materials for each file)

5. **Set up MongoDB**:

   **Option A: MongoDB Atlas (Cloud - Recommended for beginners)**

   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account
   - Create a new cluster (free tier M0)
   - Click "Connect" and select "Connect your application"
   - Copy the connection string

   **Option B: Local MongoDB**

   - Install MongoDB locally from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Start MongoDB service
   - Use connection string: `mongodb://localhost:27017/tasks-db`

6. **Configure environment variables**:
   - Create/edit the `.env` file and add your MongoDB connection string:
     ```
     CONNECTION_STRING=mongodb+srv://username:password@cluster0.mongodb.net/tasks-db?retryWrites=true&w=majority
     ```
   - Replace `username`, `password`, and cluster details with your actual MongoDB credentials

## How to Run

### Production Mode

```bash
npm start
```

### Development Mode (with auto-restart on file changes)

```bash
npm run dev
```

The server will start at: `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description         | Body                                                                 |
| ------ | ---------------- | ------------------- | -------------------------------------------------------------------- |
| GET    | `/api/tasks`     | Get all tasks       | -                                                                    |
| POST   | `/api/tasks`     | Create a new task   | `{ "title": "string", "description": "string", "status": "string" }` |
| PUT    | `/api/tasks/:id` | Update a task by ID | `{ "title": "string", "description": "string", "status": "string" }` |
| DELETE | `/api/tasks/:id` | Delete a task by ID | -                                                                    |

## Testing the API

### Using cURL

**Get all tasks**:

```bash
curl http://localhost:3000/api/tasks
```

**Create a new task**:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Complete Assignment\",\"description\":\"Finish the Node.js project\",\"status\":\"Pending\"}"
```

**Update a task** (replace `TASK_ID` with actual ID):

```bash
curl -X PUT http://localhost:3000/api/tasks/TASK_ID \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Complete Assignment\",\"description\":\"Finish the Node.js project\",\"status\":\"In Progress\"}"
```

**Delete a task**:

```bash
curl -X DELETE http://localhost:3000/api/tasks/TASK_ID
```

### Using Postman or Thunder Client

1. **Get All Tasks (GET)**:

   - URL: `http://localhost:3000/api/tasks`
   - Method: GET

2. **Create Task (POST)**:

   - URL: `http://localhost:3000/api/tasks`
   - Method: POST
   - Body (JSON):
     ```json
     {
       "title": "Complete Assignment",
       "description": "Finish the Node.js project",
       "status": "Pending"
     }
     ```

3. **Update Task (PUT)**:

   - URL: `http://localhost:3000/api/tasks/{id}`
   - Method: PUT
   - Body (JSON):
     ```json
     {
       "title": "Complete Assignment",
       "description": "Finish the Node.js project",
       "status": "In Progress"
     }
     ```

4. **Delete Task (DELETE)**:
   - URL: `http://localhost:3000/api/tasks/{id}`
   - Method: DELETE

## Project Structure

```
exp6/
├── config/
│   └── dbConnect.js         # MongoDB connection configuration
├── controllers/
│   └── taskController.js    # Controller functions for task operations
├── models/
│   └── taskModel.js         # Mongoose schema and model
├── routes/
│   └── taskRoutes.js        # API route definitions
├── .env.example             # Environment variable template
├── .env                     # Your environment variables (create this)
├── app.js                   # Main application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Architecture

### MVC Pattern

- **Model** (`models/taskModel.js`): Defines the data structure using Mongoose schema
- **Controller** (`controllers/taskController.js`): Contains business logic for CRUD operations
- **Routes** (`routes/taskRoutes.js`): Maps HTTP endpoints to controller functions

### Components

1. **app.js**: Entry point, sets up Express server and middleware
2. **dbConnect.js**: Handles MongoDB connection using Mongoose
3. **taskModel.js**: Mongoose schema defining task structure
4. **taskController.js**: Implements CRUD operations
5. **taskRoutes.js**: Defines API endpoints

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (environment variable management)

## Environment Variables

Required in `.env` file:

```env
CONNECTION_STRING=your_mongodb_connection_string_here
```

## Error Handling

The API includes error handling for:

- Missing required fields (400 Bad Request)
- Task not found (404 Not Found)
- Database connection errors
- Server errors (500 Internal Server Error)

## Data Validation

The Task model includes:

- **title**: String, required
- **description**: String, optional
- **status**: String, enum ["Pending", "In Progress", "Completed"], default: "Pending"

## Task Status Options

- **Pending**: Task is yet to be started
- **In Progress**: Task is currently being worked on
- **Completed**: Task is finished

## Troubleshooting

### MongoDB Connection Issues

- Verify your connection string in `.env` file
- Check if your IP address is whitelisted in MongoDB Atlas
- Ensure your username and password are correct
- Make sure MongoDB service is running (for local installation)

### Port Already in Use

- Change the PORT variable in `app.js` if port 3000 is occupied
- Check running processes: `netstat -ano | findstr :3000` (Windows)

### Module Not Found

- Run `npm install` to install all dependencies
- Ensure you're in the correct project directory

### dotenv Not Loading

- Make sure `.env` file exists (copy from `.env.example`)
- Add `require('dotenv').config()` at the top of `app.js` if missing

## Notes

- Data is persisted in MongoDB and survives server restarts
- The `.env` file should never be committed to version control (add to .gitignore)
- Use nodemon for development to auto-restart on file changes
- MongoDB ObjectIds are used as task IDs
- All responses are in JSON format
- Status field has validation and only accepts: "Pending", "In Progress", or "Completed"

## Next Steps

Possible enhancements:

- Add user authentication
- Implement task priorities (Low, Medium, High)
- Add due dates and reminders
- Implement task categories or tags
- Add pagination for task listing
- Input validation using express-validator
- Add unit and integration tests
- Implement logging
- Add API documentation with Swagger
- Add task search and filter capabilities
