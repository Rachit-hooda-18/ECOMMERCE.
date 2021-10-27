const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handeling Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandeled Uncaught Exception`);
  process.exit(1);
});

// Config

dotenv.config({ path: 'backend/config/.env' });

// Connecting Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http/localhost:${process.env.PORT}`);
});

// Unhandeled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandeled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
