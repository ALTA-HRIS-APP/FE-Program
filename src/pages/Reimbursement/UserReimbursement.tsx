import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/element/Button";
import Modal from "../../component/Modal";
import Tableaddreim from "../../component/Tableaddreim";
import Swal from "sweetalert2";

const UserReimbursement = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [popup, setPopup] = useState<Boolean>(false);
  const [popupedit, setPopupedit] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<boolean>();

  //createreimburs
  const [type, setType] = useState<string>("");
  const [dates, setDate] = useState<Date | null>();
  const [nominal, setNominal] = useState<number | undefined>();
  const [description, setDescription] = useState<string>("");
  const [images, setImage] = useState<File | null>();

  //createeditreimburs
  const [edittype, setEdittype] = useState<string>("");
  const [editdates, setEditdate] = useState<Date | null>();
  const [editnominal, setEditnominal] = useState<number | undefined>();
  const [editdescription, setEditdescription] = useState<string>("");
  const [editimages, setEditimages] = useState<File | null>();
  const [editid, setEditid] = useState<string>("");

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

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.files;
    setImage(target?.[0]);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setNominal(isNaN(inputValue) ? undefined : inputValue);
  };

  const handledateedit = (date: Date | null) => {
    setEditdate(date);
  };

  const handlefileedit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.files;
    setEditimages(target?.[0]);
  };

  const handlenumberedit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setEditnominal(isNaN(inputValue) ? undefined : inputValue);
  };

  const addreimbursement = () => {
    setPopup(!popup);
  };

  const getalldata = () => {
    axios
      .get(
        `https://hris.belanjalagiyuk.shop/reimbursements?page=${page}&itemsPerPage=8`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        setData(res.data.data);
        setPages(res?.data?.next_page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getdatabyid = (id: string) => {
    axios
      .get(`https://hris.belanjalagiyuk.shop/reimbursements/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setEditid(id);
        setEdittype(res?.data.tipe);
        setEditdate(res?.data.date);
        setEditdescription(res?.data.description);
        setEditnominal(res?.data.nominal);
        setEditimages(res?.data.url_bukti);
        setPopupedit(!popupedit);
        getalldata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlesubmit = () => {
    const formData = new FormData();
    formData.append("image", images);
    formData.append("tipe", type);
    formData.append("date", dates);
    formData.append("nominal", nominal);
    formData.append("description", description);
    axios
      .post("https://hris.belanjalagiyuk.shop/reimbursements", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: response.data.message,
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

  const handlesubmitedit = () => {
    const formData = new FormData();
    formData.append("image", editimages);
    formData.append("tipe", edittype);
    formData.append("date", editdates);
    formData.append("nominal", editnominal);
    formData.append("description", editdescription);

    axios
      .put(
        `https://hris.belanjalagiyuk.shop/reimbursements/${editid}`,
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
          title: "Success Edited",
          text: "Success Edit Reimbursement",
          confirmButtonText: "OK",
        }).then(() => {
          setPopupedit(!popupedit);
          getalldata();
        });
      });
  };

  const handledelete = (id: number) => {
    axios
      .delete(`https://hris.belanjalagiyuk.shop/reimbursements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success Deleted",
          text: "Success Deleted Reimbursement",
          confirmButtonText: "OK",
        }).then(() => {
          getalldata();
        });
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
        <table className="min-w-full overflow bg-white shadow text-left text-xs">
          <thead className=" bg-sky-900">
            <tr className=" text-white text-center">
              <th className="px-4 py-2">No</th>
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
            {data &&
              data.map((item: any, index: any) => {
                return (
                  <Tableaddreim
                    key={index}
                    id={index + 1}
                    reimbusement_type={item?.tipe}
                    cash_out={item?.date}
                    nominal={item?.nominal}
                    description={item?.description}
                    proofs={item?.url_bukti}
                    status={item?.status}
                    persetujuan={item?.persetujuan}
                    onEdit={() => getdatabyid(item.id)}
                    onClick={() => handledelete(item?.id)}
                  />
                );
              })}
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
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                type="text"
                placeholder="Reimbursement Type"
                className="mt-1 input input-bordered rounded-sm w-full max-w-xs focus:outline-none bg-white"
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
                value={dates ? dates.toString().slice(0, 10) : ""}
                onChange={(e) => handleDateChange(new Date(e.target.value))}
                placeholder="14-09-2023"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
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
                value={nominal === undefined ? "" : nominal.toString()}
                onChange={handleNumberChange}
                min={1}
                max={5000000}
                placeholder="Rp 100.000"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
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
                name="image"
                onChange={handleFileChange}
                accept="image/png, image/jpg, image/jpeg,"
                placeholder="Add File"
                className="mt-1 mb-2 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="ms-[6vw] mt-1">
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
      <div>
        <Modal isOpen={popupedit} onClose={() => setPopupedit(false)}>
          <div className="w-[30vw] h-[90vh] flex flex-col">
            <div className="text-[24px] text-center font-semibold my-2">
              Edit Reimbursement
            </div>
            <div className="flex flex-col mx-10">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 text-left"
              >
                Reimbursement Types
              </label>
              <input
                id="type"
                value={edittype}
                onChange={(e) => setEdittype(e.target.value)}
                type="text"
                placeholder="Reimbursement Type"
                className="mt-1 input input-bordered rounded-sm w-full max-w-xs focus:outline-none bg-white"
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
                value={editdates ? editdates.toString().slice(0, 10) : ""}
                onChange={(e) => handledateedit(new Date(e.target.value))}
                placeholder="14-09-2023"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
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
                value={editnominal === undefined ? "" : editnominal.toString()}
                onChange={handlenumberedit}
                min={1}
                max={5000000}
                placeholder="100000"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
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
                value={editdescription}
                onChange={(e) => setEditdescription(e.target.value)}
                placeholder="Description"
                className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
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
                name="image"
                onChange={handlefileedit}
                accept="image/png, image/jpg, image/jpeg,"
                placeholder="Add File"
                className="mt-1 mb-2 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
              />
            </div>
            <div className="ms-[6vw] mt-1">
              <Button
                id="Add"
                label="Save"
                color="bg-sky-700"
                hover="hover: bg-sky-500"
                width="60"
                onClick={() => handlesubmitedit()}
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default UserReimbursement;
