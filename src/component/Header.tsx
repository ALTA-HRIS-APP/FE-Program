import React, { FC, useEffect, useState } from "react";
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
  const role = Cookies.get("role");
  const email = Cookies.get("email");
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
        case "/presensi":
          return "Presensi";
        case "/rembursement":
          return "Rembursement";
        case "/timeoff":
          return "Time Off";
        case "/target":
          return "Target";
        case "/employe":
          return "Employe";
        default:
          return "Halaman Tidak Ditemukan";
      }
    };
    setPageTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  //fungsi logika untuk logout
  const handleLogout = () => {
    Swal.fire({
      title: "Apakah anda ingin ?",
      showCancelButton: true,
      cancelButtonText: "NO",
      confirmButtonText: "YES",
    }).then((tru) => {
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

  // logika untuk tida menampilkan header pada landingpage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className=" flex h-16  bg-white rounded-lg shadow items-center p-6 justify-between ">
      <div className=" justify-between items-center">
        <h4 className="text-sky-900 text-base font-semibold">{pageTitle}</h4>
      </div>
      <div
        id={id}
        onClick={toggleDropdown}
        className="justify-start items-center gap-3 inline-flex"
      >
        <img className="w-12 h-12 rounded-full" src={image} />
        <div className="flex-col justify-start items-start inline-flex ">
          <h4 className="text-sky-900 text-base font-medium">{name}</h4>
          <p className="text-neutral-500 text-xs font-medium">{job}</p>
        </div>
        <IoIosArrowDown />
      </div>
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Settings
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
  );
};

export default Header;
