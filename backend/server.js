import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // Import the user routes

dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use(cookieParser());

app.use(express.json()); // Middleware to parse JSON bodies

// Use the user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
