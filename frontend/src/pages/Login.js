import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import TextInput from "../components/TextInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    const postBody = { email: username, password: password };
    axios
      .post("http://localhost:5000/api/auth/login", postBody, {})
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("type", res.data.type);
        toast.success("Login Successful !");
        navigate("/admin/add-alumni");
      })
      .catch((err) => {
        console.log(err);
        // toast.error(`Error: ${err}`);

        if (err.code === "ERR_BAD_REQUEST") {
          toast.error("Wrong Password!");
        }
      });
  };

  return (
    <main className="w-screen h-screen bg-gradient-to-br to-black from-teal-600 flex items-center justify-center overflow-hidden">
      <div className="w-[400px] h-fit bg-white rounded-lg p-8 shadow-lg">
        <Heading>Login</Heading>
        <TextInput
          className="mt-8"
          valueState={[username, setUsername]}
          placeholder="Enter email"
          title="Email"
        />
        <TextInput
          className="mt-4"
          valueState={[password, setpassword]}
          placeholder="Enter Password"
          title="Password"
          type="password"
        />
        <Button text="Login" className="mt-8" handleClick={handleClick} />
      </div>
    </main>
  );
};

export default Login;
