import { Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home/Home";
import Login from "./LoginPage/Login/Login";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
