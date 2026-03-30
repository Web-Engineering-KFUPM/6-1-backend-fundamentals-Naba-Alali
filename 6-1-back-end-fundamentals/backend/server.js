import express from 'express';
import cors from 'cors';



// TODO 2: Create the Express app and store it in a variable named app
const app = express();




// TODO 3: Allow React to access the server
app.use(cors());




// TODO 5: Create the home route "/"
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});



// TODO 6: Create the "/about" route
app.get('/about', (req, res) => {
  res.send('This is the about page!');
});




// TODO 7: Create the "/student" route
app.get('/student', (req, res) => {
  res.json({
    name: 'Naba Alali',
    major: 'Software Engineering',
  });
});




// TODO 4: Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

