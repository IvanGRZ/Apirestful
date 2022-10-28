import express from "express";
import dotenv from 'dotenv'
import router from './src/routes/index.js'

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use('/public', express.static('./public'));

export default app;
  
