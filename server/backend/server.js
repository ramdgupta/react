import express from 'express';
const app = express();
//const port = process.env.PORT || 5300;
const port = 5300;
const jokes = [
    {
      id: 1,
      title: "Math Joke",
      content: "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else!"
    },
    {
      id: 2,
      title: "Coffee Joke",
      content: "Why do coffee beans never get into arguments? Because they know how to espresso themselves!"
    },
    {
      id: 3,
      title: "Programming Joke",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      id: 4,
      title: "Physics Joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 5,
      title: "Garden Joke",
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    }
  ];
  
//console.log(JSON.stringify(jokes, null, 2));
  

app.get('/', (req, res) => {
    res.send("server start")
});

app.get('/home', (req, res) => {
  res.send("server start home page")
});
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
})
app.listen(port, () => {
    console.log(`server start: http://localhost:${port}`)
})