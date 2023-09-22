import React, { FC } from "react";

interface tableprops {
  id: number | string;
  target?: string;
  date?: string;
  proofs?: string;
  status?: string;
  onEdit?: React.MouseEventHandler;
}

const Tableusertarget: FC<tableprops> = ({
  id,
  status,
  date,
  target,
  proofs,
  onEdit,
}) => {
  const formatdate: any = date?.toString().slice(0, 15).split(" ");
  return (
    <tr>
      <th>{id}</th>
      <td className="text-left">{target}</td>
      <td>{`${formatdate[2]} ${formatdate[1]} ${formatdate[3]}`}</td>
      <td>
        <a href={`${proofs}`} target="_blank">
          <i className="fa-solid fa-image"></i>
        </a>
      </td>
      <td>{status}</td>
      <td className="flex gap-x-3 mx-10 my-2 py-1 item-center">
        <span onClick={onEdit}>
          <i className="cek fa-solid fa-check cursor-pointer"></i>
        </span>
      </td>
    </tr>
  );
};

export default Tableusertarget;
