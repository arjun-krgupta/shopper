import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Laptop from './Pages/Laptop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Home from './Component/Home/Home';
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
import Men from './Pages/Men';
import Allen_Solly from './Pages/Allen_Solly';
import Mufti from './Pages/Mufti';
import Cobb from './Pages/Cobb';
import Adidas from './Pages/Adidas';
import Peter_England from './Pages/Peter_England';
import Nike from './Pages/Nike';
import Hoodie from './Pages/Men/Hoodie';
import Jeans from './Pages/Men/Jeans';
import Lower from './Pages/Men/Lower';
import Pant from './Pages/Men/Pant';
import Shirt from './Pages/Men/Shirt';
import TShirt from './Pages/Men/Tshirt';
import Lehenga from './Pages/Women/Lehenga';
import Gown from './Pages/Women/Gown'
import One_Piece from './Pages/Women/One_Piece'
import Salwar_suit from './Pages/Women/Salwar_suit';
import Suit from './Pages/Women/Suit';
import T_Shirt from './Pages/Women/T_Shirt';


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
        <Route path='/allen_solly' element={<Allen_Solly/>} /> 
        <Route path='/mufti' element={<Mufti/>} /> 
        <Route path='/cobb' element={<Cobb/>} /> 
        <Route path='/adidas' element={<Adidas/>} /> 
        <Route path='/peter_england' element={<Peter_England/>} /> 
        <Route path='/nike' element={<Nike/>} /> 
        <Route path='/hoodie' element={<Hoodie/>} />
        <Route path='/jeans' element={<Jeans/>} />
        <Route path='/lower' element={<Lower/>} />
        <Route path='/pant' element={<Pant/>} />
        <Route path='/shirt' element={<Shirt/>} />
        <Route path='/t-shirt' element={<TShirt/>} />
        <Route path='/lehenga' element={<Lehenga/>} />
        <Route path='/gown' element={<Gown/>} />
        <Route path='/one-piece' element={<One_Piece/>} />
        <Route path='/suit-salwar' element={<Salwar_suit/>} />
        <Route path='/suit' element={<Suit/>} />
        <Route path='/tshirt' element={<T_Shirt/>} />
     </Routes>
     </BrowserRouter>
     </>
    );
}

export default App;