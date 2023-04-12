import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import Admin from "./features/admin/Admin";
import Header from "./features/header/Header";
import Search from "./features/search/Search";
import Compare from "./features/compare/Compare";
import ContactUs from "./features/contact-us/ContactUs";
import Footer from "./features/footer/Footer";
import Terms from "./features/terms/terms";
import PrivacyPolicy from "./features/privacy/privacy";
import useLoadTypesFromApi from "./hooks/useLoadTypesFromApi";

export const App = () => {
  const [types] = useLoadTypesFromApi();

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home types={types} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Compare />} />
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
};

export default App;
