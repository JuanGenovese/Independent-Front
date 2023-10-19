import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/indexViews';
import { NavBar } from './components/IndexComponents';

function App() {

  return (
    <div className="background-shadow">
      <img src="/fondo2.jpg" className="background-image"></img>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
