import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

import Button from '../../components/element/Button';

const IndexDevisi = () => {
    const token = Cookies.get('token');
    const [role, setRole] = useState<[]>([]);
    const getAllRole = () => {
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
                .get("devisi")
                .then((response) => {
                    console.log("hasil : ", response?.data?.data);
                    setRole(response?.data?.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    useEffect(() => {
        getAllRole();
    }, []);

    const navigate = useNavigate();
    const hanldeAddDevisi = () => {
        navigate('/TambahDevisi');
    }

    const handleEdit = (id: number) => {
        navigate(`/EditDevisi/${id}`, {
            state: {
                id: id,
            }
        });
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are You Sure For Delete?',
            showCancelButton: true,
            cancelButtonText: "No, Cancel!",
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`devisi/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        console.log(response);
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                            confirmButtonText: "OK",
                        }).then(() => {
                            getAllRole();
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
            } else if (result.dismiss) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    };

    return (
        <div>
            <div className='flex justify-end'>
                <Button
                    id='Add Button'
                    label='Add Devisi'
                    color='bg-primary'
                    hover='bg-sky-500'
                    onClick={hanldeAddDevisi}
                    src={'add-to-queue'}
                />
            </div>
            <main>
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <div className='relative overflow-x-auto'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="w-32 p-3 border ">No. </th>
                                    <th className="p-3 border">Nama</th>
                                    <th className="w-64 p-5 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {role && role.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td className="w-32 border w-auto text-center">{index + 1}.</td>
                                        <td className="p-4 w-auto border text-center">{item?.nama}</td>
                                        <td className='flex justify-center p-3 w-64 border gap-3'>
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
                    </div>
                </div>
            </main>
        </div>
    )
}

export default IndexDevisi