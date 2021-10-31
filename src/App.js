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
import AddTours from './pages/AddTours/AddTours';
import MyTours from './pages/MyTours/MyTours';
import TourBook from './pages/TourBook/TourBook';
import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery/Gallery';
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
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/my-tours">
            <MyTours></MyTours>
          </PrivateRoute>
          <PrivateRoute path="/tour-book/:tourId">
            <TourBook></TourBook>
          </PrivateRoute>
          <PrivateRoute path="/manage-all-tours">
            <ManageAllTours></ManageAllTours>
          </PrivateRoute>
          <PrivateRoute path="/add-tours">
            <AddTours></AddTours>
          </PrivateRoute>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
