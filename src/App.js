import React from 'react';
import './reset.css'
import './App.css';

// routing imports
// use hashrouter over browserrouter, easier set up
import { HashRouter } from 'react-router-dom'
import router from './router'

// redux: import connect to wrap around each component you want to subscribe to store
import {connect} from 'react-redux'

// import navbar component
import Navbar from './Components/Header/Navbar'
import Carousel from './Components/Header/Carousel'


const App = () => {
  return (

<HashRouter>
{/* referencing Navbar component */}
  <Navbar/>
  <Carousel/>
  {router}
</HashRouter>

  );
}

// redux call function when state in store changes
function mapStateToProps(state) {
  return {
    // redux: key/values will be merged in to the props of the app
    key: state.store
  }

}

// redux: "currying" method = invoke function -> return function -> evoke function again
export default connect(mapStateToProps)(App)