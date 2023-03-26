import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminContext, LoggedInUserContext } from "./Contexts/Contexts";
import CustomerReview from "./DashboardPage/CustomerReview/CustomerReview";
import DashboardOrder from "./DashboardPage/DashboardOrder/DashboardOrder";
import MakeAdmin from "./DashboardPage/MakeAdmin/MakeAdmin";
import ServiceList from "./DashboardPage/ServiceList/ServiceList";
import Home from "./HomePage/Home/Home";
import Login from "./LoginPage/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <LoggedInUserContext.Provider value={[user, setUser]}>
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard/order" element={
            <PrivateRoute isSignedIn={user}>
              <DashboardOrder />
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/serviceList" element={
            <PrivateRoute isSignedIn={user}>
              <ServiceList />
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/review" element={
            <PrivateRoute isSignedIn={user}>
              <CustomerReview />
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/makeAdmin" element={
            <PrivateRoute isSignedIn={user}>
              <MakeAdmin />
            </PrivateRoute>
          }
          />


        </Routes>

      </AdminContext.Provider>
    </LoggedInUserContext.Provider>
  );
}

export default App;
