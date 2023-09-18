// import React from 'react'
import { useNavigate } from "react-router-dom";


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
    // ...
];

const IndexUser = () => {

    const navigate = useNavigate();
    const handleAddUser = () => {
        navigate('/AddUser');
    }

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
                        hover="hover:bg-sky-500"
                        onClick={handleAddUser}
                        />
                    </div>
                    <div className="p-4 max-w-full bg-white rounded-lg  m-5">
                        <div className='w-42 h-34'>
                            <div>
                                <p>User Management</p>
                            </div>

                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default IndexUser