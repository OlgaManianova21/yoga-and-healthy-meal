import Footer from './Footer/Footer';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './Header/Header';
import Home from './Home/Home';
import Workout from './Exercises/Workout';
import Recipies from './Recipies/Recipies';
import ToDoList from './Food/ToDoList';
import WhatToBuy from './WhatToBuy/WhatToBuy';


function App() {

  return ( <div>
    <Router>

      <Header/>

    <Routes>
<Route path= "/" element={<Home />} />
<Route path= "/food" element={<ToDoList />} />
<Route path= "/recipies" element={<Recipies />} />
<Route path= "/exercises" element={<Workout />} />
<Route path= "/whattobuy" element={<WhatToBuy />} />
   </Routes>
   </Router>

   
    <Footer/>
  
    </div>
    );
}

export default App;
