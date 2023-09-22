import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/element/Button";
import Modal from "../../component/Modal";
import Tabletarget from "../../component/Tabletarget";
import Swal from "sweetalert2";

const Target = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [popup, setPopup] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<boolean>();
  const [division, setDivision] = useState<any>([]);
  const [, setDivisi] = useState<string>("");

  //add target
  const [konten, setKonten] = useState<string>("");
  const [date, setDate] = useState<string>("");

  // const user_id: string = "54396f94-07b8-4450-8105-7c4472bf8701";
  const devisi_id: string = "68a83bd8-a392-4877-b10f-f00251850cb8";
  const karyawan_id: string = "54396f94-07b8-4450-8105-7c4472bf8701";

  const middleware = () => {
    if (token === undefined) {
      navigate("/");
    }
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
  const addtarget = () => {
    setPopup(!popup);
  };

  const getalldata = () => {
    axios
      .get(`https://hris.belanjalagiyuk.shop/targets`, {
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
  const getdivisi = () => {
    axios
      .get(`https://project2.otixx.online/devisi`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setDivision(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleapprove = (id: number | string) => {
    const formData = new FormData();
    formData.append("status", "completed");
    axios
      .put(`https://hris.belanjalagiyuk.shop/targets/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success Accept Target",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handledelete = (id: number) => {
    axios
      .delete(`https://hris.belanjalagiyuk.shop/targets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success Deleted",
          text: "Success Deleted Target",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
        });
      });
  };

  const handlesubmit = () => {
    const formData = new FormData();
    formData.append("konten_target", konten);
    formData.append("devisi_id", devisi_id);
    formData.append("user_id_penerima", karyawan_id);
    formData.append("due_date", date);
    formData.append("status", "not completed");

    axios
      .post(
        "https://hris.belanjalagiyuk.shop/user/54396f94-07b8-4450-8105-7c4472bf8701/targets",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success add Target",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
          setPopup(!popup);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getalldata();
    getdivisi();
    middleware();
  }, [page]);
  return (
    <section className="flex h-full">
      <div className="container mx-auto mt-4">
        <div className="flex justify-end gap-x-5 mb-4">
          <input
            type="text"
            value=""
            // onChange={(e) => setSearch(e.target.value)}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Cari..."
          />
          <Button
            id="Search"
            label="Search"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            // onClick={() => handleSearch()}
          />
          <Button
            id="Add"
            label="Add New"
            color="bg-sky-700"
            hover="hover: bg-sky-500"
            onClick={() => addtarget()}
          />
        </div>
        <table className="min-w-full overflow bg-white shadow text-left text-xs">
          <thead className=" bg-sky-900">
            <tr className=" text-white text-center">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Division</th>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Target</th>
              <th className="px-4 py-2">Due Date</th>
              <th className="px-4 py-2">Proofs</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data &&
              data.map((item: any, index: any) => (
                <Tabletarget
                  key={index}
                  id={index + 1}
                  division={item?.devisi_id}
                  employee={item?.user_id_penerima}
                  date={item?.due_date}
                  target={item?.konten_target}
                  proofs={item?.url_bukti}
                  status={item?.status}
                  onEdit={() => handleapprove(item?.id)}
                  onClick={() => handledelete(item?.id)}
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
              Add Target
            </div>
            <div className="flex flex-col mx-10">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Division
              </label>
              <select
                className="border-sm rounded-xs focus:outline-none w-full bg-transparent"
                value={devisi_id} // Anda juga harus mengatur nilai (value) dari elemen select
                onChange={(e) => setDivisi(e.target.value)}
              >
                {division?.map((item: any, index: any) => (
                  <option key={index} value={item?.id}>
                    {item?.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Employee
              </label>
              <input
                type="text"
                placeholder="Employee"
                value={karyawan_id}
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Target
              </label>
              <input
                type="text"
                placeholder="Target"
                value={konten}
                onChange={(e) => setKonten(e.target.value)}
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="flex flex-col mx-10 mt-2">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Due Date
              </label>
              <input
                type="text"
                placeholder="14-09-2023"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none bg-white"
              />
            </div>
            <div className="ms-[6vw] mt-5">
              <Button
                id="Add"
                label="Save"
                color="bg-sky-700"
                hover="hover: bg-sky-500"
                width="60"
                onClick={() => handlesubmit()}
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Target;
