<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./component/Layout";

import Dashboard from "./pages/Dashboard";
import Presensi from "./pages/Presensi";
import Request from "./pages/Request";
import Target from "./pages/Target";
import Employe from "./pages/Employe";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import SideBar from "./component/SideBar"
import IndexUser from "./pages/UserManagement/IndexUser"
import AddUser from "./pages/UserManagement/AddUser"
>>>>>>> 14fb1648689e143e2e8146d73d92edcfac2745f8

export default function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
        </Routes>
      </Layout>
=======
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/SideBar" element={<SideBar />} />
      <Route path="/User" element={<IndexUser />} />
      <Route path="/AddUser" element={<AddUser />} />
    </Routes>
>>>>>>> 14fb1648689e143e2e8146d73d92edcfac2745f8
    </BrowserRouter>
  );
}
