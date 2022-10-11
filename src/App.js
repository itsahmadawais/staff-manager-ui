import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import { getRoutes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
