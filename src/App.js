import { Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
     <Header />
     <Route exact path='/' component={Home} />
    </div>
  )
}

export default App
