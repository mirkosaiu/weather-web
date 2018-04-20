import 'normalize.css';
import 'Css/Theme.css';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MobileView, isMobile } from 'react-device-detect'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'Reducers'

import Home from 'Components/Home';
import Statistics from 'Components/Statistics';
import Archive from 'Components/Archive';
import PageNotFound from 'Components/PageNotFound';
import MessageForMobileDevices from 'Components/MessageForMobileDevices';
import NavBar from 'Components/NavBar';

const loggerMiddleware = createLogger()
const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))

const App = () => {
  return (
    <div>
      <NavBar/>

      <div className="background">
        <div className="main-box">

          <MobileView device={isMobile}>
            <MessageForMobileDevices/><space/>
          </MobileView>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/statistics" component={Statistics}/>
            <Route exact path="/archive" component={Archive}/>
            <Route exact component={PageNotFound}/>
          </Switch>

        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App/></Provider>
  </BrowserRouter>
  , document.getElementById('root'));
