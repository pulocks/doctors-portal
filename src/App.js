import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DoctorsPage from './components/DoctorsPage/DoctorsPage';
import DoctorsDashboard from './components/DoctorsDashboard/DoctorsDashboard';
import Contact from './components/Contact/Contact';
import AddAppointment from './components/AddAppointment/AddAppointment';
import ViewAppointment from './components/ViewAppointment/ViewAppointment';

export const dateContext = createContext();

function App() {

  let [newDate, setNewDate] = useState('');

  return (
    <div className="App">

      <Header></Header>
      <dateContext.Provider value={[newDate, setNewDate]}>
        <Router>
          <Switch>
            <Route path="/appointment/:name">
              <AddAppointment></AddAppointment>
            </Route>
            <Route path="/viewAppointment/:key">
              <ViewAppointment></ViewAppointment>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <DoctorsPage></DoctorsPage>
            </Route>
            <Route path="/dashboard">
              <DoctorsDashboard></DoctorsDashboard>
            </Route>
            <Route path="/contacts"> 
              <Contact></Contact>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </dateContext.Provider>      
    </div>
  );
}

export default App;
