import Navbar from './Navbar'
import {Home} from './Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from 'react'
import { About } from './About'
import { Logo } from './Logo'
import { Contact } from './Contact'
import { Movie } from './Movie'

function App() {
    return (
      <Router>
    <Navbar/>
<Route exact path ='/home' component={Home}/>
<Route  path ='/about' component={About}/>
<Route exact path = '/logo' component={Logo}/>
<Route exact path = '/con' component={Contact}/>
<Route exact path = '/m' component={Movie}/>



      </Router>
  
    )
}

export default App
