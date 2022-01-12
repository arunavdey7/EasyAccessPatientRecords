import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientHome from './pages/patienthome/PatientHome';
import AddPatientData from './pages/addpatientdata/AddPatientData';
import MedicationStatement from './components/medicationstatement/MedicationStatement';
import Prescription from './components/prescription/Prescription';
import Test from './components/test/Test';
import DoctorDashboard from './components/doctordashboard/DoctorDashboard';
import IpsContainer from './components/ipscontainer/IpsContainer'
import ShowMedicationStatement from './components/showmedicationstatement/ShowMedicationStatement'
const MainComponent = () => {

  return (
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
              <Login />
            </Route>
            <Route exact path='/patienthome'>
              <PatientHome />
            </Route>
            <Route exact path='/addpatientdata'>
              <AddPatientData />
            </Route>
            <Route exact path='/medicationstatement'>
              <MedicationStatement />
            </Route>
            <Route exact path='/prescription'>
              <Prescription />
            </Route>
            <Route exact path='/test'>
              <Test />
            </Route>
            <Route exact path='/ips'>
              <IpsContainer/>
            </Route>
            <Route exact path='/doctorpatientdashboard'>
              <DoctorDashboard/>
            </Route>
            <Route exact path='/showmedicationstatement'>
              <ShowMedicationStatement/>
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
