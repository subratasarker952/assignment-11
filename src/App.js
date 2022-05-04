import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Manageitem from './Components/Manageitems/Manageitem';
import Additem from './Components/Additem/Additem';
import Myitem from './Components/Myitems/Myitem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Private from './Components/Private/Private';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';




function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory/' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <Private> <Products></Products> </Private>}></Route>
        <Route path='/manageitems' element={
          <Private> <Manageitem></Manageitem></Private>}></Route>
        <Route path='/inventory/additem' element={
          <Private> <Additem></Additem></Private>}></Route>
        <Route path='/myitems' element={
          <Private> <Myitem></Myitem></Private>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
