import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Empdata from './Empdata';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addemp from './Addemp';
import Viewemp from './Viewemp';
import Editemp from './Editemp';
function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Link to={'/'}><h2 className='text-bold bg-primary text-light'>Crud App</h2></Link>
      <Routes>
        <Route path='/' element={<Empdata/>}></Route>
        <Route path='/addemp' element={<Addemp/>}></Route>
        <Route path='/viewemp/:viewID' element={<Viewemp/>}></Route>
        <Route path='/editemp/:editID' element={<Editemp/>}></Route>
      </Routes>
     </BrowserRouter>
     <h3>Remaining Part of this Site behalf of routers</h3>
     <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'></img>
    </div>
  );
}

export default App;
