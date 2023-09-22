import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

import Presensi from "./pages/Presensi/Presensi";
import TimeOff from "./pages/TimeOff/TimeOff";
import Reimbursement from "./pages/Reimbursement/Reimbursement";
import Target from "./pages/Target/Target";
import Employe from "./pages/Employe/Employe";
import IndexRole from "./pages/RoleManagement/IndexRole";
import IndexUser from "./pages/UserManagement/IndexUser";
import UserReimbursement from "./pages/Reimbursement/UserReimbursement";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = "https://hris.belanjalagiyuk.shop/";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<IndexUser />} />
          <Route path="/Role" element={<IndexRole />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          <Route path="/Reimbursement" element={<Reimbursement />} />
          <Route path="/Reimbursement/:id" element={<UserReimbursement />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
