import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import ProductRoutes from './routes/product.route.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products', ProductRoutes.then(module => module.default));





app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});

