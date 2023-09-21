import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/element/Button'
import Swal from 'sweetalert2';

const AddRole = () => {
    const token = Cookies.get('token');
    const navigate = useNavigate();
    const handleBack = (e: any) => {
        navigate(-1);
    }
    const [formRole, setFormRole] = useState({
        nama: '',
        description: '',
        status: ''
    });
    const handleChange = (e: any) => {
        setFormRole({...formRole, [e.target.name]: e.target.value})
    }
    const handleSubmmit = (e: any) => {
        e.preventDefault();
        axios.post('role', formRole, {
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
                navigate('/Role');
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    confirmButtonText: "OK",
                });
            })
        })
    }

    return (
        <div>
            <main>
                <div>
                    <Button
                        id='Back'
                        label='Back'
                        src='arrow-left'
                        color='bg-primary'
                        hover='bg-blue-700'
                        onClick={handleBack}
                    />
                </div>
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <form onSubmit={handleSubmmit}>
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
                                    value={formRole.nama}
                                    onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="description"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Deskripsi</label>
                                <textarea
                                    rows={5}
                                    id='description'
                                    name='description'
                                    placeholder='Input Deskripsi...'
                                    value={formRole.description}
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
                                >status</label>
                                <select
                                    id='status'
                                    name='status'
                                    value={formRole.status}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                >
                                    <option value="">== Pilih Opsi ==</option>
                                    <option value="true">Active</option>
                                    <option value="false">InActive</option>
                                </select>
                            </div>
                            <div className='flex justify-end text-center mt-8'>
                                <button type='submit' className='bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg flex gap-3'>Submit<img src="./src/assets/save-2.svg" alt="save-2" /></button>
                            </div>
                        </div>

                    </form>
                </div>
            </main >
        </div >
    )
}

export default AddRole