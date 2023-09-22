// import React from "react";

interface PresensiData {
  id: number;
  nama_lengkap: string;
  date: string;
  jam_masuk: string;
  jam_keluar: string;
  check_in: string;
  check_out: string;
  overtime_masuk: string;
  overtime_keluar: string;
}

interface TablePresensiProps {
  data: PresensiData[];
}

const TablePresensi: React.FC<TablePresensiProps> = ({ data }) => {
  return (
    <div className="container mx-auto mt-4 bg-white p-2 rounded-lg shadow ">
      <table className="min-w-full table-auto bg-white text-sm">
        <thead className="bg-sky-900">
          <tr className="text-white">
            <th className="px-2 py-2">No</th>
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
          {data.map((item: any, index: any) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 font-semibold text-center">
                {item.nama_lengkap}
              </td>
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center">{item.date}</td>
              <td className="px-4 py-2 text-center">{item.jam_masuk}</td>
              <td className="px-4 py-2 text-center">{item.jam_keluar}</td>
              <td className="px-4 py-2 text-center">{item.check_in}</td>
              <td className="px-4 py-2 text-center">{item.check_out}</td>
              <td className="px-4 py-2 text-center">{item.overtime_masuk}</td>
              <td className="px-4 py-2 text-center">{item.overtime_keluar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePresensi;
