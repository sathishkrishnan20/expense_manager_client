import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Home from './screens/home';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
// import './App.css';
import './scss/style.scss'

function App() {
  //const Login = React.lazy(() => import('./screens/Login/Login'))
  // const Home = React.lazy(() => import('./screens/home/index'))
  
  return (
   
        
    
          <Routes>
            <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
            {/* 
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} /> 
            */}
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
  );
}

export default App;
