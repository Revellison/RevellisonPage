import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;