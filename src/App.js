import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apage from './Apage';
import Bpage from './Bpage';
import Cpage from './Cpage';
import Dpage from './Dpage';
import Reservation from './Reservation';
import ScrollToTop from './components/ScrollToTop';
import Modal from 'react-modal';
import Hosting from './Hosting';

import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "./reducer/LoginReducer";

Modal.setAppElement('#root');

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const savedPassword= localStorage.getItem("password");
    
    if(savedPassword !== null){
      const isLogin = true;
      dispatch(LoginAction(
        {isLogin},
        ),
    );
    }
}, []);

  return (
    <div className="App">
      
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Apage />}/>
          <Route path="/bPage" element={<Bpage />}/>
          <Route path="/cPage/:id" element={<Cpage/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/dPage" element={<Dpage/>}></Route>
          <Route path="/hosting" element={<Hosting/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
