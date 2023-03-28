import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { AdminContext, LoggedInUserContext } from "./Contexts/Contexts";
import Home from "./HomePage/Home/Home";
import Login from "./LoginPage/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const MakeAdmin = lazy(() => import("./DashboardPage/MakeAdmin/MakeAdmin"));
const ShowAllOrders = lazy(() => import("./DashboardPage/ShowAllOrders/ShowAllOrders"));
const ServiceList = lazy(() => import("./DashboardPage/ServiceList/ServiceList"));
const AddService = lazy(() => import("./DashboardPage/AddService/AddService"));
const CustomerReview = lazy(() => import("./DashboardPage/CustomerReview/CustomerReview"));
const DashboardOrder = lazy(() => import("./DashboardPage/DashboardOrder/DashboardOrder"));


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
              <Suspense fallback={<Loader />}>
                <DashboardOrder />
              </Suspense>
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/serviceList" element={
            <PrivateRoute isSignedIn={user}>
              <Suspense fallback={<Loader />}>
                <ServiceList />
              </Suspense>
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/review" element={
            <PrivateRoute isSignedIn={user}>
              <Suspense fallback={<Loader />}>
                <CustomerReview />
              </Suspense>
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/makeAdmin" element={
            <PrivateRoute isSignedIn={user}>
              <Suspense fallback={<Loader />}>
                <MakeAdmin />
              </Suspense>
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/allOrders" element={
            <PrivateRoute isSignedIn={user}>
              <Suspense fallback={<Loader />}>
                <ShowAllOrders />
              </Suspense>
            </PrivateRoute>
          }
          />

          <Route path="/dashboard/addService" element={
            <PrivateRoute isSignedIn={user}>
              <Suspense fallback={<Loader />}>
                <AddService />
              </Suspense>
            </PrivateRoute>
          }
          />


        </Routes>

      </AdminContext.Provider>
    </LoggedInUserContext.Provider>
  );
}

export default App;
