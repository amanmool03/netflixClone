import React, { useEffect } from 'react';
import './styles/main.scss'
import Home from './components/Home/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import { auth } from './components/firebase';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './components/Home/Profile';
import Detail from './components/Details/Detail';
import ScrollToTop from './hooks/ScrollToTop';
import MoviesList from './components/category/MoviesList';




function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // loggedin
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        // loged out

        dispatch(logout())

      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {
        !user
          ?
          <Landing /> :
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path='/profile' component={Profile} />
              <Route exact path="/" component={Home} />
              <Route path='/movies' component={MoviesList} />
              <Route path='/:id' component={Detail} />

            </Switch>
          </Router>
      }

    </div>
  );
}

export default App;
