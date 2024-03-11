import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import EmpListing from './EmpListing';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Home></Home>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/employee' element={<EmpListing />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
