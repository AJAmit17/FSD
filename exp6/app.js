require('dotenv').config({ path: __dirname + '/.env' }); 
const express = require('express'); 
const tasksRoutes = require('./routes/taskRoutes');

const connectDB = require('./config/dbConnect'); 
connectDB();

const app = express(); 
app.use(express.json()); 

app.use("/api/tasks",tasksRoutes); 

app.use((req, res) => { 
    res.status(404).json({ message: 'Route not found' }); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{ 
    console.log(`server is running at port ${PORT}`); 
}) 