import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/userContext";
import NavBar from "./components/NavBar";

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>

    <Route index element={<HomePage />} />
    <Route path="EventPage" element={<EventPage />} />
    <Route path="CommunityPage" element={<CommunityPage />} />
    <Route path="LoginPage" element={<LoginPage />} />

    </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
