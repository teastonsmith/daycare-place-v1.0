import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import About from './Components/About/About'
// import Billing from './Components/Billing/Billing'
// import Blog from './Components/Blog/Blog'
// import Calendar from './Components/Calendar/Calendar'
// import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header'
// import Main from './Components/Main/Main'
// import AdminProfile from './Components/Profiles/AdminProfile'

import Login from './Components/Profiles/Login'
import Carousel from './Components/Header/Carousel'
// import Details from './Components/Details'

export default (
  <Switch>
    <Route path='/login' component={Login}/>
    <Route path='/Carousel' component={Carousel}/>

  </Switch>
)
// <Route exact path='/' component={Home}/>
// <Route path='/details' component={Details}/>

//routing - recording 8, around 30 minutes