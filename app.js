import express from "express";
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000

app.listen(PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

