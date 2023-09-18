import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
          return "Employee";
        default:
          return "Halaman Tidak Ditemukan";
      }
    };
    setPageTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className=" flex h-16  bg-white rounded-lg shadow items-center p-6 justify-between ">
      <div className=" justify-between items-center">
        <h4 className="text-sky-900 text-base font-semibold">{pageTitle}</h4>
      </div>
      <div id={id} className="justify-start items-center gap-3 inline-flex">
        <img className="w-12 h-12 rounded-full" src={image} />
        <div className="flex-col justify-start items-start inline-flex ">
          <h4 className="text-sky-900 text-base font-medium">{name}</h4>
          <p className="text-neutral-500 text-xs font-medium">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
