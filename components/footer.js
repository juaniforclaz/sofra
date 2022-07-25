import Image from "next/image";
import { Row, Col, Nav } from 'react-bootstrap';
import Link from "next/link";

export default function Footer() {
    return (
        <div className="container-fluid bg-white footer mt-3 shadow-sm">

            <div className='text-center py-3 container-fluid'>

                <Row>

                    <Col>

                        <div>

                            <Image
                                src='/logo.png'
                                width={100}
                                height={50}
                                className='align-items-center mx-auto shadow-sm'
                                alt='sofra bags'
                            />

                            <Nav className="col me-auto navbar-nav d-flex flex-row gap-2 justify-content-center mb-2">

                                <Link href='/'><a className="nav-link">Inicio -</a></Link>

                                <Link href='/catalogo'><a className="nav-link">Catalogo -</a></Link>

                                <Link href='/contacto'><a className="nav-link">Contacto -</a></Link>

                                <Link href='/faq'><a className="nav-link">Faq</a></Link>

                            </Nav>

                            <p className="text-muted fw-light">Copyright SOFRA - 2022. Todos los derechos reservados.</p>

                        </div>



                    </Col>

                </Row>

            </div>

        </div>
    )
}