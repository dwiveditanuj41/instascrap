import React from "react";
import { Menu, Button } from "semantic-ui-react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Navbar = () => {
  const copyToClipboard = str => {
    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Link Copied to Clipboard");
    toast.success("Link Copied");
  };
  return (
    <React.Fragment>
      <hr />

      <Menu>
        <Menu.Item>
          <StyledButton
            onClick={() => {
              copyToClipboard(window.location.href);
            }}
          >
            {" "}
            Copy Link
          </StyledButton>
        </Menu.Item>
        <StyledHeader> Welcome to InstaScrape</StyledHeader>
      </Menu>
    </React.Fragment>
  );
};

const StyledButton = styled(Button)`
  background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.9;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  position: fixed;
`;

const StyledHeader = styled.h1`
  margin-left: 40%;
`;

export default Navbar;
