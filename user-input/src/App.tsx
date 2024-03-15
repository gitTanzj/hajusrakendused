import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()
  const [ name, setName ] = React.useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/')
    .then(response => {
      if (response.data.valid){
        setName(response.data.username)
      }
      else {
        navigate('/login')
      }
      console.log(response)
    })
    .catch(error => {
      error.response ? console.log(error.response) : console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1>Welcome {name}!!</h1>
    </div>
  );
}

export default App;
