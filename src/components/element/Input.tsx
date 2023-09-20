import React, {FC} from 'react'

interface inputProps {
    id: string;
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    width?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<inputProps> = ({id, label, name, type, placeholder, value,width, onChange}) => {
  return (
    <div className="mb-4">
      <label className={`block text-gray-700 font-semibold mb-2 ${width}`}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light bg-white"
      />
    </div>
  )
}

export default Input