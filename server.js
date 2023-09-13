import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//config env
dotenv.config();
//database config

// connectDB();
//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use('/api/v1/auth',authRoutes);
//rest api

app.get("/",(req,res)=>{
    res.send("<h1> Welcome to MERN stack ecommerce project</h1>")
})

const PORT = process.env.POR || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})

