import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import Button from '../../components/element/Button';

interface detailUserProps {
  id: string;
  nama_lengkap?: string;
  surel?: string;
  no_hp?: string;
  jabatan?: string;
  status?: boolean;
  employee_status?: string;
  devisi?: string;
  role?: string;
}

const DetailUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location?.state?.id;
  const token = Cookies.get('token');

  const handleBack = () => {
    navigate(-1)
  }

  const [detailUser, setDetailUser] = useState<detailUserProps>({
    id: '',
    nama_lengkap: '',
    surel: '',
    no_hp: '',
    jabatan: '',
    status: false,
    employee_status: '',
    devisi: '',
    role: '',
  });

  const getDetailUser = (id: any) => {
    axios
      .get(`user/${id}`)
      .then((response) => {
        console.log('Hasil user = ', response?.data?.data);
        setDetailUser(response?.data?.data);
      })
      .catch((error) => {
        console.log('Error From API Mentee : ', error);
      })
  }
  useEffect(() => {
    getDetailUser(id);
  }, [id])
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
        <div className='flex gap-3'>
          <div className='p-4 h-full w-4/12 bg-white rounded-lg mt-5 place-self-center'>
            <div className='flex justify-center'>
              <img className="w-64 h-64 p-1 rounded-full" src="../src/assets/person.png" alt="user Profile" />
            </div>
            <div className='text-center'>
              <h3 className='text-3xl font-bold'>{detailUser.nama_lengkap}</h3>
              <p className='text-center'>{detailUser.jabatan}</p>
            </div>

          </div>
          <div className='p-4 w-8/12 h-full bg-white rounded-lg mt-5'>
            <table>
              <tr>
                <td>Id</td>
                <td>:</td>
                <td>{detailUser.id}</td>

              </tr>
              <tr>
                <td>Nama Lengkap</td>
                <td>:</td>
                <td>{detailUser.nama_lengkap}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{detailUser.surel}</td>
              </tr>
              <tr>
                <td>Nomor Handphone</td>
                <td>:</td>
                <td>{detailUser.no_hp}</td>
              </tr>
              <tr>
                <td>Jabatan</td>
                <td>:</td>
                <td>{detailUser.jabatan}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>:</td>
                <td>{detailUser.status ? "Active" : "Inactive"}</td>
              </tr>
              <tr>
                <td>Status Kepegawaian</td>
                <td>:</td>
                <td>{detailUser.employee_status}</td>
              </tr>
              <tr>
                <td>Devisi</td>
                <td>:</td>
                <td>{detailUser.devisi.nama}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>{detailUser.role.nama}</td>
              </tr>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}

export default DetailUser