module.exports = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://mongo:27017/users',
    // APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
    APP_PORT: 8090
};