import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface profileProps {
  id: string, 
  nama_lengkap?: string;
  jabatan?: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<profileProps>({
    id: '',
    nama_lengkap: '',
    jabatan: '',
  });
  const token = Cookies.get("token");
  const getProfile = () => {
    axios
      .get("profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log('Hasil : ', response?.data?.data)
        setProfile(response?.data?.data)
      })
      .then((error) => {
        console.log('Error : ', error)
      })
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <main className='flex gap-3'>
        <div className='p-4 h-full w-4/12 bg-white rounded-lg mt-5 place-self-center'>
          <img className="w-64 h-64 p-1 rounded-full" src="./src/assets/person.png" alt="user Profile" />
          <h3 className='text-center'>{profile.nama_lengkap}</h3>
          <p className='text-center'>{profile.jabatan}</p>
        </div>
        <div className='p-4 w-8/12 h-full bg-white rounded-lg mt-5'>
          <table>
            <tr>
              <td>Id</td>
              <td>:</td>
              <td>{profile.id}</td>

            </tr>
            <tr>
              <td>Nama Lengkap</td>
              <td>:</td>
              <td>{profile.nama_lengkap}</td>
            </tr>
            <tr>
              <td>Jabatan</td>
              <td>:</td>
              <td>{profile.jabatan}</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Profile