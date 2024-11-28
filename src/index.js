require('dotenv').config();


const express = require('express');
const app = express();

const userRoutes = require('./routers/users.js');
const middlerwareLogs = require('./middleware/logs.js');

app.use(middlerwareLogs.logger);
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use('/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server berhasil berjalan di port ${port}!`);
});