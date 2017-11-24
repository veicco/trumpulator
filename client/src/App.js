import React, {Component} from 'react'
import Routes from './Routes'
import Navbar from './components/Navbar'
import './styles/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes/>
      </div>
    )
  }
}

export default App
