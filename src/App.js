import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/reponsive.css';
import './assets/css/footer.css';
import './assets/css/main.css';
import './assets/css/filter.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Filter from './components/Filter/Filter';
import Search from './components/Search/search';
import HotLine from './components/Contact/hotline';
import FbContact from './components/Contact/fbcontact';
import Zalo from './components/Contact/zalo';
import Cart from './components/Contact/cart';
import Advise from './components/Contact/advise';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/may-tinh-xach-tay" element={<Filter />} />
        <Route path="/tim-kiem" element={<Search />} />
      </Routes>
      <Zalo />
      <Footer />
      <HotLine />
      <FbContact />
      <Cart />
      <Advise />
      
    </Router>
  );
}

export default App;
