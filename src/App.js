import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import CoursesPage from './pages/courses/CoursesPage'
import CourseDetailsPage from './pages/courses/CourseDetailsPage'
import UsersPage from './pages/users/UsersPage'
import UserDetailsPage from './pages/users/UserDetailsPage'
import HoursReportPage from './pages/hours/HoursReportPage'
import HoursApprovePage from './pages/hours/HoursApprovePage'
import ActiveUserContext from './shared/activeUserContext'
import './App.css';
import ComponentZoo from './pages/ComponentZoo';
import SideNavbar from './components/sideNavbar/SideNavbar';

const App = () => {

  const [activeUser, setActiveUser] = useState(localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogin = (activeUser) => {
    setActiveUser(activeUser);
    localStorage.activeUser = JSON.stringify(activeUser);
  }

  const handleLogout = () => {
    setActiveUser(null);
    localStorage.removeItem("activeUser");
  }

  return (
    <ActiveUserContext.Provider value={activeUser}>

    {/* <Route exact path={['/LoginPage', '/CoursesPage', '/CourseDetailsPage', '/UsersPage',
    '/UserDetailsPage', '/HoursReportPage', '/HoursApprovePage', '/zoo']}>
      <SideNavbar />
    </Route> */}

      <Switch>
      <Route exact path="/SideNavbar">
        <button onClick={()=>{setIsNavOpen(!isNavOpen)}}>open navbar</button>
          <SideNavbar 
          handleLogin={handleLogin}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          />
        </Route>
        <Route exact path="/">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route exact path="/courses">
          <CoursesPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/courses/:id">
          <CourseDetailsPage handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/users">
          <UsersPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/users/:id">
          <UserDetailsPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/hours-report">
          <HoursReportPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/hours-approve">
          <HoursApprovePage handleLogout={handleLogout}/>
        </Route>
        <Route path="/zoo">
            <ComponentZoo></ComponentZoo>
        </Route>
      </Switch>
    </ActiveUserContext.Provider>
  );
}

export default App;
