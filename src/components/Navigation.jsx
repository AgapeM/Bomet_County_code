import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";

function CollapsibleExample() {
  const [session] = useAuthState(auth);

  const loginUser = () => {
    auth.signInWithPopup(provider);
  };

  const logoutUser = () => {
    auth.signOut();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      fixed="top"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          style={{
            marginLeft: 30,
          }}
        >
          Bomet County Development Projects Management Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {session && (
              <Nav.Link
                style={{
                  marginRight: 20,
                }}
              >
                {session.displayName}
              </Nav.Link>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                width: 200,
              }}
            >
              {session ? (
                <Button onClick={logoutUser} variant="danger">
                  Logout
                </Button>
              ) : (
                <Button onClick={loginUser} variant="primary">
                  Login
                </Button>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
