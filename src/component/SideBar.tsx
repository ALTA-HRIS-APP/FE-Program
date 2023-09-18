import { useState } from "react";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const [open, setOpen] = useState(true);
  const [requestMenuOpen, setRequestMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: "/Dashboard" },
    { title: "Presensi", src: "Presensi" },
    {
      title: "Request",
      src: "Request",
      submenus: [
        { title: "Reimbursement", src: "Remburse" },
        { title: "Time Off", src: "TimeOff" },
      ],
    },
    { title: "Target", src: "Target" },
    { title: "Employe", src: "Employe" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-sky-900 h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="src\assets\control.png"
          alt="Toggle Sidebar"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt="Logo"
            src="src\assets\logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-12">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer ${
                requestMenuOpen && Menu.title === "Request"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-sky-700 active:bg-blue-600 text-white"
              } text-lg items-center font-semibold gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}`}
              onClick={() =>
                Menu.title === "Request"
                  ? setRequestMenuOpen(!requestMenuOpen)
                  : setRequestMenuOpen(false)
              }
            >
              <img src={`./src/assets/${Menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              {Menu.submenus && requestMenuOpen && (
                <ul className="ml-4 mt-2">
                  {Menu.submenus.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer text-white hover:text-blue-400"
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
