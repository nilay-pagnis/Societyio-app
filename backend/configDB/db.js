const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongodb_URL);

        //console.log(`mongodb connected: ${connect.connection.host}`);
    } catch (error) {
        //console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB