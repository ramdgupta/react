import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err, 'axios')
    })
  })
  return (
    <>
    <h1>Chai and Code</h1>
    <p>Jokes : {jokes.length}</p>
    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <article>{joke.content}</article>
        </div>
      ))
    }
    </>
  )
}

export default App
