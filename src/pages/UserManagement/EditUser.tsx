import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

import Button from '../../components/element/Button';

interface editUserProps {
    id: string;
    nama_lengkap?: string;
    surel?: string;
    no_hp?: string;
    jabatan?: string;
    employee_status?: string;
    devisiId?: string;
    roleId?: string;
    status: boolean;
}

const EditUser = () => {
    const location = useLocation();
    const id = location?.state?.id;
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const handleBack = () => {
        navigate(-1)
    }

    const [userData, setUserData] = useState<editUserProps>({
        id: '',
        nama_lengkap: '',
        surel: '',
        no_hp: '',
        jabatan: '',
        employee_status: '',
        devisiId: '',
        roleId: '',
        status: false,
    })

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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: name === 'status' ? value === 'true' : value,
        });
    }

    const getEditUserData = (id: any) => {
        axios
            .get(`user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                console.log("hasil get: ", response?.data?.data);
                setUserData(response?.data?.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            })

    }

    useEffect(() => {
        getEditUserData(id);
        getDivision();
        getRoleData();
    }, [id]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.put('user', userData, {
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
                                        value={userData.nama_lengkap}
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
                                        value={userData.surel}
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
                                        value={userData.no_hp}
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
                                        value={userData.jabatan}
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
                                        value={userData.devisiId}
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
                                        value={userData.roleId}
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
                                        value={userData.employee_status}
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
                                        value={userData.status.toString()}
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

export default EditUser