import { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "../components/element/Button";
import Potologin from "../assets/13.jpg";
import Input from "../components/element/Input";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("login", body)
      .then((response) => {
        const token = response?.data?.data?.token;
        // const email = response?.data?.data?.email;
        const role = response?.data?.data?.role;
        // // const name = response?.data?.data?.name;

        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Welcome to Dashboard, ${email}`,
          confirmButtonText: "OK",
        }).then((response) => {
          if (response.isConfirmed) {
            Cookies.set("token", token);
            // Cookies.set("email", email);
            Cookies.set("role", role);
            navigate("/Dashboard");
          }
        });
      })
      .catch((error) => {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Something Wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <section className="max-w-screen max-h-screen bg-white">
      <div className="grid grid-cols-2">
        <div className="w-full h-screen flex justify-center items-center">
          <img src={Potologin} width={400} height={400} />
        </div>
        <div className="w-full h-screen flex flex-col text-#29568A justify-center items-center">
          <div>
            
          </div>
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            width="w-64"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            width="w-64"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          {/* <input type="text" /> */}
          <div className=" my-5 text-center text-white">
            <button
              className="bg-blue-700 hover:bg-blue-500 rounded-lg w-64 h-12"
              onClick={handleLogin}>
                <img src="assets/login.svg" alt="" />
                Login</button>
            {/* <Button
              id="login"
              label="Login"
              color="bg-blue-950"
              hover="bg-blue-850"
              width="full"
              height="12"
              src="login"
              onClick={handleLogin}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
