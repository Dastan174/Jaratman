import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../helpers/Api";

const AuthenticationPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(email, password);

  // async function createUser(email, password) {
  //   await axios.post(`${API_URL}/auth/register`, email, password);
  // }
  async function login() {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      const token = response.data.token;
      document.cookie = `token=${token}; path=/`;
      navigate("/admin");
    } catch (error) {
      console.error('Login error:', error);
    }
  
}

  return (
    <>
      <section id="authentication">
        <div className="container">
          <div className="authentication">
            <h1>Login</h1>
            <div className="inputs">
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Login"
                sx={{ width: "70%", mt: "20px" }}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                sx={{ width: "70%", mt: "20px" }}
              />
              <div className="btns">
                <div className="forgotPassword">
                  <p>Forgot Password?</p>
                  <p onClick={() => navigate("/registration")}>
                    Create Account
                  </p>
                </div>
                <Button
                  onClick={login}
                  sx={{ mt: "20px", width: "160px" }}
                  variant="contained"
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthenticationPage;
