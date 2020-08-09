import React,{Fragment, useState} from 'react'
import { Button, Navbar, Nav,Modal, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const Menu = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const products = [
        {product:''}
    ]

    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Carrito de Compras</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                </Nav>
                <Nav.Link href="#home" onClick={handleShow}><Badge variant="secondary">1</Badge> <FontAwesomeIcon icon={faCartArrowDown} size="lg" />  Carrito</Nav.Link>
            </Navbar.Collapse>

            </Navbar>
                <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Pagar
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}
 
export default Menu;