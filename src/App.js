import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Hero from './components/Hero';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './projects/Calculator';

function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/slugs/:name/:mango' element={<Hero/>} />
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
    </div>
  );
}

export default App;


//make sure notfound is last page in routes