import { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      src: "person",
      fullName: "John Doe",
      employeId: "DEMO001",
      date: "14/06/22",
      ScheduleIn: "08:30",
      ScheduleOut: "16:30",
      ClockIn: "08:00",
      ClockOut: "15:00",
      Overtime: "30 Menit",
    },
    {
      id: 2,
      src: "person",
      fullName: "Jehny Doe",
      employeId: "DEMO002",
      date: "14/06/22",
      ScheduleIn: "08:30",
      ScheduleOut: "16:30",
      ClockIn: "08:00",
      ClockOut: "15:00",
      Overtime: "30 Menit",
    },
    {
      id: 3,
      src: "person",
      fullName: "Jihn Doe",
      employeId: "DEMO003",
      date: "14/06/22",
      ScheduleIn: "08:30",
      ScheduleOut: "16:30",
      ClockIn: "08:00",
      ClockOut: "15:00",
      Overtime: "30 Menit",
    },
    {
      id: 4,
      src: "person",
      fullName: "Juny Doe",
      employeId: "DEMO004",
      date: "14/06/22",
      ScheduleIn: "08:30",
      ScheduleOut: "16:30",
      ClockIn: "08:00",
      ClockOut: "15:00",
      Overtime: "30 Menit",
    },
  ]);

  return (
    <div className="container mx-auto mt-4">
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
      <table className="min-w-full table-auto bg-white shadow  ">
        <thead className=" bg-sky-900">
          <tr className=" text-white ">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Employe Name</th>
            <th className="px-4 py-2">Employe ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Schedule In</th>
            <th className="px-4 py-2">Schedule Out</th>
            <th className="px-4 py-2">Clock In</th>
            <th className="px-4 py-2">Clock Out</th>
            <th className="px-4 py-2">Over Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className=" px-4 py-2">{item.id}</td>
              <td className="px-4 py-2 ">
                <div className="flex gap-3 items-center font-semibold">
                  <img
                    src="src\assets\person.png"
                    className=" rounded-full w-10 h-10"
                    alt="Person"
                  />
                  {item.fullName}
                </div>
              </td>
              <td className="px-4 py-2 text-center">{item.employeId}</td>
              <td className=" px-4 py-2 text-center">{item.date}</td>
              <td className=" px-4 py-2 text-center">{item.ScheduleIn}</td>
              <td className=" px-4 py-2 text-center">{item.ScheduleOut}</td>
              <td className=" px-4 py-2 text-center">{item.ClockIn}</td>
              <td className=" px-4 py-2 text-center">{item.ClockOut}</td>
              <td className=" px-4 py-2 text-center">{item.Overtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
