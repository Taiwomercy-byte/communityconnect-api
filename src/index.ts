import app from './app.js';
import sequelize from './config/database.js';
import { env } from './config/env.js';

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port} (${env.nodeEnv})`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
    process.exit(1);
  }
}

start();