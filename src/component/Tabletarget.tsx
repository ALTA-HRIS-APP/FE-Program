import React, { FC } from "react";

interface tableprops {
  id: number | string;
  division?: string | number;
  employee?: string;
  target?: string;
  date?: string;
  proofs?: string;
  status?: string;
  onEdit?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
}

const Tabletarget: FC<tableprops> = ({
  id,
  division,
  employee,
  status,
  date,
  target,
  proofs,
  onEdit,
  onClick,
}) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{division}</td>
      <td>{employee}</td>
      <td className="text-left px-5">{target}</td>
      <td>{date}</td>
      <td>
        <a href={`${proofs}`} target="_blank">
          <i className="fa-solid fa-image"></i>
        </a>
      </td>
      <td>{status}</td>
      <td className="flex gap-x-3 mx-5 my-3 item-center">
        <span onClick={onEdit}>
          <i className="cek fa-solid fa-check cursor-pointer"></i>
        </span>
        <span onClick={onClick}>
          <i className="den fa-solid fa-trash cursor-pointer"></i>
        </span>
      </td>
    </tr>
  );
};

export default Tabletarget;
