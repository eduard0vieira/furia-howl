import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import twitterRoutes from "./routes/twitter.js";
import { mockTweets } from './data/mockData.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('FURIA Howl Backend');
});

app.use("/api/twitter", twitterRoutes);

app.listen(port, () => {
  console.log(`Server running! port: ${port} 🚀`);
});
