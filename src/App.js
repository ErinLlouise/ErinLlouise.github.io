import { Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
     <Header />
     <Route exact path='/' component={Home} />
     <Route path='/about' component={About} />
     <Route path='/projects' component={Projects} />
    </div>
  )
}

export default App
