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
        password: '',
        no_hp: '',
        jabatan: '',
        devisiId: '',
        roleId: '',
        status: ''
    });
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [nama_lengkap, setNama_lengkap] = useState('');
    const [surel, setSurel] = useState('');
    const [password, setPassword] = useState('');
    const [no_hp, setNo_hp] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [devisiId, setDevisiId] = useState('');
    const [roleId, setRoleId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const body = {
        //     nama_lengkap: nama_lengkap,
        //     surel: surel,
        //     password: password,
        //     no_hp: no_hp,
        //     jabatan: jabatan,
        //     devisiId: devisiId,
        //     roleId: roleId,
        //     status: status
        // }
        // axios.post('user', body, {
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
                                        htmlFor="password"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Password</label>
                                    <input
                                        type="password"
                                        id='password'
                                        name='password'
                                        placeholder='Input Password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
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
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
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
                                        htmlFor="status"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >status</label>
                                    <select
                                        id='status'
                                        name='status'
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    >
                                        <option value="">== Pilih Opsi ==</option>
                                        <option value="true">Active</option>
                                        <option value="false">InActive</option>
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