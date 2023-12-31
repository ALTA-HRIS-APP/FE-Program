import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

import Button from '../../components/element/Button';

const AddUser = () => {
    const token = Cookies.get('token');
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    const [divisionOption, setDivisionOption] = useState([]);
    const getDivision = () => {
        axios
            .get("devisi")
            .then((response) => {
                console.log("hasil : ", response?.data?.data);
                setDivisionOption(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const [roleOption, setRoleOption] = useState([]);
    const getRoleData = () => {
        if (token === undefined) {
            Swal.fire({
                icon: "error",
                title: "You Don't Have Access in this Page...",
                text: "GO BACK!!!",
                backdrop: "#fff",
                confirmButtonText: "OK"
            }).then((response) => {
                if (response.isConfirmed) {
                    navigate("/");
                }
            })
        } else {
            axios
                .get("role")
                .then((response) => {
                    console.log("hasil : ", response?.data?.data);
                    setRoleOption(response?.data?.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }
    useEffect(() => {
        getDivision();
        getRoleData();
    }, []);
    const [formData, setFormData] = useState({
        nama_lengkap: '',
        surel: '',
        no_hp: '',
        jabatan: '',
        devisiId: '',
        roleId: '',
        employee_status: '',
        status: false,
    });
    const handleChange = (e: any) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'status' ? value === 'true' : value,
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post('user', formData, {
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
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-5'>
                            <div className='w-1/2'>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="nama_lengkap"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id='nama_lengkap'
                                        name='nama_lengkap'
                                        placeholder='Input Nama Lengkap'
                                        value={formData.nama_lengkap}
                                        onChange={handleChange}
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="email"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Email</label>
                                    <input
                                        type="email"
                                        id='surel'
                                        name='surel'
                                        placeholder='Input Email'
                                        value={formData.surel}
                                        onChange={handleChange}
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg focus:ring-blue-500 w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="no_hp"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >nomor HP</label>
                                    <input
                                        type="text"
                                        id='no_hp'
                                        name='no_hp'
                                        placeholder='Input Nomor HP'
                                        value={formData.no_hp}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="jabatan"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Jabatan</label>
                                    <select
                                        id='jabatan'
                                        name='jabatan'
                                        value={formData.jabatan}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        <option value="Clevel">C - LEVEL</option>
                                        <option value="manager">MANAGER</option>
                                        <option value="HR">HR</option>
                                        <option value="karyawan">KARYAWAN</option>
                                    </select>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="devisiId"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Division</label>
                                    <select
                                        id='devisiId'
                                        name='devisiId'
                                        value={formData.devisiId}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        {divisionOption.map((item: any, index) => (
                                            <option key={index} value={item.id}>{item.nama}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="roleId"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >role</label>
                                    <select
                                        id='roleId'
                                        name='roleId'
                                        value={formData.roleId}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        {roleOption.map((role: any, index) => (
                                            <option key={index} value={role.id}>{role.nama}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="employee_status"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Status Employee</label>
                                    <select
                                        id='employee_status'
                                        name='employee_status'
                                        value={formData.employee_status}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        <option value="permanent">Karyawan Tetap</option>
                                        <option value="contract">Kontrak</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="status"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Status</label>
                                    <select
                                        id='status'
                                        name='status'
                                        value={formData.status.toString()}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        <option value="true">ACTIVE</option>
                                        <option value="false">INACTIVE</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end text-center'>
                            <button type='submit' className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg flex gap-3'>Submit<img src="./src/assets/save-2.svg" alt="save-2" /></button>
                        </div>

                    </form>

                </div>
            </main>
        </div>

    )
}

export default AddUser