module.exports = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://mongo_reviews:27017/reviews',
    // APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
    APP_PORT: 8050
};