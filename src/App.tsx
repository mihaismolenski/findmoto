import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Admin from './features/admin/Admin';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
