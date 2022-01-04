import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landingpage from './LandingPage/landing_page';
import Postview from './PostView/post_view';

function App() {
  return (

    <div className="Wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/postViewPage" element={<Postview />}/>
          
        </Routes>

      </BrowserRouter>

      
    </div>

);
}

export default App;
