// import React from 'react'

import Sidebar from "../../components/layout/Sidebar"
import Navbar from "../../components/layout/Navbar"

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

const AddUser = () => {
    return (
        <div className="flex bg-DEE4EE">
            <Sidebar menuData={menuData} />
            <div className="flex-grow">
                <Navbar
                    id='Add User Management'
                    titleNavbar='Add User Management'
                    namePerson='John Doe'
                    avatar='https://i.pravatar.cc/300'
                    level='Level 1'
                />
                {/* Main content */}
                <div className="p-4 max-w-full bg-white  m-5">
                    <div className='w-42 h-34'>
                        <div>
                            <p>Add User Management</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser