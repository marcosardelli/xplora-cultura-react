import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>

    <Route index element={<HomePage />} />
    <Route path="community" element={<CommunityPage />} />
    <Route path="login" element={<LoginPage />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
