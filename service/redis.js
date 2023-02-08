const redis = require('redis');
require('dotenv').config();

async function client() {
    // Connect to redis at 127.0.0.1 port 6379 no password.
    const client = await redis.createClient({
        url: process.env.REDIS_URL
    });
    await client.connect();
    return client;
};

async function redisClient() {
    return await client();
}
module.exports = {
    redisClient
};
