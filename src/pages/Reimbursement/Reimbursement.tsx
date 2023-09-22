import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/element/Button";
import Modal from "../../component/Modal";
import Table from "../../component/Tablereim";
import Swal from "sweetalert2";

const Reimbursement = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [popup, setPopup] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<boolean>();

  //search
  const [dataSearch, setSearchData] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const middleware = () => {
    if (token === undefined) {
      navigate("/");
    }
  };
  const addreimbursement = () => {
    setPopup(!popup);
  };
  const nextPage = () => {
    if (pages === true) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getalldata = () => {
    axios
      .get(`/reimbursements?page=${page}&itemsPerPage=8`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setData(res.data.data);
        setPages(res?.data?.next_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleapprove = (id: number | string) => {
    axios
      .put(
        `/reimbursements/${id}`,
        {
          persetujuan: "Accepted",
          status: "Done",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success Accept Reimbursement",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlereject = (id: number | string) => {
    axios
      .put(
        `/reimbursements/${id}`,
        {
          persetujuan: "Rejected",
          status: "Done",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success Reject Reimbursement",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearch = () => {
    axios
      .get(`/reimbursements?searchName=${search}&page=${page}&itemsPerPage=8`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSearchData(res?.data?.data);
        setData(res.data.data);
        setPages(res?.data?.next_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getalldata();
    middleware();
  }, [page, token]);

  return (
    <section className="flex h-full">
      <div className="container mx-auto mt-4">
        <div className="flex justify-end gap-x-5 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Cari..."
          />
          <Button
            id="Search"
            label="Search"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            onClick={() => handleSearch()}
          />
          <Button
            id="Add"
            label="Add New"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            onClick={() => addreimbursement()}
          />
        </div>
        <table className="min-w-full overflow bg-white shadow text-left text-xs">
          <thead className=" bg-sky-900">
            <tr className=" text-white text-center">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Reimbursement Types</th>
              <th className="px-4 py-2">Cash Out</th>
              <th className="px-4 py-2">Nominal</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Proofs</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Persetujuan</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataSearch.length > 0
              ? dataSearch.map((item: any, index: any) => (
                  <Table
                    key={index}
                    id={index + 1}
                    fullname={item.user?.name}
                    reimbusement_type={item?.tipe}
                    cash_out={item?.date}
                    nominal={item?.nominal}
                    description={item?.description}
                    proofs={item?.url_bukti}
                    status={item?.status}
                    persetujuan={item?.persetujuan}
                    onClick={() => handlereject(item?.id)}
                    onEdit={() => handleapprove(item?.id)}
                  />
                ))
              : data.map((item: any, index: any) => (
                  <Table
                    key={index}
                    id={index + 1}
                    fullname={item?.user?.name}
                    reimbusement_type={item?.tipe}
                    cash_out={item?.date}
                    nominal={item?.nominal}
                    description={item?.description}
                    proofs={item?.url_bukti}
                    status={item?.status}
                    persetujuan={item?.persetujuan}
                    onClick={() => handlereject(item?.id)}
                    onEdit={() => handleapprove(item?.id)}
                  />
                ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end m-5 gap-x-5">
          <Button
            id="Previous"
            label="Previous"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            width="36"
            onClick={() => prevPage()}
          />
          <Button
            id="Next"
            label="Next"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            width="36"
            onClick={() => nextPage()}
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
