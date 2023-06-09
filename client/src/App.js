import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";
import DoctorsList from "./pages/Admin/DoctorsList";
import Userslist from "./pages/Admin/Userslist";
import Home from "./pages/Home";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="apply-doctor" element={<ApplyDoctor />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="admin/doctorslist" element={<DoctorsList />} />
            <Route path="admin/userslist" element={<Userslist />} />
            <Route path="home" element={<Home />} />
            <Route path="doctor/profile/:userId" element={<Profile />} />
            <Route path="book-appointment/:doctorId" element={<BookAppointment />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctor/appointments" element={<DoctorAppointments />} />
            <Route path="doctor/profile/:doctorId" element={<Profile />} />
            {/* <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="term-and-conditions" element={<TermAndContions />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
