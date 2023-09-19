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

    const [data, setData] = useState<any[]>([]);
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
            console.log("hasil:",response?.data);
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
                                    <table className="w-full border-collapse border">
                                        <thead>
                                            <tr className="bg-gray-300 border">
                                                <th className="p-2 border text-left">No. </th>
                                                <th className="p-2 border">Id</th>
                                                <th className="p-2 border">Nama Lengkap</th>
                                                <th className="p-2 border">Email</th>
                                                <th className="p-2 border">Division</th>
                                                <th className="p-2 border">Role</th>
                                                <th className="p-2 border">Status</th>
                                                <th className="p-2 border">Detail</th>
                                                <th className="p-2 border">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item: any, index) => (
                                                <tr key={item.id}>
                                                    <td className="p-2 border text-left">{index + 1}</td>
                                                    <td className="p-2 border text-left">{item.id}</td>
                                                    <td className="p-2 border text-center">{item.nama_lengkap}</td>
                                                    <td className="p-2 border text-center">{item.surel}</td>
                                                    <td className="p-2 border text-center">{item.devisi.nama}</td>
                                                    <td className="p-2 border text-center">{item.role.nama}</td>
                                                    <td className="p-2 border text-center">{item.status? "Active" : "Inactive"}</td>
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