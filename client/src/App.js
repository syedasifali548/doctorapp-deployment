import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux';
import { alertSlice } from './redux/features/alertSlice';
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";


function App() {
const {loading} = useSelector((state)=>state.alerts)
  
 
  return (
    <>
    {loading ? (<Spinner/>):(
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={
          <ProtectedRoute>
            <HomePage/>
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
