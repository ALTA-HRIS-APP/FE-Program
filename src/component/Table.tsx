import React, { FC } from "react";

interface Menteeprops {
  id: number;
  fullname?: string;
  reimbusement_type?: string | number;
  cash_out?: string;
  nominal?: string;
  description?: string;
  proofs?: string;
  status?: string;
  onClick?: React.MouseEventHandler;
  onEdit?: React.MouseEventHandler;
}

const Tablementee: FC<Menteeprops> = ({
  id,
  fullname,
  reimbusement_type,
  cash_out,
  status,
  nominal,
  description,
  proofs,
  onClick,
  onEdit,
}) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{fullname}</td>
      <td>{reimbusement_type}</td>
      <td>{cash_out}</td>
      <td>{nominal}</td>
      <td>{description}</td>
      <td>{proofs}</td>
      <td>{status}</td>
      <td className="flex gap-x-3 item-center">
        <span onClick={onEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
        <span onClick={onClick}>
          <i className="ts fa-regular fa-trash-can"></i>
        </span>
      </td>
    </tr>
  );
};

export default Tablementee;
