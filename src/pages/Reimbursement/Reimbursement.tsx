import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/element/Button";
import Modal from "../../component/Modal";

const Reimbursement = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [popup, setPopup] = useState<Boolean>(false);

  const middleware = () => {
    if (token === undefined) {
      navigate("/");
    }
  };
  const addreimbursement = () => {
    setPopup(!popup);
  };

  const getalldata = () => {
    axios
      .get("/reimbursement", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getalldata();
  }, []);

  return (
    <section className="flex h-screen">
      <div className="container mx-auto mt-4">
        <div className="flex justify-end gap-x-5 mb-4">
          <input
            type="text"
            value={""}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Cari..."
          />
          <Button
            id="Add"
            label="Add New"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            onClick={() => addreimbursement()}
          />
        </div>
        <table className="min-w-full table-auto bg-white shadow text-left ">
          <thead className=" bg-sky-900">
            <tr className=" text-white ">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Reimbursement Types</th>
              <th className="px-4 py-2">Cash Out</th>
              <th className="px-4 py-2">Nominal</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Proofs</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="flex items-center justify-end m-5 gap-x-5">
          <Button
            id="Previous"
            label="Previous"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
          />
          <Button
            id="Next"
            label="Next"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            width="24"
          />
        </div>
      </div>
      <div>
        <Modal isOpen={popup} onClose={() => setPopup(false)}>
          <div className="w-[30vw] h-[90vh] flex flex-col">
            <div className="text-[24px] text-center font-semibold my-2">
              Add Reimbursement
            </div>
            <div className="flex flex-col mx-10">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Reimbursement Types
              </label>
              <input
                type="text"
                placeholder="Reimbursement Type"
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Cash Out Date
              </label>
              <input
                type="date"
                placeholder="14-09-2023"
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Nominal
              </label>
              <input
                type="number"
                placeholder="Rp 9.000.000"
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Description
              </label>
              <input
                type="text"
                placeholder="Description"
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Add File
              </label>
              <input
                type="file"
                placeholder="Add File"
                className="mt-1 mb-2 input input-bordered w-full max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="ms-[6vw] mt-1">
              <Button
                id="Add"
                label="Save"
                color="bg-sky-700"
                hover="hover: bg-sky-500"
                width="60"
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Reimbursement;
