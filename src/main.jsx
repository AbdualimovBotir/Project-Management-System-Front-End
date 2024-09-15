import { StrictMode } from 'react'; // React komponentlarini qat'iy holatda ishlatish
import { createRoot } from 'react-dom/client'; // React DOM uchun root yaratish
import App from './App.jsx'; // Asosiy App komponentini import qilish
import './index.css'; // Boshqaruv CSS faylini import qilish
import { BrowserRouter } from 'react-router-dom'; // React Router uchun BrowserRouter import qilish
import { Provider } from 'react-redux'; // Redux Provider import qilish
import { store } from './Redux/Store.js'; // Redux store-ni import qilish

// React DOM uchun root yaratish va App komponentini render qilish
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> {/* Asosiy App komponentini render qilish */}
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
