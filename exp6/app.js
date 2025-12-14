require('dotenv').config({ path: __dirname + '/.env' }); 
const express = require('express'); 
const tasksRoutes = require('./routes/taskRoutes');

const connectDB = require('./config/dbConnect'); 
connectDB();

const app = express(); 
app.use(express.json()); 
app.use("/api/tasks",tasksRoutes); 

app.listen(3000,()=>{ 
    console.log(`server is running at port 3000`); 
}) 