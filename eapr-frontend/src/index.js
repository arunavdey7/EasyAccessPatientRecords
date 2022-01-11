import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientHome from './pages/patienthome/PatientHome';

const MainComponent = () => {

  return(
    <React.Fragment>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div>
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/patienthome'>
            <PatientHome/>
          </Route>
  
        </Switch>
      </Router>
      </div>
</React.Fragment>
  )
} 

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
