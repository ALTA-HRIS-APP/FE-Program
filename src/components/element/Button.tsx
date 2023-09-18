import { FC } from 'react'

interface btnProps {
    id: string;
    label?: string;
    color?: string;
    width?: string;
    height?: string;
    hover?: string;
    onClick?: React.MouseEventHandler;
}

const Button: FC<btnProps> = ({ id, label, color, width, height, hover, onClick }) => {
    return (
        <>
            <button
                id={id}
                onClick={onClick}
                className={`text-white ${color} w-${width} h-${height} ${hover} rounded-md px-4 py-2 font-semibold`}
            >
                {label}
            </button>
        </>
    )
}

export default Button