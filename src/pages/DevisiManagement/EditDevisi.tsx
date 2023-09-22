import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

import Button from '../../components/element/Button';

interface EditDevisiProps {
    nama: string;
}

const EditDevisi = () => {
    const location = useLocation();
    const id = location?.state?.id;
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const handleBack = () => {
        navigate(-1)
    }
    const [getDevisi, setGetDevisi] = useState<EditDevisiProps>({
        nama: ''
    })
    const handleChange = (e: any) => {
        setGetDevisi({ ...getDevisi, [e.target.name]: e.target.value });
    }
    const getEditDevisi = (id: any) => {
        axios
            .get(`devisi/${id}`)
            .then((response) => {
                setGetDevisi(response?.data?.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            })

    }

    useEffect(() => {
        getEditDevisi(id);
    }, [id]);

    const handleSubmit = (e: any) => {
        console.log("Data:", getDevisi);
        e.preventDefault();
        axios.put(`devisi/${id}`, getDevisi, {
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
                navigate('/Devisi');
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
                        <div className='w-3/4'>
                            <div className='mb-4'>
                                <label
                                    htmlFor="nama"
                                    className='block text-gray-700 font-semibold mb-2'
                                >Nama Devisi</label>
                                <input
                                    type="text"
                                    id='nama'
                                    name='nama'
                                    placeholder='Input Nama Devisi...'
                                    value={getDevisi.nama}
                                    onChange={handleChange}
                                    required
                                    autoComplete='off'
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                />
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

export default EditDevisi