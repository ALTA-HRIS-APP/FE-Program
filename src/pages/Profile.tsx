import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface profileProps {
  nama_lengkap: string;
  jabatan: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<profileProps>({
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
  console.log("profile:", profile);


  return (
    <div>
      <main>
        <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
          
            <table>
              {/* {profile ? (
                
              ) : (
                
              )} */}
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{profile.nama_lengkap}</td>
                <td>{profile.jabatan}</td>
              </tr>
              
            </table>
        </div>
      </main>
    </div>
  )
}

export default Profile