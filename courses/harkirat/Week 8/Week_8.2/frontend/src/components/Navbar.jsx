import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    function handlesignup(){
        navigate("/signup")
    }
    function handlesignin(){
        navigate("/signin")
    }

  return (
    <div className="flex justify-between p-6 bg-blue-200 shadow-md">
        <Link to = "/">
      <div className=" font-bold ml-8">Payments App</div>
        </Link>
        <div>
      <div className="flex border-2 w-[200px] justify-evenly hidden  ">
        <div> Hello, User ka naam</div>
        <div className=" border-2 w-8 h-8 rounded-full text-center mx-auto">U</div>
        </div>
        <div className="flex justify-evenly space-x-4">
            <button onClick={handlesignup} className="bg-blue-400" >SIGN UP</button>
            <button onClick ={handlesignin} className="bg-blue-400" >SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
