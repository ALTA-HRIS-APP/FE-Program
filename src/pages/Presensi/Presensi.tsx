import React from "react";

import TablePresensi from "./TablePresensi";

const Presensi = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah
        </button>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Cari..."
        />
      </div>
      <TablePresensi />
    </div>
  );
};

export default Presensi;
