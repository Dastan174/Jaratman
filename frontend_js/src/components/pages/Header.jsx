import React from "react";
import Logo from "../image/logo40.webp";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import LogoJaratman from "../image/Jaratman.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <img
                style={{ cursor: "pointer" }}
                src={LogoJaratman}
                onClick={() => navigate("/")}
              />
            </div>
            <div className="cart">
              <AddIcon
                sx={{
                  fontSize: "32px",
                  fontWeight: "100",
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/admin")}
              />

              <SearchIcon
                sx={{ fontSize: "32px", fontWeight: "100", cursor: "pointer" }}
              />

              <LocalMallIcon
                onClick={() => navigate("/cart")}
                sx={{
                  fontSize: "32px",
                  fontWeight: "100",
                  cursor: "pointer",
                }}
              />

              <AccountCircle
                onClick={() => navigate("/registration")}
                sx={{
                  fontSize: "32px",
                  fontWeight: "100",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
