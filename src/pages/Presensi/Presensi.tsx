import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import TablePresensi from "./TablePresensi";

const Presensi = () => {
  const [cariNama, setCariNama] = useState("");
  const [tanggalFilter, setTanggalFilter] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://virtserver.swaggerhub.com/BE-18/ABSENSI/1.0.0/absensis"
      );
      setData(response.data.data);
      setFilteredData(response.data.data);
    } catch (error: any) {
      console.error("Gagal memuat data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCari = (e) => {
    const keyword = e.target.value;
    setCariNama(keyword);
    filterData(keyword, tanggalFilter);
  };

  const handleFilterTanggal = () => {
    filterData(cariNama, tanggalFilter);
  };

  const filterData = (keyword, tanggal) => {
    let filteredData = data;

    if (keyword) {
      filteredData = data.filter((item) =>
        item.full_name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (tanggal) {
      const dateString = tanggal.toDateString();
      filteredData = data.filter(
        (item) => new Date(item.date).toDateString() === dateString
      );
    }

    setFilteredData(filteredData);
  };

  return (
    <div>
      <div className="flex justify-between gap-2 items-center my-10">
        <div className="flex gap-2 items-center">
          <DatePicker
            selected={tanggalFilter}
            onChange={(date) => setTanggalFilter(date)}
            placeholderText="Pilih Tanggal"
            dateFormat="dd/MM/yyyy"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          <button
            onClick={handleFilterTanggal}
            className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
          >
            <i className="fas fa-calendar"></i>{" "}
            <img src="src\assets\Search.svg" alt="Search" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Cari Nama"
            value={cariNama}
            onChange={handleCari}
          />
        </div>
      </div>
      <TablePresensi data={filteredData} />
    </div>
  );
};

export default Presensi;
