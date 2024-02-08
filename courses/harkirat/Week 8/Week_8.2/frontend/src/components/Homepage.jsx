import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userdetail } from "../store/atom/useratom";
import axios from "axios";

export default function Homepage() {
  const [userdetails, setvalueuser] = useRecoilState(userdetail);
  const [allusersdata, setAllusersdata] = useState([]);
  const [id_user, setid_user] = useState(null);
  const [amount, setamount] = useState({
    from: userdetails.length > 0 ? userdetails[0]._id : "",
    to: id_user,
    amount: parseInt(40),
  });

  console.log("Initial user",userdetails)

  useEffect(() => {
    const fetchdata = async () => {
      const usertoken = localStorage.getItem("usertoken");
      try {
        const res = await fetch("http://localhost:3000/allusers", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${usertoken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        setAllusersdata(data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    if (id_user) {
      const getamount = async () => {
        const usertoken = localStorage.getItem("usertoken");
        try {
          await fetch("http://localhost:3000/transfer", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${usertoken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(amount),
          });
          console.log("Amount transferred successfully!");
          // Update user balance after transaction
          fetchUserDetails();
          console.log("moving to getdata")
          getdata();
        } catch (error) {
          console.error("Error transferring amount:", error);
        }
      };

      getamount();
    }
  }, [id_user, amount]);

  const fetchUserDetails = async () => {
    const usertoken = localStorage.getItem("usertoken");
    try {
      const res = await fetch("http://localhost:3000/allusers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${usertoken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setAllusersdata(data.user);
      console.log("User details updated");
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  async function getdata() {
    try {
      const usered = await axios.get(
        `http://localhost:3000/user/${
          userdetails.length > 0 ? userdetails[0]._id : ""
        }`
      );
      setvalueuser([usered.data.user]);
      console.log("after get data",userdetails);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  function handleClick(userId) {
    console.log("userid is: ", userId);
    setid_user(userId);
    setamount((prevval) => ({ ...prevval, to: userId }));
  }

  return (
    <>
      <div>
        {userdetails.length > 0 ? (
          userdetails.map((user) => (
            <div key={user._id}>
              <div className="font-bold m-6">
                Your Balance: ${user.myamount}
              </div>
            </div>
          ))
        ) : (
          <div> Please Login </div>
        )}
      </div>

      <div>
        {allusersdata.length > 0 ? (
          allusersdata.map((user) => (
            <div className="flex justify-around space-y-8" key={user._id}>
              <div className=" rounded-md mt-8 font-bold text-black">
                {user.email}
              </div>
              <div>{user._id}</div>
              <button
                onClick={() => handleClick(user._id)}
                className="bg-black rounded-md p-2 text-white"
              >
                Send Money
              </button>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
}
