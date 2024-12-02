import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import About from './Pages/About';

function App() {
 return (
  <BrowserRouter>
    <div>
      <ul>
          <li>
              <Link to='/' >Home</Link>
          </li>
          <li>
              <Link to='/about' >About</Link>
          </li>
          <li>
              <Link to='/settings' >Settings</Link>
          </li>
      </ul>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  </BrowserRouter>
 )
}

export default App;
