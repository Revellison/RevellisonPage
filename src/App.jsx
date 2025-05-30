import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import Portfolio from './pages/portfolio';
import InProgress from './pages/inprogress';
import Header from './components/header';

const basename = import.meta.env.BASE_URL;

const appStyle = {
  color: '#ffffff', 
};

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div style={appStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<InProgress />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;