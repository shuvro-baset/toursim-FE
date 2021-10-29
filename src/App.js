import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import NavBar from './components/NavBar/NavBar';
import AuthProvider from './context/AuthProvider';
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAllTours from './pages/ManageAllTours/ManageAllTours';
function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          
          <PrivateRoute path="/manage-all-tours">
            <ManageAllTours></ManageAllTours>
          </PrivateRoute>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
