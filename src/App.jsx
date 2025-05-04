import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import Portfolio from './pages/portfolio';
import InProgress from './pages/inprogress';
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<InProgress />} />
          <Route path="/portfolio" element={<InProgress />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;