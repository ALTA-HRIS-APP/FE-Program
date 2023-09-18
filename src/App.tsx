import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./component/Layout";

import Dashboard from "./pages/Dashboard";
import Presensi from "./pages/Presensi";
import Request from "./pages/Request";
import Target from "./pages/Target";
import Employe from "./pages/Employe";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
