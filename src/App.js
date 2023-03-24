import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoggedInUserContext } from "./Contexts/Contexts";
import Home from "./HomePage/Home/Home";
import Login from "./LoginPage/Login/Login";


function App() {

  const [user, setUser] = useState(null);

  return (
    <LoggedInUserContext.Provider value={[user, setUser]}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </LoggedInUserContext.Provider>
  );
}

export default App;
