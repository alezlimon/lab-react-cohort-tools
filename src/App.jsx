// Note: This is the main app. It sets up the routes for each page.
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
// Note: Import Routes and Route from react-router-dom
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      {/* Note: Set up routes for each page */}
      <div className="pages">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />
          {/* Student details route with param */}
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          {/* User profile route */}
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
