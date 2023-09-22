import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");

  const Menus = [
    { title: "Dashboard", src: "Dashboard", path: "/Dashboard" },
    { title: "User Management", src: "user-management", path: "/User" },
    { title: "Role Management", src: "management", path: "/Role" },
    { title: "Employee Level", src: "employee-job", path: "/EmployeeLevel" },
    { title: "Devisi Management", src: "Employe", path: "/Devisi" },
    { title: "Presensi", src: "Presensi", path: "/presensi" },
    { title: "Reimbursement", src: "Remburse", path: "/reimbursement" },
    { title: "Time Off", src: "time-management-svgrepo-com", path: "/timeoff" },
    { title: "Target", src: "Target", path: "/target" },
    { title: "Employe", src: "Employe", path: "/employe" },
    {
      title: "User Reimbursement",
      src: "Remburse",
      path: "/reimbursement/:id",
    },
  ];

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-sky-900 h-full p-5  pt-8 relative duration-300`}
      >
        <img
          src="src\assets\control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="src\assets\logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-5">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path} key={index}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-sky-700 active:bg-blue-600 text-white  items-center font-semibold gap-x-5 
                ${Menu.gap ? "mt-12" : "mt-2"} ${
                  location.pathname === Menu.path ? "bg-blue-600" : ""
                } `}
                onClick={() => setActiveMenu(Menu.title)}
              >
                <img
                  className=" w-5 h-5"
                  src={`./src/assets/${Menu.src}.svg`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-500 `}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
