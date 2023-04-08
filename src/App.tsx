import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Admin from './features/admin/Admin';
import Header from './features/header/Header';
import Search from './features/search/Search';
import Compare from './features/compare/Compare';
import useLoadDataFromJson from './hooks/useLoadDataFromJson';
import { MotorcycleData } from './types/motorcycle-data';
import ContactUs from './features/contact-us/ContactUs';
import Footer from './features/footer/Footer';
import Terms from './features/terms/terms';
import PrivacyPolicy from './features/privacy/privacy';

export interface MotorcycleDataProps {
  data: MotorcycleData[];
  types: string[];
}

export const App = () => {
  const [data, types] = useLoadDataFromJson();

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} types={types} />} />
          <Route path="/search" element={<Search data={data} types={types} />} />
          <Route path="/compare" element={<Compare data={data} types={types} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
