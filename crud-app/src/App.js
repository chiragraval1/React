import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Empdata from './Empdata';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addemp from './Addemp';
function App() {
  return (
    <div className="App">
     <h2>Crud App</h2>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Empdata/>}></Route>
        <Route path='/addemp' element={<Addemp/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
