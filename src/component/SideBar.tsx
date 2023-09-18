import { useState } from "react";
import Header from "./Header";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenu, setSubMenu] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Dashboard" },
    { title: "Presensi", src: "Presensi" },
    { title: "Request", src: "Request" },
    { title: "Target", src: "Target" },
    { title: "Employe", src: "Employe" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-sky-900 h-screen p-5  pt-8 relative duration-300`}
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
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-sky-700 active:bg-blue-600 text-white text-lg items-center font-semibold gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && " bg-blue-600"} `}
              onClick={() => setSubMenu(!subMenu)}
            >
              <img src={`./src/assets/${Menu.src}.svg`} />
              <span
                className={`${!open && "hidden"} origin-left duration-200 `}
              >
                {Menu.title}
              </span>
              {index === 2 && (
                <ul
                  className={`${
                    subMenu ? "block" : "hidden"
                  } absolute bg-sky-900 mt-2 p-2  rounded-md shadow-md`}
                >
                  <li className="cursor-pointer hover:bg-sky-700 p-1 rounded-md">
                    Rembursement
                  </li>
                  <li className="cursor-pointer hover:bg-sky-700 p-1 rounded-md">
                    Time Off
                  </li>
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
