import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <header className='App-header'>
            <p>Hi! I am Pradeep!😁</p>
          </header>
        </Route>
      </Router>
    </div>
  )
}

export default App
