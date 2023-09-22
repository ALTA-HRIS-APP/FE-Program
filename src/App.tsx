import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "./pages/Login";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Presensi from "./pages/Presensi/Presensi";
import TimeOff from "./pages/TimeOff/TimeOff";
import Reimbursement from "./pages/Reimbursement/Reimbursement";
import Target from "./pages/Target/Target";
import Employe from "./pages/Employe/Employe";
import IndexRole from "./pages/RoleManagement/IndexRole";
import AddRole from "./pages/RoleManagement/AddRole";
import EditRole from "./pages/RoleManagement/EditRole";
import IndexUser from "./pages/UserManagement/IndexUser";
import UserReimbursement from "./pages/Reimbursement/UserReimbursement";
import AddUser from "./pages/UserManagement/AddUser";
import DetailUser from "./pages/UserManagement/DetailUser";
import EditUser from "./pages/UserManagement/EditUser";
import EmployeeLevel from "./pages/EmployeeLevel/indexEmployeeLevel";
<<<<<<< HEAD
import AddEmployeeLevel from "./pages/EmployeeLevel/AddEmployeeLevel";
import AddTimeOff from "./pages/TimeOff/AddTimeOff";
=======
import EditEmployeeLevel from "./pages/EmployeeLevel/EditEmployeeLevel";
import IndexDevisi from "./pages/DevisiManagement/IndexDevisi";
import TambahDevisi from "./pages/DevisiManagement/TambahDevisi";
import EditDevisi from "./pages/DevisiManagement/EditDevisi";
>>>>>>> a9f36fb5be0802198530e269c50fb87a39fd3724

export default function App() {
  axios.defaults.baseURL = "https://project2.otixx.online/";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<IndexUser />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/DetailUser/:id" element={<DetailUser />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/Role" element={<IndexRole />} />
          <Route path="/AddRole" element={<AddRole />} />
          <Route path="/EditRole/:id" element={<EditRole />} />
          <Route path="/EmployeeLevel" element={<EmployeeLevel />} />
          <Route path="/EditEmployeeLevel/:id" element={<EditEmployeeLevel />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          <Route path="/Reimbursement" element={<Reimbursement />} />
          <Route path="/Reimbursement/:id" element={<UserReimbursement />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
          {/* <Route path="/AddEmploye" element={<AddEmploye />} /> */}
          <Route path="/Profile" element={<Profile />} />
<<<<<<< HEAD
          <Route path="/AddTimeOff" element={<AddTimeOff />} />
=======
          <Route path="/Devisi" element={<IndexDevisi />} />
          <Route path="/TambahDevisi" element={<TambahDevisi />} />
          <Route path="/EditDevisi/:id" element={<EditDevisi />} />
>>>>>>> a9f36fb5be0802198530e269c50fb87a39fd3724
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
