import { FC, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'

interface SiderbarProps {
    label: string;
    link: string;
    active?: boolean;
    // subMenu?: MenuItem[];
}


const Sidebar: FC<{ menuData: SiderbarProps[] }> = ({ menuData }) => {

    // const [isOpen, setIsOpen] = useState(false)
    // const toggleDropdown = () => {
    //     // Fungsi untuk membuka dan menutup dropdown
    //     setIsOpen(!isOpen);
    // };


    return (
        <div className="bg-0D3966 text-white h-screen w-64 p-4 shadow-md">
            {/* Sidebar content */}
            <a href="#" className='flex justify-center'>
                <img src="src/assets/logo.png" alt="Logo-Alta HRIS" />
            </a>
            <div className='pt-10'>
                <ul>
                    {menuData.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className={`flex text-xl ${item.active ? "bg-sky-700 mt-2 p-2  rounded-md shadow-md" : "text-white"} items-center p-2 mb-4  text-white rounded-lg hover:bg-gray-100 hover:text-yellow-300 group`}>
                                <AiFillHome />
                                <span className='ml-3'>{item.label}</span>
                                {/* {item.submenu && <Sidebar menuData={item.submenu} />} */}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>

        </div>

    )
}

export default Sidebar