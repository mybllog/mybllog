import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import useForm from "react-hook-form";
import Signin from "./Signin";
import Signup from "./Signup";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex absolute top-3 xl:right-80 ">
      <NavLink to = "/newuser">
        <FontAwesomeIcon
          icon={faUserAlt}
          onClick={() => setShowModal(true)}
          className="flex relative left-72"
          name="Accounts"
          style={{
            fontSize: 18,
            color: "black",
          }}
        />
        </NavLink>
      </div>
    
     
    </div>
  );
};

export default Register;
