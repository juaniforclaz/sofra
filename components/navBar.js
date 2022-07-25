import Link from "next/link";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";

export default function NavBar() {

    return (

        <Navbar expand="lg" className="mb-3 border shadow-sm py-3 bg-white nav">

            <Container>

                <Navbar.Brand className="d-flex">

                    <Link href={'/'}>

                        <Image
                            src='/logo.png'
                            width={100}
                            height={50}
                            className='align-items-center mx-auto shadow-sm'
                        />

                    </Link>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="col me-auto navbar-nav">

                        <Link href='/'><a className="nav-link">Inicio</a></Link>

                        <Link href='/catalogo'><a className="nav-link">Catalogo</a></Link>

                        <Link href='/contacto'><a className="nav-link">Contacto</a></Link>

                        <Link href='/faq'><a className="nav-link">Faq</a></Link>

                    </Nav>

                    <Nav className="col me-auto navbar-nav d-flex justify-content-end">

                        <input type={'text'} className='p-1 w-50' placeholder="Buscar"/>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>


    )

}