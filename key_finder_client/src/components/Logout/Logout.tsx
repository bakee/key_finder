import React, { FC, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/storage";

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    removeToken();
    navigate("/");
  }, []);
  return <></>;
};

export default Logout;
