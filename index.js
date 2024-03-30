const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product_routes');

dotenv.config();

const port = process.env.PORT;
const user_name = process.env.USER_NAME;
const user_password = process.env.USER_PASSWORD;
const cluster = process.env.CLUSTER_NAME;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoutes);

mongoose.connect(`mongodb+srv://${user_name}:${user_password}@${cluster}.akcdepb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
    .then(() => {
        console.log('Connected to database');

        app.listen(port, () => console.log(`Sever is running on port ${port}`));

    })
    .catch(() => {
        console.log('Connection Failed');
    })
