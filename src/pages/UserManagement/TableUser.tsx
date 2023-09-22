import { FC } from 'react'

interface tabelUserProps {
    id: string;
    nama_lengkap?: string;
    email?: string;
    division?: string;
    role?: string;
    status?: boolean;
}

const TableUser: FC<tabelUserProps> = ({ id, nama_lengkap, email, division, role, status, }) => {
    return (
        <>

            <tr className='bg-white hover:bg-blue-50'>
                <td className="px-4 py-2 border text-left">{id}</td>
                <td className="px-4 py-2 border text-left">{ }</td>
                <td className="px-4 py-2 border text-center">{nama_lengkap}</td>
                <td className="px-4 py-2 border text-center">{email}</td>
                <td className="px-4 py-2 border text-center">{division}</td>
                <td className="px-4 py-2 border text-center">{role}</td>
                <td className="px-4 py-2 border text-center">{status ? "Active" : "Inactive"}</td>
                <td className='flex content-center m-3 gap-3'>
                    {/* <Button
                                    id='Detail Button'
                                    color='bg-info'
                                    hover='bg-green-200'
                                    onClick={() => DetailTo(item?.id)}
                                    src='info'
                                />
                                <Button
                                    id='Edit Button'
                                    color='bg-warning'
                                    hover='bg-yellow-200'
                                    onClick={() => DetailTo(item?.id)}
                                    src='edit-3'
                                />
                                <Button
                                    id='Delete Button'
                                    color='bg-danger'
                                    hover='bg-red-200'
                                    onClick={() => DetailTo(item?.id)}
                                    src='delete-2'
                                /> */}
                </td>
            </tr>
        </>
    )
}

export default TableUser