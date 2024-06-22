import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  ModalHeader,
} from "reactstrap";

function Navbard(props: any) {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggleModal = () => setOpen(!open);
  const closeModal = () => setOpen(!open);

  return (
    <div>
      <Navbar color="faded" style={{ backgroundColor: "#3738A2" }}>
        <NavbarBrand
          href="/"
          className="me-auto"
          style={{ color: "#F5CBA7", fontSize: 30 }}
        >
          <img
            src="/img/logo.jpg"
            alt="."
            width={60}
            style={{ borderRadius: 50 }}
          />{" "}
          FL'ÂME
          <span style={{ fontSize: 13, color: "#F5CBA7", marginLeft: 7 }}>
            Le Voyage que votre esprit réclame
          </span>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ backgroundColor: "#F5CBA7" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{ marginLeft: 35, width: 150 }}>
            <NavItem>
              <NavLink href="/nosproduits" style={{ color: "#F5CBA7" }}>
                NOS PRODUITS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ color: "#F5CBA7" }}>
                NOS SPECIALITES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ color: "#F5CBA7" }}>
                ACTUALITE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#F5CBA7", cursor: "pointer" }}
                onClick={toggleModal}
              >
                CONNECTE-VOUS
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <>
        <Modal isOpen={open} centered>
          <ModalHeader style={{ backgroundColor: "#F5CBA7" }}>
            <h5 style={{ textAlign: "center", color: "#3738A2" }}>CONNEXION</h5>
            <span
              style={{
                fontSize: 20,
                position: "absolute",
                top: 5,
                right: 10,
                cursor: "pointer",
                color: "#3738A2",
              }}
              onClick={closeModal}
            >
              X
            </span>
          </ModalHeader>
          <ModalBody>
            <Input type="text" placeholder="Nom d'utilisateur"></Input>
            <br />
            <Input type="password" placeholder="Mot de passe"></Input>
            <br />
            <a href="/inscription" style={{ fontSize: 12, cursor: "pointer" }}>
              Si vous n'avez pas un compte?Inscrivez-vous.
            </a>
          </ModalBody>
          <ModalFooter style={{ backgroundColor: "#3738A2" }}>
            <Button
              style={{ backgroundColor: "#F5CBA7", color: "red" }}
              onClick={closeModal}
            >
              Annuler
            </Button>
            <Button style={{ backgroundColor: "#F5CBA7", color: "green" }}>
              Confirmer
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </div>
  );
}

export default Navbard;
