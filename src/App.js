import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/reponsive.css';
import './assets/css/footer.css';
import './assets/css/main.css';
import './assets/css/filter.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Filter from './components/Filter/Filter';
import Search from './components/Search/search';
import HotLine from './components/Contact/hotline';
import FbContact from './components/Contact/fbcontact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/may-tinh-xach-tay" element={<Filter />} />
        <Route path="/tim-kiem" element={<Search />} />
      </Routes>
       
      <Footer />
      <HotLine />
      <FbContact />
    </Router>
  );
}

export default App;
