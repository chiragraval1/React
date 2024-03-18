import { Button } from 'react-bootstrap';
import './App.css';
import Head from './Head';

function App() {
  return (
    <div className="App">
      <div className='mainheading'>
        <p>AirBnb app logo</p>
        <Head />
        <div>
          <Button variant='primary'>Airbnb your home</Button>
          <Button><i class="fa-solid fa-earth-americas"></i></Button>
          <Button><i class="fa-solid fa-bars"></i>{"  "}<i class="fa-regular fa-user"></i></Button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
