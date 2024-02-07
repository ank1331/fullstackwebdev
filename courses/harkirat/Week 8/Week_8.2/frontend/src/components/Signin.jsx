import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/login", input);
      console.log(res.data.user);
      console.log("User logged in successfully successfully!");
      // navigate("/s")
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  console.log(input);
  return (
    <div className=" text-center mt-10">
      <div className="mb-10 font-bold"> This is Sign in page</div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-x-2">
            <label> Email</label>
            <input
              id="email"
              onChange={handleChange}
              type="text"
              className="border-2 p-2"
              placeholder="Enter Email"
            />
          </div>
          <div className="space-x-2 mt-4">
            <label> Password</label>
            <input
              id="password"
              onChange={handleChange}
              type="text"
              className="border-2 p-2"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="mt-4 bg-green-500 uppercase rounded-md w-20 mx-auto p-2">
            Sing In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
