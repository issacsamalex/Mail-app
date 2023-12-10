const express = require('express');
const appRoute = require('./routes/route')
const app = new express();

const PORT = 3000;

app.use(express.json());

// Routes
app.use('/api', appRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})