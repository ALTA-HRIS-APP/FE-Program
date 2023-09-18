import { useState } from "react";
// import { Link } from 'react-router-dom'
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const menuData = [
<<<<<<< HEAD
  {
    label: "Menu 1",
    link: "/menu1",
  },
  {
    label: "Menu 2",
    link: "/menu2",
    submenu: [
      {
        label: "Submenu 2.1",
        link: "/menu2/submenu1",
      },
      {
        label: "Submenu 2.2",
        link: "/menu2/submenu2",
      },
    ],
  },
  // ...
];

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("/menu1");
  return (
    <div className="flex bg-DEE4EE">
      <Sidebar menuData={menuData} />
      <div className="flex-grow">
        <Navbar
          id="Dashboard"
          titleNavbar="Dashboard"
          namePerson="John Doe"
          avatar="https://i.pravatar.cc/300"
          level="Level 1"
        />
        {/* Main content */}
        <div className="p-4 w-full h-full bg-white  m-5">
          <div className="w-1/2 h-full">
            <div>
              <p>Input Field</p>
=======
    {
      label: 'DASHBOARD',
      link: '/dashboard',
      active: true
    },
    {
      label: 'User Management',
      link: '/user',
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

const Dashboard = () => {
    // const [activePage, setActivePage ] = useState<string>('/menu1')
    return (
        <div className="flex bg-DEE4EE">
            <Sidebar menuData={menuData} />
            <div className="flex-grow">
                <Navbar
                id='Dashboard'
                titleNavbar='Dashboard'
                namePerson='John Doe'
                avatar='https://i.pravatar.cc/300'
                level='Level 1'
                />
                {/* Main content */}
                <div className="p-4 max-w-full bg-white  m-5">
                    <div className='w-42 h-34'>
                        <div>
                            <p>Input Field</p>
                        </div>

                    </div>
                </div>
>>>>>>> 14fb1648689e143e2e8146d73d92edcfac2745f8
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
