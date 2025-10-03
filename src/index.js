import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.js';


const port = process.env.PORT || 3000;
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`MongoDB connected on port http://localhost:${port}`);
        });
    }).catch((error) => {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    });