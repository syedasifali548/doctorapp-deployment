import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux';
import { alertSlice } from './redux/features/alertSlice';
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from "./pages/NotificationPage";
import Doctors from './pages/admin/Doctors';
import Users from './pages/admin/Users';
import Profile from "./pages/Doctor/Profile";
import Home from "./pages/Home";
import BookingPage from './pages/BookingPage';


function App() {
const {loading} = useSelector((state)=>state.alerts)
  
 
  return (
    <>
    {loading ? (<Spinner/>):(
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>}/>
          <Route path="/apply-doctor"  element={
          <ProtectedRoute>
            <ApplyDoctor/>
          </ProtectedRoute>}/>
          <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
          <Route path="/admin/doctors"  element={
          <ProtectedRoute>
            <Doctors/>
          </ProtectedRoute>}/>
          <Route path="/admin/users"  element={
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>}/>
          <Route path="/notification"  element={
          <ProtectedRoute>
            <NotificationPage/>
          </ProtectedRoute>}/>
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          
          }/>
          <Route path="/register" element={
            <PublicRoute>
              <Register /> 
            </PublicRoute>
          }/>
        </Routes>
      </BrowserRouter>
    )}
      <ToastContainer />
    </>
  );
}

export default App;
