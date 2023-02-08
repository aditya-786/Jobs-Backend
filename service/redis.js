const redis = require('redis');

async function client() {
    // Connect to redis at 127.0.0.1 port 6379 no password.
    const client = await redis.createClient({
        url: 'rediss://red-cfhsdvkgqg40kljunqu0:DhMIZ1bAmzdSIwQeoZ6MqiG7bnmaat5o@oregon-redis.render.com:6379'
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
