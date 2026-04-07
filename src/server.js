import express from 'express';
// import dotenv from 'dotenv';

//reads default .env file
// dotenv.config();

const app = express();

//define a route on the server
app.get("/", (req,res) => {
    res.status(200).send("Hello, from Express.js! Let's do this!");
});

//start the server on a port
const port = process.env.PORT;
app.listen(port, () => console.log (`Server started on http://localhost:${port}`));