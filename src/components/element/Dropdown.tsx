import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'

const Dropdown = () => {

    // State untuk mengontrol tampilan dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Fungsi untuk menampilkan atau menyembunyikan dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
                <img
                    src="https://i.pravatar.cc/300" // Ganti dengan path avatar Anda
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-800">John Doe</span>
                <IoIosArrowDown/>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown