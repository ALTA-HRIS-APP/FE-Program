import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "./pages/Login";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Presensi from "./pages/Presensi/Presensi";
import TimeOff from "./pages/TimeOff/TimeOff";
import Remburse from "./pages/Rembursement/Remburse";
import Target from "./pages/Target/Target";
import Employe from "./pages/Employe/Employe";
import AddEmploye from "./pages/Employe/AddEmploye";
import IndexRole from "./pages/RoleManagement/IndexRole";
import IndexUser from "./pages/UserManagement/IndexUser";
import AddUser from "./pages/UserManagement/AddUser";
import DetailUser from "./pages/UserManagement/DetailUser";

export default function App() {
  axios.defaults.baseURL = "http://project2.otixx.online/";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<IndexUser />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/DetailUser/:id" element={<DetailUser />} />
          <Route path="/Role" element={<IndexRole />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          <Route path="/Remburse" element={<Remburse />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
          <Route path="/AddEmploye" element={<AddEmploye />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
