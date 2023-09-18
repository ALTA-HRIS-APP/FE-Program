import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

import Presensi from "./pages/Presensi/Presensi";
import TimeOff from "./pages/TimeOff/TimeOff";
import Remburse from "./pages/Rembursement/Remburse";
import Target from "./pages/Target/Target";
import Employe from "./pages/Employe/Employe";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Presensi" element={<Presensi />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          <Route path="/Remburse" element={<Remburse />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Employe" element={<Employe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
