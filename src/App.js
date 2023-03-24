import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoggedInUserContext } from "./Contexts/Contexts";
import Dashboard from "./DashboardPage/Dashboard/Dashboard";
import Home from "./HomePage/Home/Home";
import Login from "./LoginPage/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {

  const [user, setUser] = useState(null);

  return (
    <LoggedInUserContext.Provider value={[user, setUser]}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute isSignedIn={user}>
            <Dashboard />
          </PrivateRoute>
        }
        />
      </Routes>

    </LoggedInUserContext.Provider>
  );
}

export default App;
