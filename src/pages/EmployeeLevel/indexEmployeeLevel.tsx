// import React from 'react'
import { useNavigate } from "react-router"

import Button from "../../components/element/Button"

const indexEmployeeLevel = () => {
  const navigate = useNavigate();
  const handleAddEmployeeLevel = () => {
    navigate("/AddEmployeeLevel");
  }
  return (
    <div>
      <main>
        <div>
          <main>
            <div className='flex justify-end'>
              <Button
                id='Add Button'
                label='Add Employee Level'
                color='bg-primary'
                hover='bg-sky-500'
                onClick={handleAddEmployeeLevel}
                src={'add-to-queue'}
              />
            </div>
            <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
              <div className='relative overflow-x-auto'>
                <table className="min-w-full table-auto bg-white shadow">
                  <thead className=" bg-sky-900">
                    <tr className="text-white">
                      <th className="p-3 border text-left">No. </th>
                      <th className="p-auto border">Employee Name</th>
                      <th className="p-3 border">Jabatan</th>
                      <th className="p-auto border">Employee Status</th>
                      <th className="p-auto border">Join Date</th>
                      <th className="p-auto border">User Registered</th>
                      <th className="p-auto border">Email</th>
                      <th className="p-5 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </main >
    </div >
  )
}

export default indexEmployeeLevel