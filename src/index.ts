import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';

const app = express();

app.get('/', (req, res ) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDatabase();