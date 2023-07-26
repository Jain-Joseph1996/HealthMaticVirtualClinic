const redis = require("redis");

const redisClient = redis.createClient({
  host: 'localhost', // Redis server host
  port: 6379, // Redis server port
  // Add more configuration options if needed
});

// Handle Redis client connection events
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (error) => {
  console.error('Redis connection error:', error);
});


module.exports = redisClient;