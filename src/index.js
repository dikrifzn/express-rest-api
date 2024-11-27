const express = require('express');
const app = express();

const userRoutes = require('./routers/users.js');
const middlerwareLogs = require('./middleware/logs.js');

app.use(middlerwareLogs.logger);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "ge home success"
    });
});

app.use('/users', userRoutes);

app.listen(3000, () =>{
    console.log('Server berhasil berjalan di port 3000!');
});