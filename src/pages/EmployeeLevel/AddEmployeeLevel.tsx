// import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../../components/element/Button'

const AddEmployeeLevel = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <main>
                <div className=''>
                    <Button
                        id='Back Button'
                        label='Back'
                        color='bg-primary'
                        hover='bg-sky-500'
                        onClick={handleBack}
                        src={'arrow-left'}
                    />
                </div>
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>

                    <form action="">
                        <div className="w-3/5">
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Nama</label>
                                <input
                                    type="text"
                                    id='nama'
                                    name='nama'
                                    placeholder='Input Nama Role...'
                                    // value={formRole.nama}
                                    // onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="status"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Jabatan</label>
                                <select
                                    id='status'
                                    name='status'
                                    // value={formData.status}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                >
                                    <option value="">== Pilih Opsi ==</option>
                                    <option value="true">Active</option>
                                    <option value="false">InActive</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="status"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Employee Status</label>
                                <select
                                    id='status'
                                    name='status'
                                    // value={formData.status}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                >
                                    <option value="">== Pilih Opsi ==</option>
                                    <option value="true">Active</option>
                                    <option value="false">InActive</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Join Date</label>
                                <input
                                    type="date"
                                    id='nama'
                                    name='nama'
                                    placeholder='Input Nama Role...'
                                    // value={formRole.nama}
                                    // onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="status"
                                    className='block text-gray-700 font-semibold mb-2'
                                >User Registered</label>
                                <select
                                    id='status'
                                    name='status'
                                    // value={formData.status}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                >
                                    <option value="">== Pilih Opsi ==</option>
                                    <option value="true">Active</option>
                                    <option value="false">InActive</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Email</label>
                                <input
                                    type="email"
                                    id='nama'
                                    name='nama'
                                    placeholder='Input Nama Role...'
                                    // value={formRole.nama}
                                    // onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
                            </div>
                        </div>
                        <div className='flex justify-end mt-8'>
                            <button
                                type='submit'
                                className='bg-primary w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg flex gap-3 justify-center'
                            >Submit
                                <img
                                    src="./src/assets/save-2.svg"
                                    alt="save-2" />
                            </button>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}

export default AddEmployeeLevel