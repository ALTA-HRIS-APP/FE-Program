import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

import Button from '../../components/element/Button';

interface EditRoleProps {
    id: string;
    nama: string;
    description: string;
    status: boolean;
}
const EditRole = () => {
    const location = useLocation();
    const id = location?.state?.id;
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const handleBack = () => {
        navigate(-1)
    }
    const [editRole, setEditRole] = useState<EditRoleProps>({
        id: '',
        nama: '',
        description: '',
        status: false,
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setEditRole({
            ...editRole,
            [name]: name === 'status' ? value === 'true' : value,
        });
    };

    const getEditRole = (id: any) => {
        axios
            .get(`role/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                console.log("hasil get: ", response?.data?.data);
                setEditRole(response?.data?.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            })

    }

    useEffect(() => {
        getEditRole(id);
    }, [id]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.put('user', editRole, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: response.data.message,
                confirmButtonText: "OK",
            }).then(() => {
                navigate('/User');
            });
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Field",
                text: `Something went Wrong: ${error}`,
                confirmButtonText: "OK"
            });
        })
    }

    return (
        <div>
            <main>
                <div>
                    <Button
                        id='Back'
                        label='Back'
                        color='bg-primary'
                        hover='bg-blue-700'
                        width='32'
                        height='10'
                        src='arrow-left'
                        onClick={handleBack}
                    />
                </div>
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='md:w-3/4 mx-5'>
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Nama Role</label>
                                <input
                                    type="text"
                                    id='nama'
                                    name='nama'
                                    placeholder='Input Nama Role...'
                                    value={editRole.nama}
                                    onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama_lengkap"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Nama Lengkap</label>
                                <textarea
                                    rows={5}
                                    id='nama_lengkap'
                                    name='nama_lengkap'
                                    placeholder='Input Nama Lengkap'
                                    value={editRole.description}
                                    onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="status"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Status</label>
                                <select
                                    id='status'
                                    name='status'
                                    value={editRole.status.toString()}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                >
                                    <option value="">== Pilih Opsi ==</option>
                                    <option value="true">ACTIVE</option>
                                    <option value="false">INACTIVE</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-end text-center'>
                            <button
                                type='submit'
                                className='bg-primary hover:bg-blue-500 text-white  font-bold py-2 px-4 rounded-lg flex gap-3'
                            >Submit
                                <img src="./src/assets/save-2.svg" alt="save-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default EditRole