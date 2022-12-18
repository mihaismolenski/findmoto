import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Admin from './features/admin/Admin';
import Header from './features/header/Header';
import Search from './features/search/Search';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
