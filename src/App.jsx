import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Laptop from './Pages/Laptop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Home from './Component/Home/Home';
import Men from './Pages/Men'
import Women from './Pages/Women'
import Mobile from './Pages/Mobile'
import Realme from './Pages/Mobile/Realme'
import Vivo from './Pages/Mobile/Vivo'
import Samsung from './Pages/Mobile/Samsung'
import Poco from './Pages/Mobile/Poco';
import Oppo from './Pages/Mobile/Oppo';
import Iphone from './Pages/Mobile/Iphone';
import Hp from './Pages/Laptop/Hp';
import Dell from './Pages/Laptop/Dell';
import Lenovo from './Pages/Laptop/Lenovo';
import Asus from './Pages/Laptop/Asus';
import Apple from './Pages/Laptop/Apple';
import Acer from './Pages/Laptop/Acer';
import Slider from './Component/Slider';


function App(props) {
    return (
     <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path='/laptop' element={<Laptop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/realme' element={<Realme/>} />
        <Route path='/vivo' element={<Vivo/>} />
        <Route path='/poco' element={<Poco/>} />
        <Route path='/samsung' element={<Samsung/>} />
        <Route path='/oppo' element={<Oppo/>} />
        <Route path='/iphone' element={<Iphone/>} />
        <Route path='/hp' element={<Hp/>} />
        <Route path='/dell' element={<Dell/>} />
        <Route path='/lenovo' element={<Lenovo/>} />
        <Route path='/asus' element={<Asus/>} />
        <Route path='/apple' element={<Apple/>} />
        <Route path='/acer' element={<Acer/>} />
        <Route path='/slider' element={<Slider/>} /> 
     </Routes>
     </BrowserRouter>
     </>
    );
}

export default App;