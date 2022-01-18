import Signup from "./components/signup";
import Login from "./components/login";
import UserHome from "./components/userhome";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userhome" element={<UserHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
