const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// GET endpoint to add two numbers
// The url will look like this : http://localhost:3000/add?num1=5&num2=3
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const sum = parseFloat(num1) + parseFloat(num2);
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});
// GET endpoint to substract two numbers
// The url will look like this : http://localhost:3000/substract?num1=5&num2=3
app.get('/substract', (req, res) => {
    const { num1, num2 } = req.query;
    const substract = parseFloat(num1) - parseFloat(num2);
    res.send(`The substraction of ${num1} and ${num2} is ${substract}`);
});
// GET endpoint to multiply two number
// The url will look like this : http://localhost:3000/multiple?num1=5&num2=3
app.get('/multiple', (req, res) => {
    const { num1, num2 } = req.query;
    const multiple = parseFloat(num1) * parseFloat(num2);
    res.send(`The multiplication of ${num1} and ${num2} is ${multiple}`);
});



app.listen(PORT, () => {
    console.log("App is now listening to user requests");
    console.log("Access this servis at http://localhost: " + PORT);
});