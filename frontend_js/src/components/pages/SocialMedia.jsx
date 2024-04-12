import React from "react";
import Social from "../image/logo-small.avif";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMedia = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
      className="social-media"
    >
      <img style={{ width: "80px" }} src={Social} alt="" />
      <h4
        style={{
          fontSize: "19px",
          fontFamily: "sans-serif",
          fontWeight: "400",
          letterSpacing: "0.6px",
          color: "#121212BF",
          margin: "15px 0",
        }}
      >
        A brand that strives to inspire and push creative culture forward.
      </h4>
      <p
        style={{
          fontSize: "18px",
          color: "#121212BF",
          fontFamily: "sans-serif",
          fontWeight: "300",
          width: "740px",
          lineHeight: "27px",
        }}
      >
        We approach our work with the mentality that every product made is a
        learning experience to improve our craft. We are practitioners and
        purveyors of creative culture and are inspired by its various forms from
        art, design, fashion, music, film, food, and more.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          marginTop: "20px",
        }}
        className="social-media-icons"
      >
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
};

export default SocialMedia;
