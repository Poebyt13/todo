
import app from './app.js';
import { connectDatabase } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5050;

app.listen(port, () => {
    connectDatabase()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err.message));

    console.log(`Server is running on port ${port}`);
})