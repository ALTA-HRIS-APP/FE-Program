import React, { FC } from "react";

interface tableprops {
  id: number | string;
  reimbusement_type?: string | number;
  cash_out?: string;
  nominal?: string;
  description?: string;
  proofs?: string;
  status?: string;
  persetujuan?: string;
  onClick?: React.MouseEventHandler;
  onEdit?: React.MouseEventHandler;
}

const Tableaddreim: FC<tableprops> = ({
  id,
  reimbusement_type,
  cash_out,
  status,
  nominal,
  description,
  proofs,
  persetujuan,
  onClick,
  onEdit,
}) => {
  const formatdate: any = cash_out?.toString().slice(0, 15).split(" ");

  return (
    <tr>
      <th>{id}</th>
      <td>{reimbusement_type}</td>
      <td>{`${formatdate[2]} ${formatdate[1]} ${formatdate[3]}`}</td>
      <td>{nominal}</td>
      <td className="text-left">{description}</td>
      <td>
        <a href={`${proofs}`} target="_blank">
          <i className="fa-solid fa-image"></i>
        </a>
      </td>
      <td>{status}</td>
      <td>{persetujuan}</td>
      <td className="flex gap-x-3 mx-5 my-3 item-center">
        <span onClick={onEdit}>
          <i className="cek fa-solid fa-pen cursor-pointer"></i>
        </span>
        <span onClick={onClick}>
          <i className="den fa-solid fa-trash cursor-pointer"></i>
        </span>
      </td>
    </tr>
  );
};

export default Tableaddreim;
