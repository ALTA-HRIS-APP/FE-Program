import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";

interface headerProps {
  id: string;
  title?: string;
  name?: string;
  job?: string;
  image?: string;
}

const Header: FC<headerProps> = ({ id, name, job, image }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const role = Cookies.get("role");
  // const email = Cookies.get("email");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //fungsi ganti title header sesuai setiap halaman
  useEffect(() => {
    const getTitleFromPath = (pathname: string) => {
      switch (pathname) {
        case "/Dashboard":
          return "Dashboard";
        case "/User":
          return "User Management";
        case "/AddUser":
          return "Add User";
        case "/DetailUser/:id":
          return "Detil User";
        case "/Role":
          return "Role Management";
        case "/AddRole":
          return "Role Management";
        case "/Division":
          return "Devision Management";
        case "/EmployeeLevel":
          return "Employee Level Management";
        case "/AddEmployeeLevel":
          return "Add Employee Level Management";
        case "/presensi":
          return "Presensi";
        case "/AddPresensi":
          return "Add Presensi";
        case "/rembursement":
          return "Rembursement";
        case "/timeoff":
          return "Time Off";
        case "/AddTimeOff":
          return "Add Time Off";
        case "/target":
          return "Target";
        case "/employe":
          return "Employe Management";
        case "/AddEmploye":
          return "Add Employe Management";
        case "/profile":
          return "Profile";
        default:
          return "Halaman Tidak Ditemukan";
      }
    };
    setPageTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  const handleLogout = () => {
    Swal.fire({
      title: "Apakah anda ingin Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "YES",
    }).then(() => {
      Cookies.remove("username");
      Cookies.remove("token");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Success Logout",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      }).then((response) => {
        if (response?.isConfirmed) {
          navigate("/");
        }
      });
    });
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className=" flex h-16  bg-white rounded-lg shadow items-center p-6 justify-between ">
      <div className=" justify-between items-center">
        <h4 className="text-sky-900 text-base font-semibold">{pageTitle}</h4>
      </div>
      <div className="relative inline-block text-left">
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
          id={id}
        >
          <img className="w-12 h-12 rounded-full" src={image} />
          <div className="flex-col justify-start items-start inline-flex ">
            <h4 className="text-sky-900 text-base font-medium">{name}</h4>
            <p className="text-neutral-500 text-xs font-medium">{job}</p>
          </div>
          <IoIosArrowDown />
        </button>
        {dropdownOpen && (
          <div className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </a>
              <a
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
