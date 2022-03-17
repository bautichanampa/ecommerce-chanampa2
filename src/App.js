
import './App.css';

import NavBar from './components/navBar/navBar';
import ListProducts from './components/listProducts/listProducts';


function App() {
  return (
    <>
    <header>
      <div className="App">
        <NavBar />
      </div>
    </header>
    <body>
        <div>
          <ListProducts/>
        </div>
    </body>
    </>
    
  );
}

export default App;
