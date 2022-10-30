import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Heading from "../components/Heading";
import Inputfield from "../components/TextInput";

const AddUsers = () => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [phnNo, setPhnNo] = useState("");
  const [currentOccupation, setCurrentOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [lkdn, setLkdn] = useState("");
  const [pwd, setpwd] = useState("");
  const [rpwd, setrpwd] = useState("");

  useEffect(() => {
    axios.post("http://localhost:8080/api/user/add", {});
  }, []);

  return (
    <section className="px-8 py-8 w-full">
      <Heading>Add Alumni</Heading>
      <div className="mt-8 w-full lg:pr-[20%] h-[calc(100vh-20rem)] overflow-auto space-y-2">
        <div className="flex items-center w-full space-x-4">
          <Inputfield
            valueState={[name, setName]}
            title="Name"
            placeholder="Enter name"
          />
          <Inputfield
            valueState={[phnNo, setPhnNo]}
            title="Phone number"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex items-center w-full space-x-4">
          <Inputfield
            valueState={[email, setEmail]}
            title="Email"
            placeholder="Enter email"
          />
          <Inputfield
            valueState={[dob, setDob]}
            title="Date of birth"
            placeholder="Enter Date of Birth"
          />
        </div>

        <div className="flex items-center w-full space-x-4 mt-4">
          <Inputfield
            type="Password"
            valueState={[pwd, setpwd]}
            title="Password"
            placeholder="Enter your password here"
          />
          <Inputfield
            type="Password"
            valueState={[rpwd, setrpwd]}
            title="Re-Enter Password"
            placeholder="Re-Enter your password here"
          />
        </div>
        <div className="flex items-center w-full space-x-4 mt-4"></div>

        <div className="flex items-center space-x-4 mt-8 w-1/2">
          <Button className="w-3/4" text="Add User" />
        </div>
      </div>
    </section>
  );
};

export default AddUsers;
