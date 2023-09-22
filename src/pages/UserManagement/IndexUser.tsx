import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';

import Button from '../../components/element/Button';

const IndexUser = () => {
    const token = Cookie.get('token');
    const navigate = useNavigate();
    const [User, setUser] = useState<[]>([]);

    const getAllUser = () => {
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
                    setUser(response?.data?.meta?.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    useEffect(() => {
        getAllUser();
    }, []);

    const DetailTo = (id: number) => {
        navigate(`/DetailUser/${id}`, {
            state: {
                id: id
            }
        });
    };

    const handleEdit = (id: number) => {
        navigate(`/EditUser/${id}`, {
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
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios
                    .delete(`user/${id}`)
                    // .delete(`user/${id}`, {
                    //     headers: {
                    //         Authorization: `Bearer ${token}`,
                    //     },
                    // })
                    .then((response) => {
                        console.log(response);
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                            confirmButtonText: "OK",
                        }).then(() => {
                            getAllUser();
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

    const handleAddUser = () => {
        navigate('/AddUser');
    }

    return (
        <div>
            <main>
                <div className='flex justify-end'>
                    <Button
                        id='Add Button'
                        label='Add User'
                        color='bg-primary'
                        hover='bg-sky-700'
                        onClick={handleAddUser}
                        src={'user-add'}
                    />
                </div>

                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <div className='relative overflow-x-auto'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="p-2 border">No. </th>
                                    <th className="p-6 border">Nama Lengkap</th>
                                    <th className="p-4 border">Email</th>
                                    <th className="p-4 border">Division</th>
                                    <th className="p-4 border">Role</th>
                                    <th className="p-4 border">Status</th>
                                    <th className="p-5 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {User && User.map((item: any, index) => (
                                    <tr key={index} className='bg-white hover:bg-blue-50'>
                                        <td className="p-2 border text-center">{index + 1}.</td>
                                        <td className="p-4 border text-center">{item?.nama_lengkap}</td>
                                        <td className="p-4 border text-center">{item?.surel}</td>
                                        <td className="p-4 border text-center">{item?.devisi?.nama}</td>
                                        <td className="p-4 border text-center">{item?.role.nama}</td>
                                        <td className="p-4 border text-center">{item?.status ? "Active" : "Inactive"}</td>
                                        <td className='flex justify-center p-5 border gap-3'>
                                            <Button
                                                id='Detail Button'
                                                color='bg-info'
                                                hover='bg-green-200'
                                                onClick={() => DetailTo(item?.id)}
                                                src='info'
                                            />
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

export default IndexUser