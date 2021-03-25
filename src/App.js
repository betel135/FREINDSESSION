import React from 'react'
import Home  from '../src/Home/Home'
import { BrowserRouter, Route, Link } from "react-router-dom"
import About from '../src/Home/Header/About/About'
import Contact from '../src/Home/Header/Contact/Contact'
import Login from '../src/Home/Header/LogIn/LogIn'
class App extends React.Component {
render() {
   return (
    <BrowserRouter>
    <Route exact path="/"component={Home}/>
    <Route path="/About"component={About}/>
    <Route path="/Contact"component={Contact}/>
    <Route path="/Login"component={Login}/>
    </BrowserRouter>
   )
}
}
export default App