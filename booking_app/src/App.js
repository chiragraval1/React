import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import Nav from './Nav';
import Poster from './Poster';
import React from 'react';
const Header = React.lazy(()=>import('./Header'))

function App() {
  return (
    <div className="App">
              <React.Suspense fallback={<>Nav</>}><Header /></React.Suspense>
      <div className='top'>

        <Nav />
        <Poster />
      </div>
    </div>
  );
}

export default App;


// import React, { Suspense, lazy } from 'react';
// import Home from './Home';

// // Lazy load the LazyComponent
// const LazyComponent = lazy(() => import('./Lezy'));

// function App() {
//   return (
//     <div>
//       <Home />
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;