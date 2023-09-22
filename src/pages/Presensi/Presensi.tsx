import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import TablePresensi from "./TablePresensi";
import Button from "../../components/element/Button";

interface PresensiData {
  full_name: string;
  date: string;
  // Sesuaikan dengan struktur data sebenarnya
}

const Presensi: React.FC = () => {
  const [cariNama, setCariNama] = useState<string>("");
  const [tanggalFilter, setTanggalFilter] = useState<Date | null>(null);
  const [data, setData] = useState<PresensiData[]>([]);
  const [filteredData, setFilteredData] = useState<PresensiData[]>([]);
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

  const handleCari = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setCariNama(keyword);
    filterData(keyword, tanggalFilter);
  };

  const handleFilterTanggal = () => {
    filterData(cariNama, tanggalFilter);
  };

  const filterData = (keyword: string, tanggal: Date | null) => {
    let filteredData: PresensiData[] = data;

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

  const handleAddPresensi = () => {
    navigate("/AddPresensi");
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
          <Button
            id="AddPresensi"
            label="Add Presensi"
            color="bg-sky-500"
            hover="bg-sky-700"
            onClick={handleAddPresensi}
            src={"adduser"}
          />
        </div>
      </div>
      <TablePresensi data={filteredData} />
    </div>
  );
};

export default Presensi;
