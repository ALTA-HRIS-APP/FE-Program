import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import Button from '../../components/element/Button';

const IndexUser = () => {

    //     id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
    //     nama_lengkap: "admin",
    //     surel: "admin@gmail.com",
    //     no_hp: "082335554778",
    //     jabatan: "c-level",
    //     kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
    //     status: false,
    //     createdAt: "2023-09-14T12:36:09.000Z",
    //     updatedAt: "2023-09-14T12:36:09.000Z",
    //     devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //     roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //     devisi: {
    //         id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //         nama: "tidak ada",
    //         createdAt: "2023-09-14T17:15:26.000Z",
    //         updatedAt: "2023-09-14T17:15:26.000Z"
    //     },
    //     role: {
    //         id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //         nama: "superadmin",
    //         createdAt: "2023-09-14T10:02:06.000Z",
    //         updatedAt: "2023-09-14T10:02:06.000Z"
    //     }
    // },
    // {
    //     id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
    //     nama_lengkap: "admin",
    //     surel: "admin@gmail.com",
    //     no_hp: "082335554778",
    //     jabatan: "c-level",
    //     kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
    //     status: true,
    //     createdAt: "2023-09-14T12:36:09.000Z",
    //     updatedAt: "2023-09-14T12:36:09.000Z",
    //     devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //     roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //     devisi: {
    //         id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //         nama: "tidak ada",
    //         createdAt: "2023-09-14T17:15:26.000Z",
    //         updatedAt: "2023-09-14T17:15:26.000Z"
    //     },
    //     role: {
    //         id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //         nama: "superadmin",
    //         createdAt: "2023-09-14T10:02:06.000Z",
    //         updatedAt: "2023-09-14T10:02:06.000Z"
    //     }
    // },
    // {
    //     id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
    //     nama_lengkap: "admin",
    //     surel: "admin@gmail.com",
    //     no_hp: "082335554778",
    //     jabatan: "c-level",
    //     kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
    //     status: true,
    //     createdAt: "2023-09-14T12:36:09.000Z",
    //     updatedAt: "2023-09-14T12:36:09.000Z",
    //     devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //     roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //     devisi: {
    //         id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //         nama: "tidak ada",
    //         createdAt: "2023-09-14T17:15:26.000Z",
    //         updatedAt: "2023-09-14T17:15:26.000Z"
    //     },
    //     role: {
    //         id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //         nama: "superadmin",
    //         createdAt: "2023-09-14T10:02:06.000Z",
    //         updatedAt: "2023-09-14T10:02:06.000Z"
    //     }
    // },
    // {
    //     id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
    //     nama_lengkap: "admin",
    //     surel: "admin@gmail.com",
    //     no_hp: "082335554778",
    //     jabatan: "c-level",
    //     kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
    //     status: true,
    //     createdAt: "2023-09-14T12:36:09.000Z",
    //     updatedAt: "2023-09-14T12:36:09.000Z",
    //     devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //     roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //     devisi: {
    //         id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
    //         nama: "tidak ada",
    //         createdAt: "2023-09-14T17:15:26.000Z",
    //         updatedAt: "2023-09-14T17:15:26.000Z"
    //     },
    //     role: {
    //         id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
    //         nama: "superadmin",
    //         createdAt: "2023-09-14T10:02:06.000Z",
    //         updatedAt: "2023-09-14T10:02:06.000Z"
    //     }
    // },
    const [User, setUser] = useState<[]>([]);

    // const getAllUser = () => {
    //     if (token === undefined) {
    //         navigate("/");
    //     } else {
    //         Axios
    //             .get("http://pintu2.otixx.online/user")
    //             // .get("http://pintu2.otixx.online/user", {
    //             //     headers: {
    //             //         Authorization: `Bearer ${token}`
    //             //     },
    //             // })
    //             .then((response) => {
    //                 console.log(response?.data);
    //                 setUser(response?.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })
    //     }
    // }

    const getAllUsers = () => {
        axios
            .get("http://project2.otixx.online/user")
            .then((response) => {
                console.log("hasil:", response?.data?.meta?.data);
                setUser(response?.data?.meta?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const DetailTo = (id: number) => {
        navigate(`/DetailUser/${id}`, {
            state: {
                id: id
            }
        });
    }
    const navigate = useNavigate();
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
                        color='bg-sky-500'
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
                                    <th className="p-2 border text-left">No. </th>
                                    <th className="p-0 border">Id</th>
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
                                    <tr id={item?.id} className='bg-white hover:bg-blue-50'>
                                        <td className="p-2 border text-left">{index + 1}.</td>
                                        <td className="p-0 border text-center">{item?.id}</td>
                                        <td className="p-4 border text-center">{item?.nama_lengkap}</td>
                                        <td className="p-4 border text-center">{item?.surel}</td>
                                        <td className="p-4 border text-center">{item?.devisi.nama}</td>
                                        <td className="p-4 border text-center">{item?.role.nama}</td>
                                        <td className="p-4 border text-center">{item?.status ? "Active" : "Inactive"}</td>
                                        <td className='flex content-center p-5 border gap-3'>
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
                                                onClick={() => DetailTo(item?.id)}
                                                src='edit-3'
                                            />
                                            <Button
                                                id='Delete Button'
                                                color='bg-danger'
                                                hover='bg-red-200'
                                                onClick={() => DetailTo(item?.id)}
                                                src='delete-2'
                                            />
                                        </td>
                                    </tr>
                                ))};
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default IndexUser