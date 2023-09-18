import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import SideBar from "./component/SideBar"
import IndexUser from "./pages/UserManagement/IndexUser"
import AddUser from "./pages/UserManagement/AddUser"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/SideBar" element={<SideBar />} />
      <Route path="/User" element={<IndexUser />} />
      <Route path="/AddUser" element={<AddUser />} />
    </Routes>
    </BrowserRouter>
  )
}