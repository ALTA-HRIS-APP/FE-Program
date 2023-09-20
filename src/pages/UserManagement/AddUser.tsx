import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/element/Button'

const AddUser = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <main>
                <Button
                id='Back'
                label='Back'
                color='bg-blue-500'
                hover='bg-blue-700'
                width='w-20'
                height='h-10'
                src='arrow-left'
                onClick={handleBack}
                />
                <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    sjsjs
                </div>
            </main>
        </div>

    )
}

export default AddUser