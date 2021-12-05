import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Main/Main';
import Movie from './pages/Movie/Movie';
import MovieList from './pages/MovieList/MovieList';
import Page404 from './pages/Page404/Page404';
import './App.sass';

function App() {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef(null);

  const handlePageScroll = (e) => {
    if (e.target.scrollTop > 120) {
      setNavbarVisibility(true);
    } else {
      setNavbarVisibility(false);
    }
  }

  useEffect(() => {
    if(wrapperRef && wrapperRef.current){
      wrapperRef.current.scrollTop = 0;
    }
  }, [location])

  return (
    <div className="app-wrapper" onScroll={handlePageScroll} ref={wrapperRef}>
      <div className="app">
        <Navigation isVisible={isNavbarVisible}/>
        <Switch>
            <Route path="/" exact component={Main} ></Route>
            <Route path="/genre/:genre" exact component={MovieList} ></Route>
            <Route path="/overview/:media_type/:id" exact component={Movie} ></Route>
            <Route path="/404" component={Page404}/>
            <Route path="*">
              <Redirect to="/404"/>
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
