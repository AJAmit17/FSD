# Task Manager Application (MEAN Stack)

A full-stack Task Manager application built with **MongoDB**, **Express.js**, **Angular**, and **Node.js** (MEAN Stack). This application allows users to create, view, and delete tasks with a clean and responsive interface.

## 🎯 Features

- ✅ Create new tasks with title and description
- ✅ View all tasks in a list
- ✅ Delete tasks
- ✅ RESTful API backend
- ✅ MongoDB database integration
- ✅ Angular standalone components
- ✅ Responsive design
- ✅ Real-time updates

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (v6 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Angular CLI** (v17 or higher)

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

## 📁 Project Structure

```
exp11/
├── server/                      # Backend (Node.js + Express + MongoDB)
│   ├── app.js                  # Express server and API routes
│   ├── taskModel.js            # MongoDB Task schema/model
│   └── package.json            # Server dependencies
│
├── client/                      # Frontend (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── model/
│   │   │   │   └── task.model.ts         # Task interface
│   │   │   ├── services/
│   │   │   │   └── task.service.ts       # HTTP service
│   │   │   ├── app.component.ts          # Main component
│   │   │   ├── app.component.html        # Template
│   │   │   └── app.component.css         # Styles
│   │   ├── main.ts                       # Bootstrap file
│   │   ├── index.html                    # HTML entry point
│   │   └── styles.css                    # Global styles
│   ├── angular.json                      # Angular config
│   ├── tsconfig.json                     # TypeScript config
│   └── package.json                      # Client dependencies
│
└── README.md                             # This file
```

## 🚀 Installation & Setup

### Step 1: Start MongoDB

First, make sure MongoDB is running on your system.

**Windows:**
Open Command Prompt or PowerShell as Administrator:
```bash
mongod
```

**Mac/Linux:**
```bash
sudo mongod
```

**Or if MongoDB is installed as a service:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

MongoDB should now be running on `mongodb://127.0.0.1:27017`

### Step 2: Setup and Run the Backend Server

1. Navigate to the server directory:
```bash
cd exp11/server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on **http://localhost:3000** and will automatically connect to MongoDB.

You should see:
```
Server is running on port 3000
Connected to MongoDB!
```

### Step 3: Setup and Run the Angular Client

Open a **new terminal window** (keep the server running in the first terminal).

1. Navigate to the client directory:
```bash
cd exp11/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular development server:
```bash
ng serve
```

or

```bash
npm start
```

The Angular app will run on **http://localhost:4200**

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:4200
```

## 🔌 API Endpoints

The backend server exposes the following REST API endpoints:

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/tasks` | Get all tasks | - |
| POST | `/tasks` | Create a new task | `{ title: string, description?: string }` |
| DELETE | `/tasks/:id` | Delete a task by ID | - |

## 💡 Usage

1. **Add a Task**: 
   - Enter a task title in the first input field (required)
   - Optionally add a description in the second field
   - Click "Add Task" button or press Enter

2. **View Tasks**: 
   - All tasks are displayed in a list below the input fields
   - Each task shows its title and description

3. **Delete a Task**: 
   - Click the red "Delete" button next to any task to remove it
   - The task will be deleted from the database immediately

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **CORS** - Cross-origin resource sharing middleware
- **Nodemon** - Auto-restart server during development

### Frontend
- **Angular 17** - Frontend framework
- **TypeScript** - Typed superset of JavaScript
- **RxJS** - Reactive programming library
- **HttpClient** - Angular HTTP communication module
- **FormsModule** - Two-way data binding

## 🐛 Troubleshooting

### MongoDB Connection Error
If you see "Could not connect to MongoDB":
- Ensure MongoDB is running (`mongod` command or service)
- Check if port 27017 is available
- Verify MongoDB is installed correctly
- Try: `mongo` or `mongosh` to test connection

### CORS Error
If you see CORS errors in the browser console:
- Make sure the server is running on port 3000
- Check that CORS middleware is enabled in `server/app.js`
- Verify the API URL in `client/src/app/services/task.service.ts` is correct

### Port Already in Use
If port 3000 or 4200 is already in use:
- **For server**: Change port in `server/app.js` (line with `app.listen(3000)`)
- **For client**: Run `ng serve --port 4300` (or any other available port)

### npm install fails
- Try deleting `node_modules` folder and `package-lock.json`
- Run `npm cache clean --force`
- Run `npm install` again

### Angular build errors
- Make sure you have Angular CLI installed globally
- Check TypeScript version compatibility
- Try: `npm install --legacy-peer-deps` if there are peer dependency issues

## 📝 Development

### Server Development
The server uses **nodemon** for hot-reloading. Any changes to server files will automatically restart the server.

To run without nodemon:
```bash
node app.js
```

### Client Development
Angular CLI provides hot-reloading by default. Changes to client files will automatically refresh the browser.

To build for production:
```bash
ng build --configuration production
```

## 🚢 Deployment

### Database
For production, use a cloud MongoDB service like:
- **MongoDB Atlas** (Free tier available)
- Update `MONGODB_URI` in `server/app.js` with your Atlas connection string

### Backend
Deploy the server to:
- **Heroku**
- **AWS EC2**
- **DigitalOcean**
- **Railway**
- **Render**

### Frontend
Deploy the Angular app to:
- **Vercel**
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

Don't forget to update the API URL in `task.service.ts` to point to your deployed backend.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as part of Full Stack Development coursework demonstrating MEAN stack architecture.

---

### Quick Start Commands

```bash
# Terminal 1 - Start MongoDB
mongod

# Terminal 2 - Start Server
cd exp11/server
npm install
npm start

# Terminal 3 - Start Client
cd exp11/client
npm install
ng serve
```

Then open: **http://localhost:4200**
