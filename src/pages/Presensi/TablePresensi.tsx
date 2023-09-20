import { useState, useEffect } from "react";
import axios from "axios";

const TablePresensi = () => {
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
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <table className="min-w-full table-auto bg-white shadow text-sm">
        <thead className="bg-sky-900">
          <tr className="text-white">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Employee ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Schedule In</th>
            <th className="px-4 py-2">Schedule Out</th>
            <th className="px-4 py-2">Clock In</th>
            <th className="px-4 py-2">Clock Out</th>
            <th className="px-4 py-2">Overtime In</th>
            <th className="px-4 py-2">Overtime Out</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <div className="flex gap-3 items-center font-semibold">
                  <img
                    src="src/assets/person.png" // Ganti backslash menjadi slash ("/") untuk path gambar
                    className="rounded-full w-10 h-10"
                    alt="Person"
                  />
                  {item.full_name}
                </div>
              </td>
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center">{item.date}</td>
              <td className="px-4 py-2 text-center">{item.jam_masuk}</td>
              <td className="px-4 py-2 text-center">{item.jam_keluar}</td>
              <td className="px-4 py-2 text-center">{item.check_in}</td>
              <td className="px-4 py-2 text-center">{item.check_out}</td>
              <td className="px-4 py-2 text-center">{item.overtime_masuk}</td>
              <td className="px-4 py-2 text-center">{item.overtme_keluar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePresensi;
