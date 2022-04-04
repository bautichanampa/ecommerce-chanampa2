
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import SobreNosotrosPage from './pages/SobreNosotrosPage'
import NotFound from './pages/NotFound'
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';


function App() {
  return (
    <>
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/contacto' element={<ContactPage/>}/>
          <Route path='/sobreNosotros' element={<SobreNosotrosPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos/:id' element={<ProductDetailPage/>}/>
          <Route path='/categorys/:category' element={<CategoryPage/>}/>
          
          <Route path='*' element={<NotFound/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  );
}

export default App;
