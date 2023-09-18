import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const menuData = [
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
];

const Dashboard = () => {
  // const [activePage, setActivePage ] = useState<string>('/menu1')
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
        <div className="p-4 max-w-full bg-white  m-5">
          <div className="w-42 h-34">
            <div>
              <p>Input Field</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
