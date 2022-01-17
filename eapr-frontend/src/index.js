import React,{ useState, createContext, useContext } from 'react';
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
import DoctorPatientDashboard from './components/doctorpatientdashboard/DoctorPatientDashboard';
import Registration from './pages/registeration/Registration';
import SessionContext from './utilities/SessionContext'
import MedicationSummary from './components/ipscollectives/medicationsummary/MedicationSummary';
import MedicationOrders from './components/prescriptioncollectives/medicationorders/MedicationOrders';
import Prescriptions from './components/prescriptioncollectives/prescriptions/Prescriptions'
import CreatePrescription from './pages/createprescription/CreatePrescription';
import AllergiesIntolerances from './components/allergiesandintolerances/AllergiesAndIntolerances';
import VitalSigns from './components/vitalsigns/VitalSigns';
import Allergies from './components/ipscollectives/allergies/Allergies';
import ShowAllergiesAndIntolerances from './components/allergiesandintolerances/ShowAllergiesAndIntolerances';
import ShowProblemList from './components/problemlist/ShowProblemList';
import CreateProblemList from './components/problemlist/CreateProblemList'
import ProblemList from './components/ipscollectives/problemlist/ProblemList'
import CreatePastHistoryOfIllness from './components/pasthistoryofillness/CreatePastHistoryofIllness'
import PastHoi from './components/ipscollectives/pasthoi/PastHoi';
import CreateAdvancedDirectives from './components/advancedirectives/CreateAdvanceDirectives';
import ShowAdvanceDirectives from './components/advancedirectives/ShowAdvanceDirectives';
import AdvancedDirectives from './components/ipscollectives/advanceddirectives/AdvancedDirectives';
import ShowPrescription from './pages/showprescription/ShowPrescription';
import AdminHome from './pages/adminhome/AdminHome';
import CreateAllergiesAndIntolerances from './components/allergiesandintolerances/AllergiesAndIntolerances'
const MainComponent = () => {

  const [sessionData, setSessionData] = useState({
    isUserLoggedIn: false,
    role:''
  })
  const [selectedIPSCollective, setSelectedIPSCollective] = useState("")
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
          <SessionContext.Provider value = {sessionData}>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Login sessionData={sessionData} setSessionData={setSessionData}/>
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
                <Route exact path='/doctorsdashboard'>
                  <DoctorDashboard selectedIPSCollective={selectedIPSCollective} 
                                   setSelectedIPSCollective={setSelectedIPSCollective}
                  />
                </Route>
                <Route exact path='/doctorpatientdashboard'>
                  <DoctorPatientDashboard/>
                </Route>
                <Route exact path='/showmedicationstatement'>
                  <ShowMedicationStatement/>
                </Route>
                <Route exact path='/register'>
                  <Registration/>
                </Route>
                <Route exact path='/preview'>
                  <Prescriptions/>
                </Route>
                <Route exact path='/createprescription'>
                  <CreatePrescription/>
                </Route>
                <Route exact path='/allmedicationstatements'>
                  <MedicationSummary/>
                </Route>
                <Route exact path='/allergiesandintolerances'>
                  <Allergies/>
                </Route>
                <Route exact path='/showallergies'>
                  <ShowAllergiesAndIntolerances/>
                </Route>
                {/* Admin */}
                <Route exact path='/createproblemlist'>
                  <CreateProblemList/>
                </Route>
                {/* Patient's and Doctor's Detailed*/}
                <Route exact path='/showproblemlist'>
                  <ShowProblemList/>
                </Route>
                {/* Patient's and Doctor's Detailed*/}
                <Route exact path='/ips/problemlist'>
                  <ProblemList/>
                </Route>
                <Route exact path='/showproblemlist'>
                  <ShowProblemList/>
                </Route>
                <Route exact path='/createpasthoi'>
                  <CreatePastHistoryOfIllness/>
                </Route>
                <Route exact path='/pasthoi'>
                  <PastHoi/>
                </Route>
                <Route exact path='/createadvancedirectives'>
                  <CreateAdvancedDirectives/>
                </Route>
                <Route exact path='/advancedirectives'>
                  <AdvancedDirectives/>
                </Route>
                <Route exact path='/showadvancedirectives'>
                  <ShowAdvanceDirectives/>
                </Route>
                <Route exact path='/medicationorders'>
                  <MedicationOrders/>
                </Route>
                <Route exact path='/showmedicationorder'>
                  <ShowPrescription/>
                </Route>
                <Route exact path='/adminhome'>
                  <AdminHome/>
                </Route>
                <Route exact path='/createallergiesandintolerances'>
                  <CreateAllergiesAndIntolerances/>
                </Route>
              </Switch>
            </Router>
            </SessionContext.Provider>
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

