import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface TimeOffData {
  id: string;
  user: {
    name: string;
  };
  tipe_cuti: string;
  start_cuti: string;
  end_cuti: string;
  jumlah_cuti: number;
  description: string;
  url_pendukung: string;
  status: string;
}

const TableTimeOff: React.FC = () => {
  const [data, setData] = useState<TimeOffData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbHMiOiJhZG1pbkBnbWFpbC5jb20iLCJpZCI6IjA5ZDc4Zjc2LTZjZTQtNDkxZC04YWE0LTdhZjgzMzRkNWU3OCIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNjk1MzgxOTQzLCJleHAiOjE2OTUzODU1NDN9.WLz7H9LX21P2BBzE43YW1HwqbtVlwR3V2BHvhKDDyT8";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse = await axios.get(
        "https://hris.belanjalagiyuk.shop/cutis",
        config
      );

      setData(response.data.data);
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
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Time Of Type</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Long Leave</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Proofs</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <div className="flex gap-3 items-center font-semibold">
                  {item.user.name ? item.user.name : "N/A"}
                </div>
              </td>
              <td className="px-4 py-2 text-center">{item.tipe_cuti}</td>
              <td className="px-4 py-2 text-center">{item.start_cuti}</td>
              <td className="px-4 py-2 text-center">{item.end_cuti}</td>
              <td className="px-4 py-2 text-center">{item.jumlah_cuti} hari</td>
              <td className="px-4 py-2 text-center">{item.description}</td>
              <td className="px-4 py-2 text-center">
                <a href={item.url_pendukung}>
                  <img src="src\assets\view.svg" alt="Proofs" />
                </a>
              </td>
              <td className="px-4 py-2 text-center">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTimeOff;
