import { FC } from "react";

interface btnProps {
  id: string;
  label?: string;
  color?: string;
  width?: string;
  height?: string;
  hover?: string;
  src?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<btnProps> = ({
  id,
  label,
  color,
  width,
  height,
  hover,
  src,
  onClick,
}) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className={`flex gap-3 justify-center items-center text-white ${color} w-${width} h-${height} hover:${hover} rounded-md px-4 py-2 font-semibold`}
      >
        {label} <img src={`./src/assets/${src}.svg`} alt={`${src}`} />
      </button>
    </>
  );
};

export default Button;
