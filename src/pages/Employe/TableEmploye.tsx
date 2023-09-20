import { useState, useEffect } from "react";
import axios from "axios";

const TableEmploye = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://virtserver.swaggerhub.com/BE-18/ABSENSI/1.0.0/absensis"
      );
      setData(response.data.data); // Ganti "response.data" menjadi "response.data.data" sesuai dengan struktur data yang diterima
    } catch (error) {
      console.error("Gagal mengambil data dari API: ", error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <table className="min-w-full table-auto bg-white shadow text-sm">
        <thead className="bg-sky-900">
          <tr className="text-white">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">No NIK</th>
            <th className="px-4 py-2">File KK</th>
            <th className="px-4 py-2">No NPWP</th>
            <th className="px-4 py-2">File NPWP</th>
            <th className="px-4 py-2">No BPJS</th>
            <th className="px-4 py-2">File BPJS</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <div className="flex gap-3 items-center font-semibold">
                  <img
                    src="src/assets/person.png"
                    className="rounded-full w-10 h-10"
                    alt="Person"
                  />
                  {item.full_name ? item.full_name : "N/A"}
                </div>
              </td>
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center">{item.date}</td>
              <td className="px-4 py-2 text-center">{item.jam_masuk}</td>
              <td className="px-4 py-2 text-center">{item.jam_keluar}</td>
              <td className="px-4 py-2 text-center">{item.check_in}</td>
              <td className="px-4 py-2 text-center">{item.check_out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEmploye;
