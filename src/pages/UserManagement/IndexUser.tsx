import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Cookies from "js-cookie";


import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/element/Button";

const menuData = [
    {
        label: 'DASHBOARD',
        link: '/dashboard',
        active: false
    },
    {
        label: 'User Management',
        link: '/user',
        active: true,
        submenu: [
            {
                label: 'Submenu 2.1',
                link: '/menu2/submenu1',
            },
            {
                label: 'Submenu 2.2',
                link: '/menu2/submenu2',
            },
        ],
    },
    {
        label: 'DASHBOARD',
        link: '/dashboard',
        active: false
    },
];

const IndexUser = () => {

    const [data, setData] = useState<any[]>([
        {
            id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
            nama_lengkap: "admin",
            surel: "admin@gmail.com",
            no_hp: "082335554778",
            jabatan: "c-level",
            kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
            status: false,
            createdAt: "2023-09-14T12:36:09.000Z",
            updatedAt: "2023-09-14T12:36:09.000Z",
            devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
            roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
            devisi: {
                id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
                nama: "tidak ada",
                createdAt: "2023-09-14T17:15:26.000Z",
                updatedAt: "2023-09-14T17:15:26.000Z"
            },
            role: {
                id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
                nama: "superadmin",
                createdAt: "2023-09-14T10:02:06.000Z",
                updatedAt: "2023-09-14T10:02:06.000Z"
            }
        },
        {
            id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
            nama_lengkap: "admin",
            surel: "admin@gmail.com",
            no_hp: "082335554778",
            jabatan: "c-level",
            kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
            status: true,
            createdAt: "2023-09-14T12:36:09.000Z",
            updatedAt: "2023-09-14T12:36:09.000Z",
            devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
            roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
            devisi: {
                id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
                nama: "tidak ada",
                createdAt: "2023-09-14T17:15:26.000Z",
                updatedAt: "2023-09-14T17:15:26.000Z"
            },
            role: {
                id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
                nama: "superadmin",
                createdAt: "2023-09-14T10:02:06.000Z",
                updatedAt: "2023-09-14T10:02:06.000Z"
            }
        },
        {
            id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
            nama_lengkap: "admin",
            surel: "admin@gmail.com",
            no_hp: "082335554778",
            jabatan: "c-level",
            kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
            status: true,
            createdAt: "2023-09-14T12:36:09.000Z",
            updatedAt: "2023-09-14T12:36:09.000Z",
            devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
            roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
            devisi: {
                id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
                nama: "tidak ada",
                createdAt: "2023-09-14T17:15:26.000Z",
                updatedAt: "2023-09-14T17:15:26.000Z"
            },
            role: {
                id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
                nama: "superadmin",
                createdAt: "2023-09-14T10:02:06.000Z",
                updatedAt: "2023-09-14T10:02:06.000Z"
            }
        },
        {
            id: "02ffb084-c74a-4888-bae1-a9c3a76ef8ee",
            nama_lengkap: "admin",
            surel: "admin@gmail.com",
            no_hp: "082335554778",
            jabatan: "c-level",
            kata_sandi: "$2b$10$TOMdB1N.izcbvOfH3ASKb.Z2lfUCEJF11BlIQEkKg18zhcoHDwMWS",
            status: true,
            createdAt: "2023-09-14T12:36:09.000Z",
            updatedAt: "2023-09-14T12:36:09.000Z",
            devisiId: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
            roleId: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
            devisi: {
                id: "a9b6efa2-52e7-11ee-89fb-a5765d73286f",
                nama: "tidak ada",
                createdAt: "2023-09-14T17:15:26.000Z",
                updatedAt: "2023-09-14T17:15:26.000Z"
            },
            role: {
                id: "5c3c1884-88ae-4dc7-a46a-bc34c2335e61",
                nama: "superadmin",
                createdAt: "2023-09-14T10:02:06.000Z",
                updatedAt: "2023-09-14T10:02:06.000Z"
            }
        },
    ]);
    // const token = Cookies.get("token");

    const navigate = useNavigate();
    const handleAddUser = () => {
        navigate('/AddUser');
    }

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

    const getAllUser = () => {
        axios
            .get("http://pintu2.otixx.online/user")
            .then((response) => {
                console.log("hasil:", response?.data);
                setData(response?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllUser();
    }, [])

    return (
        <div className="flex bg-DEE4EE">
            <Sidebar menuData={menuData} />
            <div className="flex-grow">
                <Navbar
                    id='User Management'
                    titleNavbar='User Management'
                    namePerson='John Doe'
                    avatar='https://i.pravatar.cc/300'
                    level='Level 1'
                />
                {/* Main content */}
                <main>
                    <div className="flex items-center justify-end m-5">
                        <Button
                            id="Add Button"
                            label="Add Button"
                            color="bg-sky-700"
                            hover="hover: bg-sky-500"
                            onClick={handleAddUser}
                        />
                    </div>
                    <div className="p-4 max-w-full bg-white rounded-lg  m-5">
                        <div className='w-42 h-34'>
                            <div>
                                {/* Start Table */}
                                <div className='relative overflow-x-auto'>
                                    <table className="min-w-full table-auto bg-white shadow">
                                        <thead className=" bg-sky-900">
                                            <tr className="text-white">
                                                <th className="px-4 py-2 border text-left">No. </th>
                                                <th className="px-4 py-2 border">Id</th>
                                                <th className="px-4 py-2 border">Nama Lengkap</th>
                                                <th className="px-4 py-2 border">Email</th>
                                                <th className="px-4 py-2 border">Division</th>
                                                <th className="px-4 py-2 border">Role</th>
                                                <th className="px-4 py-2 border">Status</th>
                                                {/* <th className="px-4 py-2 border">Detail</th> */}
                                                <th className="px-4 py-2 border">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item: any, index) => (
                                                <tr key={item.id} className='bg-white hover:bg-blue-50'>
                                                    <td className="px-4 py-2 border text-left">{index + 1}</td>
                                                    <td className="px-4 py-2 border text-left">{item.id}</td>
                                                    <td className="px-4 py-2 border text-center">{item.nama_lengkap}</td>
                                                    <td className="px-4 py-2 border text-center">{item.surel}</td>
                                                    <td className="px-4 py-2 border text-center">{item.devisi.nama}</td>
                                                    <td className="px-4 py-2 border text-center">{item.role.nama}</td>
                                                    <td className="px-4 py-2 border text-center">{item.status ? "Active" : "Inactive"}</td>
                                                    <td>
                                                        <button>Detail</button>
                                                        <button>Edit</button>
                                                        <button>Hapus</button>
                                                    </td>
                                                </tr>
                                            ))};

                                        </tbody>
                                    </table>
                                </div>
                                {/* End Table */}
                            </div>

                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default IndexUser