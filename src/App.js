import './App.css';
import Footer from './Sheard/Footer/Footer';
import Header from './Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import NotFound from './Pages/NotFound/NotFound';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequerAuth from './Pages/RequerAuth/RequerAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/shop/:product' element={<Shop></Shop>}></Route>
          <Route path='/about' element={
            <RequerAuth>
              <About></About>
            </RequerAuth>
        }></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/singup' element={<Singup></Singup>}></Route>
          <Route path='/checkout' element={
            <RequerAuth>
              <CheckOut></CheckOut>
            </RequerAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
