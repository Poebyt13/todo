
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Server is ready');
})

export default app;