
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Products" element={<Products/>}></Route>
       <Route path="/Products/:id" element={<Product/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
