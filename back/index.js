const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    app.use('');

    app.listen(port, () => {
        console.log('server running on', port, 'port');
    })
};

run().catch(e => console.error(e));
