import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from 'sweetalert2';

import Button from "../../components/element/Button"

const indexEmployeeLevel = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const [employee, setEmployee] = useState<[]>([]);
  const handleEdit = (id: number) => {
    navigate(`/EditEmployeeLevel/${id}`, {
      state: {
        id: id,
      }
    });
  }

  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are You Sure For Delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`user/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: response.data.message,
              confirmButtonText: "OK",
            }).then(() => {
              getAllEmployee();
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed",
              text: `Something went wrong : ${error}`,
              confirmButtonText: "OK",
            });
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };
  const getAllEmployee = () => {
    if (token === undefined) {
      Swal.fire({
        icon: "error",
        title: "You Don't Have Access in this Page...",
        text: "GO BACK!!!",
        backdrop: "#fff",
        confirmButtonText: "OK"
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/");
        }
      })
    } else {
      axios
        .get("user", {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response?.data?.meta?.data);
          setEmployee(response?.data?.meta?.data);
        })
        .catch((error) => {
          console.log(error);
        })
    };
  };

  useEffect(() => {
    getAllEmployee();
  })
  return (
    <div>
      <main>
        <div>
          <main>
            <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
              <div className='relative overflow-x-auto'>
                <table className="min-w-full table-auto bg-white shadow">
                  <thead className=" bg-sky-900">
                    <tr className="text-white">
                      <th className="p-3 w-auto border">No. </th>
                      <th className="p-auto w-auto border">Employee Name</th>
                      <th className="p-auto w-auto border">Jabatan</th>
                      <th className="p-auto w-auto border">Employee Status</th>
                      <th className="p-auto w-auto border">Join Date</th>
                      <th className="p-auto w-auto border">User Registered</th>
                      <th className="p-auto w-auto border">Email</th>
                      <th className="p-5 border w-40">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee && employee.map((item: any, index) => (
                      <tr key={index}>
                        <td className="border w-auto text-center">{index + 1}.</td>
                        <td className="p-4 w-auto border text-center">{item?.nama_lengkap}</td>
                        <td className="p-4 w-auto border text-center">{item?.jabatan}</td>
                        <td className="p-4 w-auto border text-center">{item?.employee_status}</td>
                        <td className="p-4 w-auto border text-center">{item?.createdAt}</td>
                        <td className="p-4 w-auto border text-center">{ }</td>
                        <td className="p-4 w-auto border text-center">{item?.surel}</td>
                        <td className='flex justify-center p-3 w-40 border gap-3'>
                          <Button
                            id='Edit Button'
                            color='bg-warning'
                            hover='bg-yellow-200'
                            onClick={() => handleEdit(item?.id)}
                            src='edit-3'
                          />
                          <Button
                            id='Delete Button'
                            color='bg-danger'
                            hover='bg-red-200'
                            onClick={() => handleDelete(item?.id)}
                            src='delete-2'
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                <div className='button mt-5 flex gap-4 justify-end'>
                  <Button
                    id='Previous'
                    label='Previous'
                    color='bg-primary'
                    hover='bg-blue-500'
                    width='32'
                    height='10'
                  // src='arrow-right'
                  />
                  <Button
                    id='next'
                    label='Next'
                    color='bg-primary'
                    hover='bg-blue-500'
                    width='32'
                    height='10'
                  // src='arrow-right'
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </main >
    </div >
  )
}

export default indexEmployeeLevel