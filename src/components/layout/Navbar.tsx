import { FC, useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoIosArrowDown } from 'react-icons/io'


import Dropdown from '../element/Dropdown';

interface NavbarProps {
    id: string,
    titleNavbar: string,
    namePerson: string,
    avatar: string,
    level: string
}

const Navbar: FC<NavbarProps> = ({ id, titleNavbar, namePerson, avatar, level }) => {

    const role = Cookies.get("role");
    const email = Cookies.get("email");
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure want to Logout?',
            showCancelButton: true,
            cancelButtonText: "NO",
            confirmButtonText: "YES",
        }).then((result) => {
            Cookies.remove('username');
            Cookies.remove('token');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Success Logout',
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
            }).then((response) => {
                if (response?.isConfirmed) {
                    navigate('/');
                }
            });
        })

    };

    // State untuk mengontrol tampilan dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // Fungsi untuk menangani klik pada avatar atau nama pengguna
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="bg-white m-5 shadow-lg border rounded-lg text-black p-4 flex justify-between">
                {/* Navbar content */}
                <div className="flex items-center">
                    <p className="text-2xl font-semibold">{titleNavbar}</p>
                </div>
                <div className="relative inline-block text-left">
                    <button onClick={toggleDropdown} className="flex items-center space-x-2">
                        <img
                            src={avatar} // Ganti dengan path avatar Anda
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className='flex-col justify-start items-start inline-flex'>
                            <h4 className="text-sky-900 text-xl font-medium">{namePerson}</h4>
                            <p className='text-neutral-500 text-xs font-medium'>{level}</p>
                        </div>

                        <IoIosArrowDown />
                    </button>
                    {dropdownOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar