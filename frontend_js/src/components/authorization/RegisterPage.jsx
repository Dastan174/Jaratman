import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { useProducts } from "../../context/ProductContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { createUser } = useProducts();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function register() {
    return await register(email);
  }

  return (
    <>
      <Box>{error && <Alert severity="error">{error}</Alert>}</Box>
      <section id="registration">
        <div className="container">
          <div className="registration">
            <h1>Registration</h1>
            <div className="inputs">
              <TextField
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                sx={{ width: "70%", mt: "20px" }}
              />
              <TextField
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                sx={{ width: "70%", mt: "20px" }}
              />
              <div className="btns">
                <div className="forgotPassword">
                  <p onClick={() => navigate("/login")}>
                    Already signed? Go to Login
                  </p>
                </div>
                <Button
                  sx={{
                    mt: "20px",
                    width: "200px",
                    height: "34px",
                    fontSize: "11px",
                  }}
                  variant="contained"
                >
                  Sign in with Google{" "}
                  <GoogleIcon sx={{ fontSize: "21px", ml: "6px" }} />
                </Button>
                <Button
                  onClick={register}
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

export default RegisterPage;
