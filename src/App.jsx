import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import Portfolio from './pages/portfolio';
import InProgress from './pages/inprogress';
import Header from './components/header';

// Получаем базовый URL из конфигурации Vite
const basename = import.meta.env.BASE_URL;

// Стили для всего приложения
const appStyle = {
  color: '#ffffff', // Белый текст для темного фона
};

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div style={appStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<InProgress />} />
          <Route path="/portfolio" element={<InProgress />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;