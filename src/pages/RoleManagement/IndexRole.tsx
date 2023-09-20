import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/element/Button';

const IndexRole = () => {
    const [role, setRole] = useState<[]>([]);
    const getAllRole = () => {
        axios
            .get("http://project2.otixx.online/role")
            .then((response) => {
                console.log("hasil : ", response?.data?.data);
                setRole(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllRole();
    }, []);

    const navigate = useNavigate();
    const handleAddRole = () => {
        navigate('/AddRole');
    }

    return (
        <div>
            <div className='flex justify-end'>
                <Button
                    id='Add Button'
                    label='Add Role'
                    color='bg-sky-500'
                    hover='bg-sky-700'
                    onClick={handleAddRole}
                    src={'add-to-queue'}
                />
            </div>
            <main>
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <div className='relative overflow-x-auto'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="p-3 border text-left">No. </th>
                                    <th className="p-auto border">Id</th>
                                    <th className="p-3 border">Nama</th>
                                    <th className="p-auto border">Descripsion</th>
                                    <th className="p-auto border">Status</th>
                                    <th className="p-5 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {role && role.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td className="border text-center">{index + 1}.</td>
                                        <td className="border text-center">{item?.id}</td>
                                        <td className="p-4 border text-center">{item?.nama}</td>
                                        <td className="p-4 border text-center">{item?.description ? '...' : ''}</td>
                                        <td className="p-4 border text-center">{item?.status ? 'Active' : 'Inactive'}</td>
                                        <td className='flex content-center p-5 border gap-3'>
                                            <Button
                                                id='Edit Button'
                                                color='bg-warning'
                                                hover='bg-yellow-200'
                                                // onClick={() => DetailTo(item?.id)}
                                                src='edit-3'
                                            />
                                            <Button
                                                id='Delete Button'
                                                color='bg-danger'
                                                hover='bg-red-200'
                                                // onClick={() => DetailTo(item?.id)}
                                                src='delete-2'
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default IndexRole