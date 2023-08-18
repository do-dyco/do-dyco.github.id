import React from "react";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")({
  textAlign: "center",
});

const Footer = () => {
  return (
    <FooterContainer>
      <p style={{ color: "white" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "yellow" }}> Dody Portofolio</span>
      </p>
    </FooterContainer>
  );
};

export default Footer;
