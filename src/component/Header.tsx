import { FC } from "react";

interface headerProps {
  id: string;
  title?: string;
  name?: string;
  job?: string;
  image?: string;
}

const Header: FC<headerProps> = ({ id, title, name, job, image }) => {
  return (
    <div className=" flex h-16  bg-white rounded-lg shadow items-center p-6 justify-between ">
      <div className=" justify-between items-center">
        <h4 className="text-sky-900 text-base font-semibold">{title}</h4>
      </div>
      <div id={id} className="justify-start items-center gap-3 inline-flex">
        <img className="w-12 h-12 rounded-full" src={image} />
        <div className="flex-col justify-start items-start inline-flex ">
          <h4 className="text-sky-900 text-xl font-medium">{name}</h4>
          <p className="text-neutral-500 text-xs font-medium">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
