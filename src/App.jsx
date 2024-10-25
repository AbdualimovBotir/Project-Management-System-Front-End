import './App.css'; // CSS faylini import qilish
import { Home } from './pages/Home/Home'; // Home sahifasini import qilish
import { Navbar } from './pages/Navbar/Navbar'; // Navbar komponentini import qilish
import { Routes, Route } from 'react-router-dom'; // react-router-dom kutubxonasidan Routes va Route import qilish
import { ProjectDetails } from './pages/ProjectDetalis/ProjectDetails'; // ProjectDetails sahifasini import qilish
import { IssueDetails } from './pages/IssueDetalis/IssueDetalis'; // IssueDetails sahifasini import qilish
import SubScription from './pages/SubScription/SubScription'; // SubScription sahifasini import qilish
import Auth from './pages/Auth/Auth'; // Auth sahifasini import qilish

function App() {
  // Autentifikatsiya holatini tekshiradigan o'zgaruvchi
  const isAuthenticated = true
  ; // Bu holatni haqiqiy autentifikatsiya holati bilan almashtiring

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Navbar /> {/* Navbar komponentini ko'rsatish */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home sahifasi */}
            <Route path="/project/:id" element={<ProjectDetails />} /> {/* ProjectDetails sahifasi, id parametrini qabul qiladi */}
            <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} /> {/* IssueDetails sahifasi, projectId va issueId parametrlarini qabul qiladi */}
            <Route path="/upgrade_plan" element={<SubScription />} /> {/* SubScription sahifasi */}
          </Routes>
        </div>
      ) : (
        <Auth /> 
      )}
    </>
  );
}

export default App; 
