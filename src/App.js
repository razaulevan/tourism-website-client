import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details/Details';
import MyOrder from './Pages/MyOrder/MyOrder';
import AllOrder from './Pages/AllOrder/AllOrder';
import AddService from './Pages/AddService/AddService';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>

            </Route>
            <PrivateRoute path="/details/:serviceid">
              <Details></Details>

            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>

            </PrivateRoute>
            <PrivateRoute path="/allorder">
              <AllOrder></AllOrder>

            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>

            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
