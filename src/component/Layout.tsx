import React from "react";

import SideBar from "./SideBar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex h-screen">
      <SideBar />
      <div className=" flex-1 flex flex-col py-5 px-10">
        <Header
          id=""
          title="Presensi"
          image="src\assets\person.png"
          job="Manager"
          name=" Jheni Doe"
        />
        <main className="flex-grow overflow-y-auto mt-5 ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
